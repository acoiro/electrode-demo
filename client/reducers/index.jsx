import {combineReducers} from "redux";
import {intlReducer} from 'react-intl-redux'

// const checkBox = (store, action) => {
//   if (action.type === "TOGGLE_CHECK") {
//     return {
//       checked: !store.checked
//     };
//   }

//   return store || {checked: false};
// };

export default combineReducers({
  intl: intlReducer
});
