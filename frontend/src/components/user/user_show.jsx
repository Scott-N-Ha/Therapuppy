import React from 'react';

import PuppyFormContainer from '../puppy/puppy_form_container';
import PuppyIndexContainer from '../puppy/puppy_index_container';

export default class UserShow extends React.Component {
  constructor(props){
    super(props);

    this.ownerRender = this.ownerRender.bind(this);
  }

  componentDidMount(){
    // Need to fetch user
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

    const { username, email, firstName, lastName, isOwner } = user;

    return (
      <div className="user">
       <div className="welcome-text-container">
        <p>who's a good dogter? all of you!</p>
        <h1>Your good boys and girls are bringing us all to your yard.</h1>
      </div>
        {/* { isOwner && samePerson ? this.ownerRender() : null } */}
        <PuppyIndexContainer ownerId={user._id} />
      </div>
    )
  }
}
