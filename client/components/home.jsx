import React, {PropTypes} from "react";
import {connect} from "react-redux";

import {toggleCheck, incNumber, decNumber} from "../actions";
import styles from "../styles/base.css";
import LocaleLink from "./localeLink";
import {intlShape} from 'react-intl';
import {Link} from "react-router";

class Home extends React.Component {
  render() {
    const {intl} = this.props;
    return (
      <div>
        <h1 className={styles.title}>
          {intl.messages['app.greeting']}
        </h1>
        <div className={styles.nav}>
          {intl.locales.map(function(locale, index){
            return <LocaleLink key={locale} locale={locale} label={intl.languages[locale]} intl={intl} />
          })}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state) => {
  return {
    intl: state.intl
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
