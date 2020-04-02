import React from 'react';
import BookingContainer from '../booking/booking_container';

export default class UserBookings extends React.Component {


    render(){
        const {bookings, type, currentUser} = this.props
        debugger
        let bookingContainers = bookings
            .map(booking => { return <BookingContainer key={booking._id} booking={booking} /> });
        return(
            <div className="booking-index">
                <div className="booking-index-container">
                <h1>Your {type} sessions</h1>
                <div>
                    {bookingContainers}
                </div>
                </div>
            </div>
        )
    }
}