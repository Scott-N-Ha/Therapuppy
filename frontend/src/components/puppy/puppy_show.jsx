import React from 'react';
import {Link} from 'react-router-dom'
import BookingIndexContainer from '../booking/booking_index_container.js';

export default class PuppyShow extends React.Component {
  constructor(props){
    super(props);


  }

  missingPuppy(){
    return (
      <div className="missing-pup">
        Uh oh. Missing Puppy. 😞
      </div>
    )
  }

  render(){
    const { puppy, owner, breed, fluffyRating, natureRating, earType } = this.props;
    const { name, age, sex, price } = puppy;

    if (puppy === undefined) return this.missingPuppy();

    return (
      <div className="puppy-show">
        Puppy information goes here
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

        <BookingIndexContainer puppyId={puppy._id} />
      </div>
    );
  }
};