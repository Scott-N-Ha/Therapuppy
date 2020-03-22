import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndexContainer from '../booking/booking_index_container'

export default class Puppy extends React.Component {
  constructor(props){
    super(props);

    this.renderMore = this.renderMore.bind(this);
    this.renderLess = this.renderLess.bind(this);
  }

  renderMore(){
    const { puppy, owner, breed, openModal, fluffyRating, isCurrentUserPuppy, natureRating, earType } = this.props;
    const { name, age, sex, price } = puppy;

    return (
      <> 
      <div className="puppy-info-more">
      {/* { photo.length < 1 ? <div className="puppy-image">No Image URL</div> : <img src={photo} alt={name} className="puppy-image" /> } */}
      <div className="puppy-info-container more">
          <h1 className="puppy-info-header">{puppy.name}</h1>
        <div className="main-puppy-info-container">
          <div>
            <div className="puppy-info-flex">
             <p>{breed}</p>
             <p>${price}</p>
            </div>
             <hr/>
          </div>
          <div>
            <div className="puppy-info-flex">
            Age: <p>{age}</p>
            Sex: <p>{sex}</p>
            </div>
              <hr/>
          </div>
        </div>
        <h1 className="puppy-info-header">About</h1>
        <div>
          <div className="puppy-info-flex">
          Fluffy Rating: <p>{fluffyRating}</p>
          Ear Type: <p>{earType}</p>
          Nature Rating: <p>{natureRating}</p>
          </div>
          <hr/>
        </div>
          <h1 className="puppy-info-header">Meet {puppy.name.charAt(0).toUpperCase() + puppy.name.slice(1)}</h1>
        <div className="puppy-desc-text">
          <p>I'm gonna make you an offer you can't refuse! This good {puppy.sex === "M" ? "boy" : "girl"} will make your day.
            was found as a stray in Hayward, whattaya gonna do, ya know? 
            {puppy.sex === "M" ? "He" : "She" } likes calling shots and mobbing around Muttville with {puppy.sex === "M" ? "his" : "her" } goombahs. 
            {puppy.sex === "M" ? "He" : "She" } enjoys the finest (dog) foods, and is also a heavy drinker (of water). 
            {puppy.name.charAt(0).toUpperCase() + puppy.name.slice(1)} is already a member of a family, 
            but {puppy.sex === "M" ? "he" : "she" }'d still be happy to take you in. Come meet this adorable mutt today!
          </p>
        </div>
      </div>
      {isCurrentUserPuppy ? 
      // (<div className="puppy-more-label owner">Dogter {puppy.name}</div>)
      null 
      : (<div className="puppy-more-label">
        <div className="request-button-container">
          <button className="request-dogter-button" onClick={() => openModal("requestDogter")}> 
          Request Dogter {puppy.name}
          </button>
          <Link to={`/users/${owner.username}`} className="request-dogter-button owner" > 
          More About the Owner
          </Link>
        </div>
        <div className="puppy-more-seperator">
          <Link to="/puppies" className="back-button">
            Back to Dogters 
          </Link>
        </div>
        </div>)}
      </div>
      <BookingIndexContainer puppyId={puppy._id} />
      </>
    )
  }

  renderLess(){
    const { puppy } = this.props;
    const { name, price } = puppy;

    return (<>
      
        <div className="puppy-info-container">
          <label className="puppy-name">{name}</label>
          <label className="puppy-price">${price}</label>
        </div>
      </>
    )
  }

  render(){
    const { puppy, showMore, openModal, isCurrentUserPuppy } = this.props;

    if (puppy === undefined) return null;

    const { photo } = puppy;

    return (<div className={`puppy-show-container ${ showMore ? "more" : "less"}`}>
      <Link to={`/puppies/${puppy._id}`}>
      <div className={`puppy ${ showMore ? "more" : "less"}`} style={{backgroundImage:`url(${photo})`}}>
      { showMore ? null : (this.renderLess()) }
      </div>
      </Link>
        { showMore ? (this.renderMore()) : "" }
        </div>
    )
  }
}
