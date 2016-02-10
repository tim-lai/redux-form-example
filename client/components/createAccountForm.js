import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {connectReduxForm} from 'redux-form';
import userLoginApp from '../reducers/reducers.js';
import { loginAccount } from '../actions/actions.js';
import validateCreateAccount from '../utils/validateForms.js';


class CreateAccountForm extends Component {

  render() {
    const {fields: {username, password, confirmpassword, email}, 
      handleSubmit, 
      submitting, 
      resetForm
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <div>
            <input type="text" placeholder="Username" {...username} className="error.username form-error"/>
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type="text" placeholder="Email" {...email} className="error.email form-error"/>
          </div>
          {email.touched && email.error && <div>{email.error}</div>}
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="text" placeholder="Password" {...password} className="error.password form-error"/>
          </div>
          {password.touched && password.error && <div>{password.error}</div>}
        </div>
        <div>
          <label>Confirm Password</label>
          <div>
            <input type="text" placeholder="Confirm-Password" {...confirmpassword} className="error.confirmpassword form-error"/>
          </div>
          {confirmpassword.touched && confirmpassword.error && <div>{confirmpassword.error}</div>}
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>

    );
  }
}


CreateAccountForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    // username: PropTypes.string,
    // password: PropTypes.string
}

CreateAccountForm = connectReduxForm({
  form: 'createaccountform',
  fields: ['username', 'email', 'password', 'confirmpassword'],
  touchOnChange: true,
  validate: validateCreateAccount
})(CreateAccountForm);

export default CreateAccountForm;
