import React from 'react';

export default class PuppyForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ownerId: this.props.owner.id,
      name: '',
      age: 0,
      breed: null,
      fluffyRating: null,
      earType: null,
      sex: '',
      natureRating: null,
      price: 0.0,
      frontErrors: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  validateForm(){
    let allow = true;
    const newErrors = [];
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
      input.classList.remove('session-error');

      // Need to add form validations here
    });

    if (allow){
      this.setState({ frontErrors: [] });
      inputs.forEach(input => input.classList.remove('session-error'));
    } else {
      this.setState({ frontErrors: newErrors });
    }

    return allow;
  }

  cancel(){
    this.setState({
      ownerId: this.props.owner.id,
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
      let newPuppy = {
        ownerId: this.state.ownerId,
        name: this.state.name,
        age: this.state.age,
        breedId: this.state.breedId,
        fluffyRating: this.state.fluffyRating,
        earTypeId: this.state.earTypeId,
        sex: this.state.sex,
        natureRating: this.state.natureRating,
        price: this.state.price,
      }

      // NEEDS THE CREATE PUPPY ACTION MAPPED TO DISPATCH
    }
  }

  render(){
    const { owner, breeds, earTypes, natureRatings, fluffyRatings } = this.props;

    const breedOptions = breeds.map(breed => {
      return <option value={breed.id}>{breed.name}</option>
    });

    const earTypeOptions = earTypes.map(ear => {
      return <option value={ear.id}>{ear.name}</option>
    });

    const natureOptions = natureRatings.map(rating => {
      return <option value={rating.id}>{rating.name}</option>
    });

    const fluffyOptions = fluffyRatings.map(rating => {
      return <option value={rating.id}>{rating.name}</option>
    });

    return (
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
        >
          <option selected disabled>Select a Breed</option>
          { breedOptions }
        </select>
        <br/>
        <select
          name="fluffyRating"
          className="input-form fluffyRating-input"
          onChange={this.handleChange}
          value={this.state.fluffyRating}
          placeholder="Fluffy Rating"
        >
          <option selected disabled>Select a Fluffy Rating</option>
          { fluffyOptions }
        </select>
        <br/>
        <select
          name="earType"
          className="input-form earType-input"
          onChange={this.handleChange}
          value={this.state.earType}
          placeholder="Ear Type"
        >
          <option selected disabled>Select an Ear Type</option>
          { earTypeOptions }
        </select>
        <br/>
        <label>M: 
          <input
            type="radio"
            name="sex"
            className="input-form sex-input"
            onCHange={this.handleChange}
            value="M"
            />
        </label>
        <label>F: 
          <input
            type="radio"
            name="sex"
            className="input-form sex-input"
            onCHange={this.handleChange}
            value="F"
          />
        </label>
        <br/>
        <select
          name="natureRating"
          className="input-form natureRating-input"
          onChange={this.handleChange}
          value={this.state.natureRating}
          placeholder="Nature Rating"
        >
          <option selected disabled>Select a Nature Rating</option>
          { natureOptions }
        </select>
        <br/>
        <input
          type="number"
          className="input-form price-input"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          min="0.01"
          max="9999.99"
          placeholder="Price"
        />
      </form>
    )
  }
}
