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
    const { bookings, currentUser, currentPuppy } = this.props;

    let bookingContainers = bookings
      .filter(booking => currentUser._id === booking.owner._id ? booking === booking : booking.renter._id === currentUser._id)
      .map(booking => { return <BookingContainer key={booking._id} booking={booking} /> });
    // let bookingContainers = bookings.map(booking => {
    //   return <BookingContainer booking={booking} />
    // });
    // debugger
    const header = currentUser._id === currentPuppy.owner ? (<>{currentPuppy.name}'s Requests</>) 
    : (<>Your Sessions with Dogter {currentPuppy.name} !</>)
    return (
      <div className="booking-index">
        <div className="booking-index-container">
    <h1 className="puppy-info-header">{header}</h1>
        <div className="bookings-container">
        { bookingContainers.length === 0 ? 
  (currentUser._id === currentPuppy.owner ? <div className="booking-session-text">Aww, it looks like Dogter {currentPuppy.name.charAt(0).toUpperCase() + currentPuppy.name.slice(1)} doesn't have any requests yet ! Why don't you check back later. :)</div>
            : <div className="booking-session-text">Awww, it looks like you haven't booked any sessions with Dogter {currentPuppy.name.charAt(0).toUpperCase() + currentPuppy.name.slice(1)}. Why don't you give {currentPuppy.sex === "M" ? ("him"):("her")} a chance and request a session today?</div>) 
          : (bookingContainers) }
        </div>
        </div> 
      </div>
    )
  }
}
