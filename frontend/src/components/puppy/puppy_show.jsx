import React from 'react';

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
    const { puppy } = this.props;

    if (puppy === undefined) return this.missingPuppy();

    return (
      <div className="puppy-show">
        Puppy information goes here

        <BookingIndexContainer puppyId={puppy.id} />
      </div>
    );
  }
};