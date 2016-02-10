import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import userLoginApp from '../reducers/reducers.js';

export default class LandingPage extends Component {

  render() {

    return (
      <div className="container landing-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-1 col-md-3"></div>
          <div className="col-sm-10 col-md-6">
            <div className="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed dignissim 
              euismod pulvinar. Sed convallis neque non luctus semper.  Quisque leo 
              arcu, mattis vitae eros in, blandit gravida orci. Vivamus quam orci, 
              semper sit amet nisi vitae, sollicitudin porttitor neque. Vestibulum 
              ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
              Curae; Ut tempus purus vel leo luctus lacinia. Nullam ac ante nec tortor 
              interdum eleifend. Quisque rutrum mauris non turpis fermentum maximus. 
              Cras malesuada dui eget malesuada gravida. Suspendisse lacinia ipsum 
              commodo odio ullamcorper tempus. Pellentesque rutrum egestas ex at 
              congue. Ut dignissim leo sed urna iaculis, eget feugiat sapien lobortis. 
              Pellentesque lacinia ex quis fringilla aliquet. Integer faucibus urna 
              eget enim mollis luctus.
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