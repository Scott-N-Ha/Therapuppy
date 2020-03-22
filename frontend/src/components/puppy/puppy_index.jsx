import React from 'react';

import PuppyContainer from './puppy_container.js';

export default class PuppyIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    if (this.props.ownerId === undefined){
      this.props.fetchAllPuppies();
    }
  }

  render(){
    const { puppies } = this.props;

    const puppiesContainers = puppies.map(puppy => {
      return <PuppyContainer puppy={puppy} showMore={false} />
    });

    return (
      <>
        {/* <div className="welcome-text-container">
        <p>it's time to unbury those bones</p>
        <h1>Local Dogters that'll eat out of the palm of your hand.</h1>
        </div> */}
        <div className="puppies-bg">
          <div className="puppy-index">
            { puppiesContainers }
          </div>
        </div>
      </>
    )
  }
}
