import React from 'react';

import BookingContainer from './booking_container.js';

export default class BookingIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBookings();
  }

  render(){
    const { bookings } = this.props;

    let bookingContainers = bookings.map(booking => {
      return <BookingContainer booking={booking} />
    });

    return (
      <div className="booking-index">
        { bookingContainers }
      </div>
    )
  }
}
