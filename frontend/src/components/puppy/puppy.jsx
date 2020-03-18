import React from 'react';
import { Link } from 'react-router-dom';

export default class Puppy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { puppy, owner, breed, fluffyRating, natureRating } = this.props;

    if (puppy === undefined) return null;

    const { name, age, earType, sex, price } = puppy;

    return (
      <div className="puppy">
        <label className="puppy-owner"><Link to={`/users/${owner}`}>{owner}</Link></label>
        <br/>
        <label className="puppy-name">{name}</label>
        <br/>
        <label className="puppy-age">{age}</label>
        <br/>
        <label className="puppy-breed" alt={breed.description}>{breed.name}</label>
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
}
