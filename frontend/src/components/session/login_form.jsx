import React from 'react';

function titlize(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      passwordError: '',
      emailError: '',
      frontErrors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    this.validateForms = this.validateForms.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) this.props.history.push('/puppies');

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      passwordError: "", emailError: "", frontErrors: []
    });
  }

  validateForms(){
    let allow = true;
    const inputs = document.querySelectorAll('input');
    const newErrors = [];
    inputs.forEach(input => input.classList.remove('session-error'));
    inputs.forEach(input => {
      if(input.name !== "submit" && input.value.length < 1){
        allow = false;
        newErrors.push(`${titlize(input.name)} cannot be blank.`);
        input.classList.add('session-error');
      }
    });

    newErrors.forEach(error => {
      error.includes("Email") ? (this.setState({emailError: error})) : (this.setState({passwordError: error}))
    })
    
    // if (allow) {
    //   this.setState({ frontErrors: [] });
    //   inputs.forEach(input => input.classList.remove('session-error'));
    // } else {
    //   this.setState({ frontErrors: newErrors });
    // }
    
    return allow;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateForms()) {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
  
      this.props.login({user})
        .then((res) => {
          // debugger
          (typeof res === "undefined") ? (this.setState({emailError:'', passwordError: '', frontErrors: ["Invalid Username/Password"]})) : (
            this.props.closeModal()
          )
        }) 
        // .catch(() => this.setState({ frontErrors: ['Invalid Username/Password'] })) // This isn't working and I'm not sure why
    } 
    
  }

  // renderErrors() {
  //   // return(
  //   //   <ul>
  //   //     {Object.keys(this.state.errors).map((error, i) => (
  //   //       <li key={`error-${i}`}>
  //   //         {this.state.errors[error]}
  //   //       </li>
  //   //     ))}
  //   //   </ul>
  //   // );

  //   // const formattedErrors = this.state.frontErrors.forEach(error => {
  //   //   error.includes("Email") ? (this.emailError = error) : (this.passwordError = error)
  //   // });

  //   // return (
  //   //   <ul className="session-error-list">
  //   //     { formattedErrors }
  //   //   </ul>
  //   // );
  // }

  render() {
    return (
      <div className="login-div">
        <div className="login-image"><p>*boop*</p></div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Welcome back !</h2>
          <h3>*tail wags*</h3>
    <span className="auth-errors">{this.state.frontErrors}</span>
          <span className="auth-errors">{this.state.emailError}</span>
              <input type="text"
                name="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="input-form email-input"
              />
            <br/>
            <span className="auth-errors">{this.state.passwordError}</span>
              <input type="password"
                name="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="input-form password-input"
              />
            <br/>
            <button name="submit" className="login-button">Login</button>
        {/* { this.state.frontErrors.length > 0 ? this.renderErrors() : null } */}
          <div className="options-container">
              <span onClick={() => this.props.openModal("signup")}>No account ? Make one now !</span>
            </div>
        </form>
      </div>
    );
  }
};
