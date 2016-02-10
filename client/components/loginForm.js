import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {connectReduxForm} from 'redux-form';
import userLoginApp from '../reducers/reducers.js';
import { loginAccount } from '../actions/actions.js';
import validateLogin from '../utils/validateForms.js';


class LoginForm extends Component {

  render() {
    const {fields: {username, password}, 
      handleSubmit, 
      submitting, 
      resetForm
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <div>
            <input type="text" placeholder="Username" {...username} className=" form-error"/>
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="text" placeholder="Password" {...password} className=" form-error"/>
          </div>
          {password.touched && password.error && <div>{password.error}</div>}
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>

    );
  }
}


LoginForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    // username: PropTypes.string,
    // password: PropTypes.string
}

LoginForm = connectReduxForm({
  form: 'loginform',
  fields: ['username', 'password'],
  touchOnChange: true,
  validate: validateLogin
})(LoginForm);

export default LoginForm;



// note for later: if using this page as the render
// onSubmit={this.props.handleSubmit(this.handleSubmit)}
// where handleSubmit is also on this page


// function mapStateToProps(state) {
//   return {
//     username: state.userState.username,
//     password: state.userState.password
//   };
// }

// function mapDispatchToProps(dispatch, state) {
//   return {
//     handleSubmitLoginInfo: function (username, password) {
//       // e.preventDefault();
//       dispatch(loginAccount(username, password));
//     }
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);