import React from 'react';
import { Link } from 'react-router-dom';

export default class Puppy extends React.Component {
  constructor(props){
    super(props);

    this.renderMore = this.renderMore.bind(this);
    this.renderLess = this.renderLess.bind(this);
  }

  renderMore(){
    const { puppy, owner, breed, fluffyRating, natureRating, earType } = this.props;
    const { name, age, sex, price } = puppy;

    return (
      <div className="puppy-info-more">
      {/* { photo.length < 1 ? <div className="puppy-image">No Image URL</div> : <img src={photo} alt={name} className="puppy-image" /> } */}
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
    )
  }

  renderLess(){
    const { puppy } = this.props;
    const { name, price } = puppy;

    return (<>
      <div className="puppy-hover">
      </div>
      <Link to={`/puppies/${puppy._id}`}>
        <div className="puppy-info-container">
          <label className="puppy-name">{name}</label>
          <label className="puppy-price">${price}</label>
        </div>
      </Link>
      </>
    )
  }

  render(){
    const { puppy, showMore, openModal, isCurrentUserPuppy } = this.props;

    if (puppy === undefined) return null;

    const { photo } = puppy;

    return (<div className="puppy-show-container">
      <div className={`puppy ${ showMore ? "more" : "less"}`} style={{backgroundImage:`url(${photo})`}}>
      { showMore ? isCurrentUserPuppy ? (<div className="puppy-more-label owner">Dogter {puppy.name}</div>) : (<div onClick={() => openModal("requestDogter")} className="puppy-more-label">Request Dogter {puppy.name}</div>) : (this.renderLess()) }
      </div>
        { showMore ? (this.renderMore()) : "" }
        </div>
    )
  }
}
