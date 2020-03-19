import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleModal = this.handleModal.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  logoutUser(e){
    e.preventDefault();
    this.props.logout();
  }

  handleModal(modal){
    this.props.openModal(modal)
  }

  handleDropdown(){
    const drop = document.getElementsByClassName("dropdown-container")[0]
    if (typeof drop === "undefined") return null;
    drop.className.includes("active") ? (drop.className="dropdown-container") : (drop.className = "dropdown-container active") 
  
  }

  getLinks(){
    const {openModal, currentUser} = this.props
    
    if (this.props.loggedIn){
      return (
        <div className="nav-bar logged">
          <div className="nav-bar-logo-container">
        <Link to="/"><h1 className="therapuppy-header">THERAP(UPP)Y</h1></Link>
        </div>
        <div className="nav-bar-links">
          <Link to='/puppies'><p>Certified Dogters</p></Link>
          {currentUser.isOwner ? (<p onClick={() => openModal("createPuppy")}>Add a Dogter</p>) : (null)}
          <div id="dropdown-list" className="dropdown-container" onClick={() => this.handleDropdown()}>
          <text className="dropdown">hi, {currentUser.username}</text>
            <div className="dropdown-content">
              <div className="dropdown-user-info">
                <span >{currentUser.firstName} {currentUser.lastName}</span>
                <span className="user-city">{currentUser.city}, {currentUser.state}</span>
              </div>
              <div className="separator"></div>
              <Link to={`users/${currentUser.username}`}>Profile</Link>
              <div className="separator"></div>
              <a className="logout" onClick={this.logoutUser}>Logout</a>
            </div>
          </div>
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
