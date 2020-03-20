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
          <label className="puppy-label">Puppy:</label> <Link to={`/puppies/${puppy._id}`}>{name}</Link>
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Age:</label> {age}
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Breed:</label> {breed}
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Fluffy Rating:</label> {fluffyRating}
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Ear Type:</label> {earType}
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Sex:</label> {sex}
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Nature Rating:</label> {natureRating}
        </div>
        <div className="puppy-label-div">
          <label className="puppy-label">Price:</label> ${price}
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
    const { puppy, showMore } = this.props;

    if (puppy === undefined) return null;

    const { photo } = puppy;

    return (
      <div className={`puppy ${ showMore ? "more" : "less"}`} style={{backgroundImage:`url(${photo})`}}>
        { showMore ? (this.renderMore()) : (this.renderLess()) }
      </div>
    )
  }
}
