import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';
import userLoginApp from '../reducers/reducers.js';
import { toggleLoginState } from '../actions/actions.js';


class Navigation extends Component {
  
  render() {
    return (
    <div>
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap Form Example</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft >
          <NavItem eventKey={2.0} href="#" onClick={this.props.handleLoginChange}>Toggle Login State</NavItem>
          <NavItem eventKey={2.1} href="/profile">Link to Profile Page</NavItem>
          </Nav>
          <Nav pullRight>
            <Navbar.Text style={{display: this.props.isLoggedIn ? 'inline-block' : 'none'}}>Welcome {this.props.userid} </Navbar.Text>
            <NavItem eventKey={1.1} href="/createaccount" className="link-create-account" style={{display: !this.props.isLoggedIn ? 'inline-block' : 'none'}}>Create Account</NavItem>
            <NavItem eventKey={1.2} href="/login" className="link-login" style={{display: !this.props.isLoggedIn ? 'inline-block' : 'none'}}>Login</NavItem>
            <NavItem eventKey={1.3} href="/logout" className="link-logout" style={{display: this.props.isLoggedIn ? 'inline-block' : 'none'}}>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>{this.props.children}</div>
    </div>
    );
  }
}


Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  userid: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.userLoggedInState.isLoggedIn,
    userid: state.userLoggedInState.userid
  };
}


function mapDispatchToProps(dispatch) {
  return {
    handleLoginChange: function() {
      dispatch(toggleLoginState());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


