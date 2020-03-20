import React from 'react';

import BookingContainer from './booking_container.js';

export default class BookingIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBookings();

    this.props.bookings.forEach(booking => {
      if (booking.status === "5e717ae318716c8dc9bd5bf5" && Date.parse(booking.date) < Date.now()) {
        booking.status = "5e73eb531c9d4400008a4313";
        this.props.updateBooking(booking);
      }
    });
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
