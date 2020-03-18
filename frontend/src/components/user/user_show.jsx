import React from 'react';

export default class UserShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  missingUser(){
    return (
      <div>
        Missing User! 😞
      </div>
    )
  }

  render(){
    const { user } = this.props;

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
        { isOwner ? null : null }
      </div>
    )
  }
}
