import React from 'react';
import { Link } from 'react-router-dom';

export default class Booking extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.booking;

    this.isOwnerRender = this.isOwnerRender.bind(this);
    this.editBooking = this.editBooking.bind(this);
  }

  editBooking(value){
    return (e) => {
      this.state.status = (value ? "5e717c615a67b08eeeb91719" : "5e717c7132e5a38f0aaf16bb");
      
      this.props.updateBooking(this.state);
    }
  }

  isOwnerRender(status, old){
    if (status.id === "5e717ae318716c8dc9bd5bf5"){
      return (
        <div className="booking-buttons">
          <button
            className="booking-button booking-approve"
            onClick={this.editBooking(true)}
            disabled={old}
          >APPROVE</button>
  
          <button 
            className="booking-button booking-deny"
            onClick={this.editBooking(false)}
            disabled={old}
          >DENY</button>
        </div>
      )
    }

    return null;
  }

  render(){
    const { booking, isOwner, owner, renter, puppy, status } = this.props;

    const { totalCost, date } = booking;

    const old = Date.parse(this.props.booking.date) < Date.now()

    return (
      <div className={`booking ${ old ? 'old' : '' }`}>
        <div className="booking-label-div">
          <label className="booking-label">Renter:</label> <Link to={`/${renter.username}`} className="underline-magic" >{renter.username}</Link>
        </div>
        <div className="booking-label-div">
          <label className="booking-label">Date:</label> {date.slice(0,10)}
        </div>
        <div className="booking-label-div">
          <label className="booking-label">Total Cost:</label> ${totalCost}
        </div>
        <div className="booking-label-div">
          <label className="booking-label">Status:</label> {status.name}
        </div>
        { isOwner ? this.isOwnerRender(status, old) : <button className="pending">Waiting..</button> }
      </div>
    )
  }
}
