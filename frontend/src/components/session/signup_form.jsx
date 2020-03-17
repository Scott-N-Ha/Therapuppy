import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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
      zip: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
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
      password2: this.state.password2
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First Name"
              /> <input type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                placeholder="Last Name"
              />
            <br/>
              Is a Puppy: 
              <input
                type="checkbox"
                name="isOwner"
                onChange={this.update('isOwner')}
                value={this.state.isOwner}
              />
            <br/>
              <input type="text"
                value={this.state.address1}
                onChange={this.update('address1')}
                placeholder="Address 1"
              />
            <br/>
              <input type="text"
                value={this.state.address2}
                onChange={this.update('address2')}
                placeholder="Address 2"
              />
            <br/>
              <input type="text"
                value={this.state.city}
                onChange={this.update('city')}
                placeholder="City"
                disabled
              />
            <br/>
              <select name="state" disabled>
                <option value="CA">CA</option>
              </select>
            <br/>
              <input
                type="number"
                name="zip"
                value={this.state.zip}
                onChange={this.update('zip')}
                placeholder="Zip"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
