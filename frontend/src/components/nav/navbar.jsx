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
        <div className="nav-bar logged">
          <div className="nav-bar-logo-container">
        <Link to="/"><h1 className="therapuppy-header">THERAP(UPP)Y</h1></Link>
        </div>
        <div className="logout-button">
          <Link to='/puppies'>Certified Dogters</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
        </div>
      )
    } else {
      return (<div className="nav-bar">
        <div className="nav-bar-logo-container">
        <Link to="/"><h1 className="therapuppy-header">THERAP(UPP)Y</h1></Link>
        </div>
      </div>)
    } 
  }

  render(){
    return (
      <>
        {this.getLinks()} 
      </>
    )
  }
}

export default NavBar;
