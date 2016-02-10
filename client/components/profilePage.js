import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import userLoginApp from '../reducers/reducers.js';

export default class ProfilePage extends Component {

  render() {
    return (
      <div className="container profile-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-1 col-md-3"></div>
          <div className="col-sm-10 col-md-6">
            <span><div className="profile-slogan">Welcome to the Profile Page</div></span>
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