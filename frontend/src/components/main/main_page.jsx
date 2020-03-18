import React from 'react';

import PuppyIndexContainer from '../puppy/puppy_index_container.js';
import PuppyFormContainer from '../puppy/puppy_form_container.js';

class MainPage extends React.Component {
  constructor(props){
    super(props);

    this.puppyFormRender = this.puppyFormRender.bind(this);
  }

  componentWillUpdate(prevProps){
    debugger
  }

  puppyFormRender(){
    return (
      <PuppyFormContainer />
    );
  }

  render(){
    const { user, loggedIn } = this.props;

    if (!loggedIn) {
      return (
        <div>
          Main Page when there is no user logged in
        </div>
      )
    } else {
      debugger //this debugger isn't being hit. what the fuck
      return (
        <div>
          Main Page when User is Logged In
          There's a puppy index container right here but we have no puppies.
          { user.isOwner ? this.puppyFormRender() : null }
          <PuppyIndexContainer />
        </div>
      )
    }
  }
}

export default MainPage;
