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
      this.setState({ status: (value ? "5e717c615a67b08eeeb91719" : "5e717c7132e5a38f0aaf16bb") });
      
      this.props.updateBooking(this.state);
    }
  }

  isOwnerRender(status){
    if (status.id === "5e717ae318716c8dc9bd5bf5"){
      return (
        <div className="booking-buttons">
          <button
            className="booking-button booking-approve"
            onClick={this.editBooking(true)}
          >APPROVE</button>
  
          <button 
            className="booking-button booking-deny"
            onClick={this.editBooking(false)}
          >DENY</button>
        </div>
      )
    }

    return null;
  }

  render(){
    const { booking, isOwner, owner, renter, puppy, status } = this.props;

    // if ( booking === undefined || renter === undefined ) return null;

    const { totalCost, date } = booking;

    return (
      <div className="booking">
        <label className="booking-label"><Link to={`/${renter.username}`}>{renter.username}</Link></label>
        <label className="booking-label">Date: {date.slice(0,10)}</label>
        <label className="booking-label">Total Cost: ${totalCost}</label>
        <label className="booking-label">Status: {status.name}</label>
        { isOwner ? this.isOwnerRender(status) : null }
      </div>
    )
  }
}
