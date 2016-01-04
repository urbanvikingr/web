"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { login } from "../../actions/auth_actions";
import Facebook from "./Facebook";
import InputField from "../InputField";
import Link from "../Link";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleForgotPassword = this._handleForgotPassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  _handleForgotPassword() {
    this.props.dispatch(changeRoute("PASSWORDRESET"));
  }

  _handleSubmit(ev) {
    ev.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;

    if (email && password) {
      this.props.dispatch(login({
        auth_key: email,
        password: password
      }));
    }
  }

  render() {
    return (
      <div className="mdl-grid login-grid">
        <div className="mdl-cell mdl-cell--12-col login-grid__cell">
          <div className="mdl-card mdl-shadow--2dp login-card">
            <div className="mdl-card__menu">
              <Link
                styles="mdl-button mdl-js-button mdl-button--icon"
                onClick={this._handleClose}
              >
                <i className="zmdi zmdi-close"></i>
              </Link>
            </div>
            <div className="mdl-card__supporting-text mdl-card--border">
              <div><Facebook /></div>
              <form>
                <div>
                  <InputField
                    fieldId="email"
                    fieldName="Email"
                    fieldType="text"
                    styles="login-card__input-field"
                    ref="email" />
                </div>
                <div>
                  <InputField
                    fieldId="password"
                    fieldName="Password"
                    fieldType="password"
                    styles="login-card__input-field"
                    ref="password" />
                </div>
                <a href="#!"
                  className="login-card__forgot-password"
                  onClick={this._handleForgotPassword}>
                    Forgot password?
                </a>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login-card__login-button"
                  onClick={this._handleSubmit}
                >
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
