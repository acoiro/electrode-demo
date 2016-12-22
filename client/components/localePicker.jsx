import React, {PropTypes} from "react";
import styles from "../styles/base.css";
import {connect} from "react-redux";
import {intlShape} from 'react-intl';

class LocalePicker extends React.Component {
  componentDidMount() {
    var locale = navigator.language.split('-')[0]
    if (this.props.intl.locales.indexOf(locale) < 0) {
      locale = this.props.intl.locales[0]
    }
    window.location = `/${locale}/custom-url` + window.location.search;
  }

  render() {
    return <div></div>
  }
}

LocalePicker.propTypes = {
  intl: intlShape.isRequired
};


const mapStateToProps = (state) => {
  return {
    intl: state.intl
  };
};

export default connect(mapStateToProps)(LocalePicker);
