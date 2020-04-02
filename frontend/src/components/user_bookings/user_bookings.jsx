import React from 'react';
import BookingContainer from '../booking/booking_container';

export default class UserBookings extends React.Component {


    render(){
        const {bookings, type, puppies} = this.props
        let bookingContainers = bookings
            .map(booking => { 
                let puppy = puppies.filter(puppy => puppy._id === booking.puppy)
                return <BookingContainer key={booking._id} booking={booking} bookingPuppy={puppy}/> });
        return(
            <div className="booking-index">
                <div className="booking-index-container">
                <h1 className="puppy-info-header">Your {type} sessions</h1>
                <div className="bookings-container">
                    {bookingContainers}
                </div>
                </div>
            </div>
        )
    }
}