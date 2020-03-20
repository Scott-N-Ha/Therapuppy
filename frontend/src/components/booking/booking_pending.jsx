import React from 'react';

import BookingPendingDateContainer from './booking_pending_date_container.js';
import { Link } from 'react-router-dom';

export default class BookingPending extends React.Component {
  constructor(props){
    super(props);

    this.processBookings = this.processBookings.bind(this);
  }

  processBookings(){
    const { bookings } = this.props;

    return bookings.map(({puppy, pendingBookings}) => {
      const sorted = pendingBookings.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

      let dates = {};

      sorted.map(booking => {
        let parsedDate = Date.parse(booking.date);

        if (dates[parsedDate]) {
          dates[parsedDate].push(booking);
        } else {
          dates[parsedDate] = [booking];
        }
      });

      const datedBookings = Object.keys(dates).sort((a, b) => a - b).map(date => {
        return <BookingPendingDateContainer bookings={dates[date]} date={dates[date][0].date} />
      });

      return (
        <li>
          <label>Bookings for <Link to={`/puppies/${puppy._id}`}>{ puppy.name }</Link></label>
            { datedBookings }
        </li>
      )
    });
  }

  render(){
    return (
      <ul className="booking-pending-ul">
        { this.processBookings() }
      </ul>
    )
  }
}
