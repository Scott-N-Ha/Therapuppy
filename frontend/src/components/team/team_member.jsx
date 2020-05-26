import React from 'react';

const members = { 
  "Scott Ha": require('./scott_headshot.png'),
  "Olivia Yoon": require('./olivia_headshot.jpeg'),
  "Anson Chong": require('./anson_headshot.jpeg'),
  "Ryan Leung": require('./ryan_headshot.jpeg'),
}

const TeamMember = ({name, linkedIn, gitHub}) => {

  return (
    <div className="team-member">
      <img src={members[name]} alt={name} className="tm-image"/>
      <label className="tm-name">{name}</label>
      <div className="tm-links">
        <a href={linkedIn}><i className="fab fa-linkedin"></i></a>
        <a href={gitHub}><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
};

export default TeamMember;
