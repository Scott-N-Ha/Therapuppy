import React from 'react';

export default class Booking extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.booking;

    this.isOwnerRender = this.isOwnerRender.bind(this);
    this.editBooking = this.editBooking.bind(this);
  }

  editBooking(value){
    this.setState({ status: (value ? 2 : 3) });
    
    this.props.updateBooting(this.state);
  }

  isOwnerRender(){
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

  render(){
    const { booking, isOwner, owner, renter, puppy, status } = this.props;

    if ( booking === undefined || isOwner === undefined ) return null;

    const { totalCost } = booking;

    return (
      <div className="booking">
        Booking Div
        { isOwner ? this.isOwnerRender() : null }
      </div>
    )
  }
}
