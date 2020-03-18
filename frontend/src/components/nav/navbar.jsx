import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleModal = this.handleModal.bind(this)
  }

  logoutUser(e){
    e.preventDefault();
    this.props.logout();
  }

  handleModal(modal){
    this.props.openModal(modal)
  }

  getLinks(){
    const {openModal} = this.props
    if (this.props.loggedIn){
      return (
        <div className="logout-button">
          <Link to='/puppies'>Certified Dogters</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="login-buttons">
          <button
            onClick={() => this.handleModal("login")}
            className="navbar-btn">Login</button>
          <button
            onClick={() => this.handleModal("signup")}
            className="navbar-btn">Wagister</button>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo-container">
        <Link to="/"><h1 className="therapuppy-header">THERAP(UPP)Y</h1></Link>
        </div>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;
