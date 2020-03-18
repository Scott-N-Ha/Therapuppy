import React from 'react';

export default class Puppy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { puppy, owner } = this.props;

    if (puppy === undefined) return null;

    const { name, age, breed, fluffyRating, earType, sex, natureRating, price } = puppy;

    return (
      <div className="puppy">
        <label className="puppy-name">{name}</label>
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
}
