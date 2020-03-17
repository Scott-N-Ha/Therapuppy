import React from 'react';

function titlize(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

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
      errors: {},
      frontErrors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.cancel = this.cancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  validateForms(){
    let allow = true;
    const inputs = document.querySelectorAll('input');
    const newErrors = [];

    inputs.forEach(input => {
      if((input.name !== "isOwner" && input.name !== "address2") && input.value.length < 1){
        allow = false;
        newErrors.push(`${titlize(input.name)} cannot be blank.`);
        input.classList.add('session-error');
      }
    });

    if (allow) {
      this.setState({ frontErrors: [] });
      inputs.forEach(input => input.classList.remove('session-error'));
    } else {
      this.setState({ frontErrors: newErrors });
    }

    return allow;
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      username: this.state.username,
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
<<<<<<< HEAD
    this.props.signup({user}, this.props.history); 
=======

    this.props.signup({user}).fail(() => this.cancel()); 
  }

  cancel(){
    this.setState({
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
      errors: {},
      frontErrors: [],
    });
>>>>>>> 4525d3288de02f9e4996fd3969866ea44f3c9971
  }

  renderErrors() {
    // return(
    //   <ul>
    //     {Object.keys(this.state.errors).map((error, i) => (
    //       <li key={`error-${i}`}>
    //         {this.state.errors[error]}
    //       </li>
    //     ))}
    //   </ul>
    // );

    const formattedErrors = this.state.frontErrors.map(error => {
      return <li className="session-error-list-item">{error}</li>
    });

    return (
      <ul className="session-error-list">
        { formattedErrors }
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
                Is an Owner: 
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
        { this.state.frontErrors.length > 0 ? this.renderErrors() : null }
      </div>
    );
  }
}
