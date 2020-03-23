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
      zip: "94103",
      errors: {},
      frontErrors: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.validateForms = this.validateForms.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors});
  }

  handleChange(e){
    e.target.classList.remove('session-error');
    if (e.target.name === 'isOwner') {
      this.setState({ isOwner: e.target.checked });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  validateForms(){
    let allow = true;
    const inputs = document.querySelectorAll('input');
    const newErrors = [];
    let empty = false;
    let notLongEnough = false;
    
    inputs.forEach(input => {
      input.classList.remove('session-error');
      
      if((input.name !== "isOwner" && input.name !== "address2" && input.name !== "submit" && input.value.length < 1)){
        // if (input.value.length < 1) {
        //   allow = false;
        //   empty = true;
        //   input.classList.add('session-error');
        // } else if (input.value.length < 6) {
          //   allow = false;
          //   notLongEnough = true;
          //   input.classList.add('session-error');
          // }
        allow = false;
        input.classList.add('session-error');
      }
    });

    if (allow) {
      this.setState({ frontErrors: [] });
      inputs.forEach(input => input.classList.remove('session-error'));
    } else {
      if (notLongEnough) {
        this.setState({ frontErrors: ['Fields must be at least 6 characters.'] });
      } else {
        this.setState({ frontErrors: ['Please fill in all required fields.'] });
      } 
    }

    return allow;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateForms()){
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
      
      this.props.signup({user})
        .then((res) => {
          
          this.props.closeModal()
        }); 
    }
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
        <div className="signup-image"></div>
        <form onSubmit={this.handleSubmit} className="signup-form" >
          <h2>Create an account</h2>
            <br/>
              <input type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                className="input-form email-input"
              />
            <br/>
              <input type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
                className="input-form username-input"
              />
            <br/>
              <input type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
                className="input-form password-input"
              />
            <br/>
              <input type="password"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                className="input-form password-input"
              />
            <br/>
              <div className="fullName-input">
                <input type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  className="input-form firstName-input"
                /> <input type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  className="input-form lastName-input"
                />
              </div>
            {/* <br/> */}
              <input type="text"
                name="address1"
                value={this.state.address1}
                onChange={this.handleChange}
                placeholder="Address 1"
                className="input-form address1-input"
              />
            <br/>
              {/* <input type="text"
                name="address2"
                value={this.state.address2}
                onChange={this.handleChange}
                placeholder="Address 2"
                className="input-form address2-input"
              /> */}
            {/* <br/> */}
              <input type="text"
                name="city"
                value="San Francisco, CA"
                disabled
                className="input-form city-input"
              />
            {/* <br/> */}
            {/* <br/>
              <input
                type="number"
                name="zip"
                value={this.state.zip}
                onChange={this.handleChange}
                placeholder="Zip"
                min="00000"
                max="99999"
                className="input-form zip-input"
              />
            <br/> */}
            <label className="owner-option">
                <p>Are you an Owner?</p> 
                <input
                  type="checkbox"
                  name="isOwner"
                  onChange={this.handleChange}
                  value={this.state.isOwner}
                  className="input-form isOwner-input"
                />
              <p>Yes!</p>
              </label>
            <br/>
            <div className="button-container">
            <button
              type="submit"
              name="submit"
              className="signup-button">Sign up
            </button>
            </div>
        { this.state.frontErrors.length > 0 ? this.renderErrors() : null }
          <div className="options-container">
            <span onClick={() => this.props.openModal("login")}>Already have an account?</span>
          </div>
        </form>
      </div>
    );
  }
}
