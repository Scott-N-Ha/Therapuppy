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
    const { user, loggedIn, openModal, demoLogin } = this.props;

    const content = loggedIn ? (<div className="main-content-container">
      <div className="welcome-text-container">
        <p>it's time to unbury those bones</p>
        <h1>You'll never be late to this appointment, {user.firstName}.</h1>
      {/* <hr/>
      <p>Choose one of our Certified Dogters to start enjoying life again!</p> */}
      </div>
      <PuppyIndexContainer />
      </div> ) : (
        <div>
      <div className="splash-container">
        <div className="splash-image">
        </div>
          <div className="splash-circle"></div>
        <div className="splash-text">
          <h1>Therapy reimagined.</h1> 
          <p>We have all wanted to know the joy of having a dog. We know that people are busy and may not be able to take care of their own pup. </p>
          <div className="splash-button-container">
          <button className="start-button" onClick={() => openModal("login")}>GET STARTED</button>
          <button className="start-button" onClick={() => demoLogin()}>DEMO USER</button>
          </div>
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
