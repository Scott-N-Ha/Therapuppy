import React from 'react';
import { Link } from 'react-router-dom';

export default class BookingPendingDate extends React.Component {
  constructor(props){
    super(props);

    this.editBooking = this.editBooking.bind(this);
  }

  editBooking(booking){
    return (e) => {
      const { bookings, updateBooking } = this.props;

      bookings.forEach(book => {
        if (book === booking) {
          updateBooking(Object.assign(book, {status: "5e717c615a67b08eeeb91719"}));
        } else {
          updateBooking(Object.assign(book, {status: "5e717c7132e5a38f0aaf16bb"}));
        }
      });

      // let newBooking = Object.assign({}, booking);
      // newBooking.status = (value ? "5e717c615a67b08eeeb91719" : "5e717c7132e5a38f0aaf16bb");

      // this.props.updateBooking(newBooking);
    }
  }

  render(){
    const { bookings, date } = this.props;

    const renderBookings = bookings.map(booking => {
      return (
        <div>
          <label>Renter: <Link to={`/users/${booking.renter.username}`}>{booking.renter.username}</Link></label>
          <div className="booking-buttons">
            <button
              className="booking-button booking-approve"
              onClick={this.editBooking(booking)}
            >APPROVE</button>
          </div>
        </div>
      )
    });

    return (
      <div className="booking-date-div">
        <label>Bookings for the Date of {date.slice(0,10)}</label>
        { renderBookings }
      </div>
    )
  }
}
