"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateLogin } from "../../actions/auth_actions";
import InputField from "../InputField";

class EditLogin extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(ev) {
    ev.preventDefault();

    let id = this.props.user.uid;
    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (password && passwordConfirmation) {
      this.props.dispatch(updateLogin({
        id: id,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }));
    }
  }

  render() {
    const styles = {
      form: {
        padding: "50px 0 0 0",
        width: "300px"
      }
    };

    return (
      <form className="block--center-horizontally__margin"
        style={styles.form}>
        <div>
          <InputField
            fieldId="email"
            fieldName="Email"
            fieldType="text"
            ref="email" />
        </div>
        <div>
          <InputField
            fieldId="password"
            fieldName="Password"
            fieldType="password"
            ref="password" />
        </div>
        <div>
          <InputField
            fieldId="passwordConfirmation"
            fieldName="Confirm password"
            fieldType="password"
            ref="passwordConfirmation" />
        </div>
        <div className="text--center">
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={this._handleSubmit}
          >
            SAVE
          </button>
        </div>
      </form>
    )
  }
}

export default connect()(EditLogin)
