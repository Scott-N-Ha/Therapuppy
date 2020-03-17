import React from 'react';

export default class Booking extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { booking } = this.props;

    return (
      <div className="booking">
        Booking Div
      </div>
    )
  }
}
