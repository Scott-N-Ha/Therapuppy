import React from 'react';

export default class PuppyForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ownerId: this.props.owner.id,
      name: '',
      age: 0,
      breedId: 0,
      fluffyRating: 1,
      earTypeId: 0,
      sex: '',
      natureRating: 0,
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
      breedId: 0,
      fluffyRating: 1,
      earTypeId: 0,
      sex: '',
      natureRating: 0,
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
        <label>This is where breed would be</label>
        <br/>
        <select
          name="fluffyRating"
          className="input-form fluffyRating-input"
          onChange={this.handleChange}
          value={this.state.fluffyRating}
          placeholder="Fluffy Rating"
        >
          <option value="1">Short Fur</option>
          <option value="2">Furry Doge</option>
          <option value="3">Pillow</option>
          <option value="4">Part-Sheep</option>
          <option value="5">Cloud</option>
        </select>
        <br/>
        <label>This is where ear type would be</label>
        <br/>
        <input
          type="radio"
          name="sex"
          className="input-form sex-input"
          onCHange={this.handleChange}
          value="M"
        />
        <input
          type="radio"
          name="sex"
          className="input-form sex-input"
          onCHange={this.handleChange}
          value="F"
        />
        <br/>
        <select
          name="natureRating"
          className="input-form natureRating-input"
          onChange={this.handleChange}
          value={this.state.natureRating}
          placeholder="Nature Rating"
        >
          <option value="1">Lazy</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">Red Rocket</option>
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
