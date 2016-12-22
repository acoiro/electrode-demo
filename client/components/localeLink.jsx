import React, {PropTypes} from "react";
import styles from "../styles/base.css";

class LocaleLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    window.location = window.location.pathname.replace(/^\/.+?(\/.*|$)/, `/${this.props.locale}$1`) + window.location.search;
  }

  render() {
    var className = this.props.intl.locale == this.props.locale ? styles.activeButton : styles.button
    return <a href="#" onClick={this.handleClick} className={className}>{this.props.label}</a>;
  }
}

export default LocaleLink;
