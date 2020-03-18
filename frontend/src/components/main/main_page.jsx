import React from 'react';

import PuppyIndexContainer from '../puppy/puppy_index_container.js';
import PuppyFormContainer from '../puppy/puppy_form_container.js';

class MainPage extends React.Component {
  constructor(props){
    super(props);
  }

  // Only uncomment if you want fun
  // componentDidMount(){
  //   const main = document.getElementById('main');
  //   main.style.backgroundImage = "url(https://barkpost.com/wp-content/uploads/2015/03/puppy-run.gif)";
  //   main.style.backgroundPosition = 'center';
  //   main.style.backgroundSize = 'cover';
  //   main.style.backgroundRepeat = 'no-repeat';
  // }

  render(){
    const { user, loggedIn, openModal } = this.props;

    const content = loggedIn ? (<>Main Page when User is Logged In
      { user.isOwner ? <button onClick={() => openModal("createPuppy")}>Add a Dogter</button> : null }
      <PuppyIndexContainer />
      </> ) : (
      <div className="splash-container">
        <div className="splash-image">
        <div className="splash-circle"></div>
        </div>
        <div className="splash-text">
          <h1>Main Page when there is no user logged in</h1> 
          <p>puppy wuppy thewapy</p>
        </div>
      </div>
      )
      
    return (
      <div className="main" id="main">
        {content}
      </div>
      )
    }
  }

export default MainPage;
