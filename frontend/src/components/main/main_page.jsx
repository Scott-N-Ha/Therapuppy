import React from 'react';

import PuppyIndexContainer from '../puppy/puppy_index_container.js';

class MainPage extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
    const { user } = this.props;

    

    if (user._id === undefined) {
      return (
        <div>
          Main Page when there is no user logged in
        </div>
      )
    } else {
      debugger
      return (
        <div>
          Main Page when User is Logged In
          There's a puppy index container right here but we have no puppies.
          <PuppyIndexContainer />
        </div>
      )
    }
  }
}

export default MainPage;
