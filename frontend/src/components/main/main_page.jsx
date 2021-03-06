import React from 'react';

import PuppyIndexContainer from '../puppy/puppy_index_container.js';
import TeamMember from '../team/team_member.jsx';

class MainPage extends React.Component {
  constructor(props){
    super(props);
  }

  loggedIn(user){
    return (
    <div className="main-content-container">
      <div className="welcome-text-container">
        <p>it's time to unbury those bones</p>
        <h1>You'll never be late to this appointment, {user.firstName}.</h1>
      </div>
      <PuppyIndexContainer />
    </div> )
  }

  loggedOut(openModal, demoLogin){
    return (
      <div>
        <div className="splash-container section-1">
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

        <div className="section-2">
          <div className="sub-section">
            <span className="sub-section-header dog-owners">Dog Owners</span>
            <br/>
            <p>Do you have a certified Dogter that is just begging to help others? Join the thousands of other Dogters on TheraPuppy and let your Dogter help those in need. You can supervise the scheduling of your furry medical staff by approving and denying any scheduling conflicts you have.</p>
          </div>
        </div>

        <div className="section-3">
          <div className="sub-section">
            <span className="sub-section-header patients">Patients In Need </span>
            <br/>
            <p>Are you need in need of a little love and furry guidance from one of our certified Dogters? You can join today and begin immediately requesting therapy sessions with any one of our hundreds of certified medical personnel.</p>
          </div>
        </div>

        <div className="info-container section-4">
          <h1>join over 1 million people who already improved their lives with us</h1>
          <p>
          Therapuppy is right for everyone ! Puppy therapy lets you connect with your inner-child and is extremely affordable, not to mention, extremely adorable.
          </p>
        </div>


        <div className="section-5">
          <div className="meet-team">
            <label className="meet-header">Meet the team that brought you Therapuppy!</label>
            <div className="team-members">
              <TeamMember
                name="Scott Ha"
                linkedIn="https://www.linkedin.com/in/hascottn/"
                gitHub="https://github.com/Scott-N-Ha"
              />
              <TeamMember
                name="Olivia Yoon"
                linkedIn="https://www.linkedin.com/in/yooneunsil/"
                gitHub="https://github.com/jigglycode"
              />
              <TeamMember
                name="Anson Chong"
                linkedIn="https://www.linkedin.com/in/ansonchongch/"
                gitHub="https://github.com/Chong-anson"
              />
              <TeamMember
                name="Ryan Leung"
                linkedIn="https://www.linkedin.com/in/ryan-leung-324a45188/"
                gitHub="https://github.com/mckgegis"
              />

            </div>
          </div>
        </div>
      </div>
    )
  }

  render(){
    const { user, loggedIn, openModal, demoLogin } = this.props;
      
    return (
      <div className="main" id="main">
        {loggedIn ? this.loggedIn(user) : this.loggedOut(openModal, demoLogin)}
      </div>
      )
    }
  }

export default MainPage;
