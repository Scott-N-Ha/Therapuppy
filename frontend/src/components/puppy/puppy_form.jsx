import React from 'react';

export default class PuppyForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ownerId: this.props.owner._id,
      name: '',
      age: 0,
      breed: undefined,
      fluffyRating: undefined,
      earType: undefined,
      sex: '',
      natureRating: undefined,
      price: 0.0,
      frontErrors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  formError(name, fieldType){
    return `${name} cannot be ${fieldType}`;
  }

  selectError(name){
    return `You must select a ${name}`;
  }

  validateForm(){
    let allow = true;
    const newErrors = [];

    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
      input.classList.remove('session-error');

      if (input.type === "text" && input.value.length < 1){
        allow = false;
        newErrors.push(this.formError(input.name,"blank"));
        input.classList.add('session-error');
      } else if (input.type === "number" && input.value <= 0) {
        allow = false;
        newErrors.push(this.formError(input.name,"less than zero."));
        input.classList.add('session-error');
      } 
    });

    const radios = document.querySelectorAll('input[type="radio"]');

    if (!radios[0].checked && !radios[1].checked){
      allow = false;
      newErrors.push(this.selectError('sex'));
      radios[0].classList.add('session-error');
      radios[1].classList.add('session-error');
    }

    const selects = document.querySelectorAll('select');

    selects.forEach(select => {
      select.classList.remove('session-error');

      if(select.value.slice(0,6) === "Select"){
        allow = false;
        newErrors.push(this.selectError(select.name));
        select.classList.add('session-error');
      }
    });


    if (allow){
      this.setState({ frontErrors: [] });
      inputs.forEach(input => input.classList.remove('session-error'));
      selects.forEach(select => select.classList.remove('session-error'));
    } else {
      this.setState({ frontErrors: newErrors });
    }

    return allow;
  }

  cancel(){
    this.setState({
      ownerId: this.props.owner._id,
      name: '',
      age: 0,
      breed: null,
      fluffyRating: null,
      earType: null,
      sex: '',
      natureRating: null,
      price: 0.0,
      frontErrors: [],
    });
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.validateForm()){
      let puppy = {
        owner: this.state.ownerId,
        name: this.state.name,
        age: this.state.age,
        breed: this.state.breed,
        fluffyRating: this.state.fluffyRating,
        earType: this.state.earType,
        sex: this.state.sex,
        natureRating: this.state.natureRating,
        price: this.state.price,
      }
      this.props.createPuppy({puppy})
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
    const { owner, breeds, earTypes, natureRatings, fluffyRatings } = this.props;

    const breedOptions = breeds.map(breed => {
      return <option key={breed.id} value={breed.id}>{breed.name}</option>
    });

    const earTypeOptions = earTypes.map(ear => {
      return <option key={ear.id} value={ear.id}>{ear.name}</option>
    });

    const natureOptions = natureRatings.map(rating => {
      return <option key={rating.id} value={rating.id}>{rating.name}</option>
    });

    const fluffyOptions = fluffyRatings.map(rating => {
      return <option key={rating.id} value={rating.id}>{rating.name}</option>
    });

    return (
      <div className="puppy-form-div">
        <form className="puppy-creation-form" onSubmit={this.handleSubmit} >
          <input
            type="text"
            className="input-form name-input"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
          />
          <br/>
          <input
            type="number"
            className="input-form age-input"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
            min="1"
            max="25"
            placeholder="Age"
          />
          <br/>
          <select
            name="breed"
            className="input-form breed-input"
            onChange={this.handleChange}
            value={this.state.breed}
            placeholder="Breed"
            defaultValue="Select a Breed"
          >
            <option disabled>Select a Breed</option>
            { breedOptions }
          </select>
          <br/>
          <select
            name="fluffyRating"
            className="input-form fluffyRating-input"
            onChange={this.handleChange}
            value={this.state.fluffyRating}
            placeholder="Fluffy Rating"
            defaultValue="Select a Fluffy Rating"
          >
            <option disabled>Select a Fluffy Rating</option>
            { fluffyOptions }
          </select>
          <br/>
          <select
            name="earType"
            className="input-form earType-input"
            onChange={this.handleChange}
            value={this.state.earType}
            placeholder="Ear Type"
            defaultValue="Select an Ear Type"
          >
            <option disabled>Select an Ear Type</option>
            { earTypeOptions }
          </select>
          <br/>
          <label className="puppy-form-label">Sex: 
            <label className="puppy-form-label">M: 
              <input
                type="radio"
                name="sex"
                className="sex-input"
                onChange={this.handleChange}
                value="M"
                />
            </label>
            <label className="puppy-form-label">F: 
              <input
                type="radio"
                name="sex"
                className="sex-input"
                onChange={this.handleChange}
                value="F"
              />
            </label>
          </label>
          <label className="puppy-form-label">
            <select
              name="natureRating"
              className="input-form natureRating-input"
              onChange={this.handleChange}
              value={this.state.natureRating}
              placeholder="Nature Rating"
              defaultValue="Select a Nature Rating"
            >
              <option disabled>Select a Nature Rating</option>
              { natureOptions }
            </select>
          </label>
          <label className="puppy-form-label">Price per Day:
            <input
              type="number"
              className="input-form price-input"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
              min="1"
              max="9000"
              placeholder="Price"
            />
          </label>
          <button className="input-form submit-input">Register a new Dogter</button>
        </form>
        { this.state.frontErrors.length > 0 ? this.renderErrors() : null }
      </div>
    )
  }
}
