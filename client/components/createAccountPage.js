import React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import CreateAccountForm from './createAccountForm.js';
// import { reduxForm } from 'redux-form';
// import {connectReduxForm} from 'redux-form';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import userLoginApp from '../reducers/reducers.js';
// import { loginAccount } from '../actions/actions.js';


class CreateAccountPage extends Component {

  constructor () {
    super();
  }

  handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('createaccountform', {})); // clear form
  }

  render() {
    return (
      <div className="container create-account-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-1 col-md-3"></div>
          <div className="col-sm-10 col-md-6">
            <div id="create-account-app">
              <h2>Create Account Form</h2>
              <CreateAccountForm onSubmit={this.handleSubmit.bind(this)}/>
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

CreateAccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(CreateAccountPage);

