import React from 'react';

export default class Puppy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { puppy } = this.props;

    if (puppy === undefined) return null;

    return (
      <div className="puppy">
        Puppy Information goes here
        
        BookingContianer removed from here and moved to the PuppyShow container.
      </div>
    )
  }
}
