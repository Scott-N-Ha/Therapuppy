import React from 'react';

const TeamMember = ({name, imageUrl, linkedIn, gitHub}) => {

  return (
    <div className="team-member">
      <img src={imageUrl} alt={name} className="tm-image"/>
      <label className="tm-name">{name}</label>
      <div className="tm-links">
        <a href={linkedIn}><i className="fab fa-linkedin"></i></a>
        <a href={gitHub}><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
};

export default TeamMember;
