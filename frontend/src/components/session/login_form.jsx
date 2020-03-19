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
      frontErrors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.validateForms = this.validateForms.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) this.props.history.push('/puppies');

    this.setState({errors: nextProps.errors})
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
    
    inputs.forEach(input => input.classList.remove('session-error'));
    
    inputs.forEach(input => {
      if(input.name !== "submit" && input.value.length < 1){
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

    if (this.validateForms()) {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
  
      this.props.login({user})
        .then(() => {
          this.props.closeModal()
        }) 
        .catch(() => this.setState({ frontErrors: ['Invalid Username/Password'] })) // This isn't working and I'm not sure why
    }
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
      <div className="login-div">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="options-container">
            <span onClick={() => this.props.openModal("login")}>LOGIN</span>
            <span onClick={() => this.props.openModal("signup")}>SIGNUP</span>
          </div>
              <input type="text"
                name="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="input-form email-input"
              />
            <br/>
              <input type="password"
                name="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="input-form password-input"
              />
            <br/>
            <input
              type="submit" 
              name="submit"
              value="Submit" />
        </form>
        { this.state.frontErrors.length > 0 ? this.renderErrors() : null }
      </div>
    );
  }
};
