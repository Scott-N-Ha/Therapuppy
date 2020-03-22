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
        <div className="puppy-label-div">
          <label className="puppy-label">Owner:</label> <Link to={`/users/${owner.username}`}>{owner.firstName} {owner.lastName}</Link>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Age:</label> <p>{age}</p>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Breed:</label> <p>{breed}</p>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Fluffy Rating:</label> <p>{fluffyRating}</p>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Ear Type:</label> <p>{earType}</p>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Sex:</label> <p>{sex}</p>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Nature Rating:</label> <p>{natureRating}</p>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Price:</label> <p>${price}</p>
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
          <button className="request-dogter-button owner" onClick={() => openModal("requestDogter")}> 
          More About the Owner
          </button>
        </div>
        <div className="puppy-more-seperator">
          <Link to="/puppies" className="back-button">
            Back to Dogters 
          </Link>
          {/* <div className="next-puppy">
            Next Dogter
          </div> */}
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
