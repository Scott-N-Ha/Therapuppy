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
      frontErrors: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  validateForm(){
    let allow = true;
    const newErrors = [];

    const input = document.querySelector('.date-input');

    if (Date.parse(input.value) < Date.now()){
      debugger
      allow = false;
      newErrors.push('Date must be at least two days in the future.');
      input.classList.add('session-error');
    } else {
      input.classList.remove('session-error');
    }

    if (newErrors.length > 0) this.setState({ frontErrors: newErrors });

    return allow;
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({ frontErrors: [] });

    if (this.validateForm()) {
      let newBooking = {
        owner: this.state.owner,
        renter: this.state.renter,
        puppy: this.state.puppy,
        date: this.state.date,
        totalCost: this.state.totalCost,
      };

      this.props.createBooking({ booking: newBooking })
        .then(res => {

        });
    }
  }

  renderErrors(){
    const formattedErrors = this.state.frontErrors.map(error => {
      return <li className="session-error-list-item">{error}</li>
    });

    return (
      <ul className="session-error-list">
        { formattedErrors }
      </ul>
    );
  }

  render(){
    return (
      <div className="booking-form-div">
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <label>Date: 
            <input  className="input-form date-input" type="date" name="date" value={this.state.date} onChange={this.handleChange} min={Date.now()} />
          </label>
          <label>Cost: 
            <input  className="input-form cost-input" type="number" name="totalCost" value={this.state.totalCost} disabled />
          </label>
          <button className="input-form submit-input" >Request a Session with this Dogter!</button>
        </form>
        { this.state.frontErrors.length > 0 ? this.renderErrors() : undefined }
      </div>
    )
  }
}
