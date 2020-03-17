import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      firstName: '',
      lastName: '',
      isOwner: false,
      address1: '',
      address2: '',
      city: 'San Francisco',
      state: 'CA',
      zip: undefined,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      isOwner: this.state.isOwner,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-div">
        <form onSubmit={this.handleSubmit} className="signup-form" >
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="input-form email-input"
              />
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="input-form username-input"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="input-form password-input"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className="input-form password-input"
              />
            <br/>
              <div className="fullName-input">
                <input type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  placeholder="First Name"
                  className="input-form firstName-input"
                /> <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="Last Name"
                  className="input-form lastName-input"
                />
              </div>
            <br/>
              <label>
                Is a Puppy: 
                <input
                  type="checkbox"
                  name="isOwner"
                  onChange={this.update('isOwner')}
                  value={this.state.isOwner}
                  className="input-form isOwner-input"
                />
              </label>
            <br/>
              <input type="text"
                value={this.state.address1}
                onChange={this.update('address1')}
                placeholder="Address 1"
                className="input-form address1-input"
              />
            <br/>
              <input type="text"
                value={this.state.address2}
                onChange={this.update('address2')}
                placeholder="Address 2"
                className="input-form address2-input"
              />
            <br/>
              <input type="text"
                value={this.state.city}
                onChange={this.update('city')}
                placeholder="City"
                disabled
                className="input-form city-input"
              />
            <br/>
              <select
                name="state"
                disabled
                className="input-form state-input"
              >
                <option value="CA">CA</option>
              </select>
            <br/>
              <input
                type="number"
                name="zip"
                value={this.state.zip}
                onChange={this.update('zip')}
                placeholder="Zip"
                min="00000"
                max="99999"
                className="input-form zip-input"
              />
            <br/>
            <input
              type="submit"
              value="Submit"
              className="input-form submit-input"
            />
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}
