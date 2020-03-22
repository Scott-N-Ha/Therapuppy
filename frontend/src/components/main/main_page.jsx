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
            <span>Do you have a certified Dogter that is just begging to help others? Join the thousands of other Dogters on TheraPuppy and let your Dogter help those in need. You can supervise the scheduling of your furry medical staff by approving and denying any scheduling conflicts you have.</span>
          </div>
        </div>

        <div className="section-3">
          <div className="sub-section">
            <span className="sub-section-header patients">Patients In Need </span>
            <br/>
            <span>Are you need in need of a little love and furry guidance from one of our certified Dogters? You can join today and begin immediately requesting therapy sessions with any one of our hundreds of certified medical personnel.</span>
          </div>
        </div>

        <div className="info-container section-4">
          <h1>join over 1 million people who already improved their lives with us</h1>
          <p>
          Therapuppy is right for everyone ! Puppy therapy lets you connect with your inner-child and is extremely affordable, not to mention, extremely adorable.
          </p>
        </div>


        <div className="section-4">
          <div className="meet-team">
            Meet the team that brought you Therapuppy!
            <div className="team-members">
              <TeamMember
                name="Scott Ha"
                imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQG8SV4IvwOUVw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=pZUYfjN44tOR2KwGNg2qEj2kQU2FVNANr3n8AZwDxKI"
                linkedIn="https://www.linkedin.com/in/hascottn/"
                gitHub="https://github.com/Scott-N-Ha"
              />
              <TeamMember
                name="Olivia Yoon"
                imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQHjbgcgDeYvEQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=GDKXSVQKMslRhHcJUIQ-94sUV7qJa2JRr2qyXdut2Mg"
                linkedIn="https://www.linkedin.com/in/yooneunsil/"
                gitHub="https://github.com/jigglycode"
              />
              <TeamMember
                name="Anson Chong"
                imageUrl="https://media-exp1.licdn.com/dms/image/C5103AQETzecBPvfv8g/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=Vw6Tzfg3Gwn5WJOJ154JSyVyTb7L7Zakib0xl-o7bnA"
                linkedIn="https://www.linkedin.com/in/ansonchongch/"
                gitHub="https://github.com/Chong-anson"
              />
              <TeamMember
                name="Ryan Leung"
                imageUrl="https://media-exp1.licdn.com/dms/image/C4D03AQGeOSmR8WMFQw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=XM8CY_HvobeTbMfRq1_Sp0dgw2RWjrIDv9piwLVQPjw"
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
