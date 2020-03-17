import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e){
    e.preventDefault();
    this.props.logout();
  }

  getLinks(){
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
          { this.props.location.pathname === "/login" ? <Link
            to='/signup'
            className="navbar-btn">Signup</Link> : <Link
            to='/login'
            className="navbar-btn">Login</Link> }
          { this.props.location.pathname === "/" ? <Link
            to='/signup'
            className="navbar-btn">Signup</Link> : null }
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
