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
      {/* { user.isOwner ? <button onClick={() => openModal("createPuppy")}>Add a Dogter</button> : null } */}
      <PuppyIndexContainer />
      </> ) : (
        <div>
      <div className="splash-container">
        <div className="splash-image">
        </div>
          <div className="splash-circle"></div>
        <div className="splash-text">
          <h1>Therapy reimagined.</h1> 
          <p>We have all wanted to know the joy of having a dog. We know that people are busy and may not be able to take care of their own pup. </p>
          <button className="start-button" onClick={() => openModal("login")}>GET STARTED</button>
        </div>
      </div>
      <div className="info-container">
        <h1>join over 1 million people who already improved their lives with us</h1>
        <p>
        Therapuppy is right for everyone ! Puppy therapy lets you connect with your inner-child and is extremely affordable, not to mention, extremely adorable.
        </p>
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
