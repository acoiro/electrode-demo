//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from "electrode-redux-router-engine";
import {routes} from "../../client/routes";
import {createStore} from "redux";
import rootReducer from "../../client/reducers";

const Promise = require("bluebird");

function createReduxStore(req, match) { // eslint-disable-line
  var locales = ['de', 'fr', 'it', 'en'];
  var locale = locales[0];

  if (req.paramsArray.length) {
    var pathLocale = req.paramsArray[0].split('/')[0];
    if (locales.indexOf(pathLocale) >= 0) {
      locale = pathLocale;
    }
  }

  var intl = {
    locale: locale,
    messages: require(`../../config/locales/${locale}.json`),
    locales: locales,
    languages: {
      en: 'English',
      fr: 'Français',
      de: 'Deutsch',
      it: 'Italiano'
    }
  };

  const initialState = {
    intl: intl
  };
  const store = createStore(rootReducer, initialState);

  return Promise.resolve(store);
}

//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }
  return app.routesEngine.render(req);
};
