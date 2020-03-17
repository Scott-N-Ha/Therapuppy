import React from 'react';

class MainPage extends React.Component {
  constructor(props){
    super(props);


  }


  render(){
    const { user } = this.props;

    if (user === undefined) {
      return (
        <div>
          Main Page when there is no user logged in
        </div>
      )
    } else {
      return (
        <div>
          Main Page when User is Logged In
        </div>
      )
    }
  }
}

export default MainPage;
