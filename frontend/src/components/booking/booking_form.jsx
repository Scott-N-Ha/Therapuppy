import React from 'react';

export default class BookingForm extends React.Component {
  constructor(props){
    super(props);

    const { renterId, puppy } = this.props;
    const { price, owner, _id } = puppy;

    const bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() + 7);
    
    this.state = {
      owner: owner,
      renter: renterId,
      puppy: _id,
      date: bookingDate.toISOString().slice(0,10),
      totalCost: price,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    debugger
    this.props.createBooking(this.state);
  }

  render(){
    return (
      <div className="booking-form-div">
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <label>Date: 
            <input  className="input-form date-input" type="date" name="date" value={this.state.date} onChange={this.handleChange} />
          </label>
          <label>Cost: 
            <input  className="input-form cost-input" type="number" name="totalCost" value={this.state.totalCost} disabled />
          </label>
          <button className="input-form submit-input" >Request a Session with this Dogter!</button>
        </form>
      </div>
    )
  }
}
