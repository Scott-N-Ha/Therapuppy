import React from 'react';

import PuppyIndexContainer from '../puppy/puppy_index_container.js';
import PuppyFormContainer from '../puppy/puppy_form_container.js';

class MainPage extends React.Component {
  constructor(props){
    super(props);

    this.puppyFormRender = this.puppyFormRender.bind(this);
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
