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
        <div>
          <Link to='/puppies'>All Puppies</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="login-buttons">
          { this.props.location.pathname === "/login" ? <button
            onClick={() => this.handleModal("signup")}
            className="navbar-btn">Signup</button> : <button
            onClick={() => this.handleModal("login")}
            className="navbar-btn">Login</button> }
          { this.props.location.pathname === "/" ? <button
            onClick={() => this.handleModal("signup")}
            className="navbar-btn">Signup</button> : null }
        </div>
      )
    }
  }

  render(){
    return (
      <div className="nav-bar">
        <Link to="/"><h1 className="therapuppy rainbow-effect-persist">Therapuppy</h1></Link>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;
