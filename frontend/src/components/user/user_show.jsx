import React from 'react';

import PuppyFormContainer from '../puppy/puppy_form_container';

export default class UserShow extends React.Component {
  constructor(props){
    super(props);
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
        User Show Page
        <label>
          { username }
        </label>
        <br/>
        <label>
          { email }
        </label>
        <br/>
        <label>
          { firstName } { lastName }
        </label>
        <br/>
        { isOwner && samePerson ? this.ownerRender() : null }
      </div>
    )
  }
}
