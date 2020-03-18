import React from 'react';

import PuppyContainer from './puppy_container.js';

export default class PuppyIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    if (this.props.ownerId === undefined) this.props.fetchAllPuppies();
  }

  render(){
    const { puppies } = this.props;

    const puppiesContainers = puppies.map(puppy => {
      return <PuppyContainer puppy={puppy} />
    });

    return (
      <div className="puppy-index">
        { puppiesContainers }
      </div>
    )
  }
}
