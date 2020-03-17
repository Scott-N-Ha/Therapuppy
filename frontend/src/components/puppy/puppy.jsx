import React from 'react';

import BookingIndexContainer from '../booking/booking_index_container.js';

export default class Puppy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { puppy } = this.props;

    if (puppy === undefined) return null;

    return (
      <div className="puppy">
        Puppy Information goes here
        
        <BookingIndexContainer puppyId={puppy.id} />
      </div>
    )
  }
}
