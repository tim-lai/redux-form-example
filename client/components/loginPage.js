import React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import LoginForm from './loginForm.js';
// import { reduxForm } from 'redux-form';
// import {connectReduxForm} from 'redux-form';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';
import userLoginApp from '../reducers/reducers.js';
import { loginAccount } from '../actions/actions.js';


class LoginPage extends Component {

  constructor () {
    super();
  }

  handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('loginform', {})); // clear form
  }

  render() {
    return (
      <div className="container login-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-1 col-md-3"></div>
          <div className="col-sm-10 col-md-6">
            <div id="login-app">
              <h2>Login Form</h2>
              <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>

            </div>
          <div className="col-sm-1 col-md-3"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
        </div>
      </div>
    );
  }

}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(LoginPage);

// function mapStateToProps(state) {
//   return {

//   };
// }


// function mapDispatchToProps(dispatch) {
//   return {

//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);




