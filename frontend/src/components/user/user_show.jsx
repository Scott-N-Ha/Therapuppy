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
    // debugger

    return (
      <div className="user">
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
            <div className="user-info-container contact">
            <div className="user-label-div">
              <p>{email} </p>
            </div>
            <div className="user-label-div">
              <p> Located in {city}, {state} </p>
            </div>
            </div>
            <div className="hr user two"></div>
            <div className="user-label-div">
              { isOwner ? <p>Hey everybody ! I hope my good boys and girls will bring you lots of joy.</p> : <p>I can't wait to pet all the dogs !</p>}
            </div>
            </div>
          </div>
          { isOwner && samePerson ? <BookingPendingContainer ownerId={user._id} /> : null }
            </div>
            <div className="welcome-text-container user-show">
              {isOwner && samePerson ? <h1>Your good boys and girls are bringing us all to your yard.</h1> : ( user.isOwner ? <h1>Here are {username}'s good boys and gals !</h1> : null ) }
            </div>
        <PuppyIndexContainer ownerId={user._id} />
        </div>
      </div>
    )
  }
}
