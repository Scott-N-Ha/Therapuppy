import React from 'react';

import PuppyIndexContainer from '../puppy/puppy_index_container.js';
import PuppyFormContainer from '../puppy/puppy_form_container.js';

class MainPage extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillUpdate(prevProps){
    
  // }

  render(){
    const { user, loggedIn, openModal } = this.props;

    const content = loggedIn ? (<>Main Page when User is Logged In
      { user.isOwner ? <button onClick={() => openModal("createPuppy")}>Add a Dogter</button> : null }
      <PuppyIndexContainer />
      </> ) : (<> Main Page when there is no user logged in </>)
      
    return (
      <div>
        <p>hello</p>
        {content}
      </div>
      )
    }
  }

export default MainPage;
