// your Bomb code here!
import React from "react";

class Bomb extends React.Component {
  constructor(props){
    super();

    this.state =  {
      secondsLeft: `${props.initialCount}`
    }
  }
  render () {
    return (
      <div>
      <p>I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}
