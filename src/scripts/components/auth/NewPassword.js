"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { createPassword } from "../../actions/auth_actions";
import InputField from "../InputField";
import Link from "../Link2";
import "./new_password.css";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let email = this.refs.email.state.fieldValue;

    if (email) {
      this.props.dispatch(createPassword({
        email: email
      }));
    }
  }

  render() {
    return (
      <div className="new-password-container">
        <div className="mdl-card mdl-shadow--2dp new-password-card">
          <div className="mdl-card__supporting-text mdl-card--border">
            <form>
              <div>
                <InputField
                  fieldId="email"
                  fieldName="Email"
                  fieldType="text"
                  styles="new-password-card__input-field"
                  ref="email" />
              </div>
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent new-password-card__submit-btn"
                onClick={this.handleSubmit}
              >
                SEND
              </button>
            </form>
            <Link
              route="MARKETPLACE"
              styles="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect new-password-card__cancel-btn"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewPassword)
