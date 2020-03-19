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
      <div>
      {/* { photo.length < 1 ? <div className="puppy-image">No Image URL</div> : <img src={photo} alt={name} className="puppy-image" /> } */}
        <label className="puppy-owner"><Link to={`/users/${owner.username}`}>{owner.firstName} {owner.lastName}</Link></label>
        <br/>
        <label className="puppy-name"><Link to={`/puppies/${puppy._id}`}>{name}</Link></label>
        <br/>
        <label className="puppy-age">{age}</label>
        <br/>
        <label className="puppy-breed">{breed}</label>
        <br/>
        <label className="puppy-fluffyRating">{fluffyRating}</label>
        <br/>
        <label className="puppy-earType">{earType}</label>
        <br/>
        <label className="puppy-sex">{sex}</label>
        <br/>
        <label className="puppy-natureRating">{natureRating}</label>
        <br/>
        <label className="puppy-price">${price}</label>
      </div>
    )
  }

  renderLess(){
    const { puppy } = this.props;
    const { name, price } = puppy;

    return (
      <Link to={`/puppies/${puppy._id}`}>
        <div className="puppy-info-container">
          <label className="puppy-name">{name}</label>
          <label className="puppy-price">${price}</label>
        </div>
      </Link>
    )
  }

  render(){
    const { puppy, showMore } = this.props;

    if (puppy === undefined) return null;

    const { photo } = puppy;

    return (
      <div className="puppy" style={{backgroundImage:`url(${photo})`}}>
        { showMore ? (this.renderMore()) : (this.renderLess()) }
      </div>
    )
  }
}
