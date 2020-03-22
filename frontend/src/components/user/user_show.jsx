import React from 'react';

import PuppyFormContainer from '../puppy/puppy_form_container.js';
import PuppyIndexContainer from '../puppy/puppy_index_container.js';
import BookingPendingContainer from '../booking/booking_pending_container.js';

export default class UserShow extends React.Component {
  constructor(props){
    super(props);

    this.ownerRender = this.ownerRender.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.username);
  }

  componentDidUpdate(prevProps){
    const { match: { params: { username } }, fetchSingleUser } = this.props;

    if (username !== prevProps.match.params.username){
      fetchSingleUser(username);
    }
  }

  missingUser(){
    return (
      <div>
        Missing User! 😞
      </div>
    )
  }

  ownerRender(){
    return (
      <div>
        <PuppyFormContainer />
      </div>
    )
  }

  render(){
    const { user, samePerson } = this.props;

    if (user === undefined) return this.missingUser();

    const { username, email, firstName, lastName, isOwner, city, state } = user;
    debugger

    return (
      <div className="user">
       <div className="welcome-text-container">
        <p>who's a good dogter? all of you!</p>
        <h1>Your good boys and girls are bringing us all to your yard.</h1>
      </div>
        {/* { isOwner && samePerson ? this.ownerRender() : null } */}
        <div className="user-profile-container">
            <div className="user-info-flex">
          <div className="user-info-container">
            <div className="user-profile-picture"></div>
            <div className="user-info-labels">
            <div className="user-label-div username">
              <p className="username-header">{username} <img className="checkmark" src="blue_check_mark.png" alt="" /></p>
            </div>
              <div className="hr user"></div>
            {/* <div className="user-label-div">
              <p>{firstName} {lastName} </p>
            </div> */}
            <div>
            <div className="user-label-div">
              <p> Email: {email} </p>
            </div>
            <div className="user-label-div">
              <p> Address: {city}, {state} </p>
            </div>
            <div className="user-label-div">
              <p> About {username}: {"Pathetic paw lover <3"}</p>
            </div>
            </div>
            </div>
          </div>
        
          { isOwner && samePerson ? <BookingPendingContainer ownerId={user._id} /> : null }
            </div>
        <PuppyIndexContainer ownerId={user._id} />
        </div>
      </div>
    )
  }
}
