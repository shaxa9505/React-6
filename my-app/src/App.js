import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  // clickIncr = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // clickDecr = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  // Clicknow = () => {
  //   this.setState({count: this.state.count = 0})
  // }

  handleClick = (val) => {
    this.setState({count: val})
  }


  render() {
    return (
      <div className="App">
          {/* <button onClick={this.clickIncr}>Incr</button>
          <button onClick={this.clickDecr}>Decr</button> <br /> <br />
          <button onClick={this.Clicknow}> nolga tenglash </button> <br /> <br /> */}

          <button onClick={() => this.handleClick(this.state.count + 1)}>Incr</button>
          <button onClick={() => this.handleClick(this.state.count - 1)}>Decr</button> <br /> <br />
          <button onClick={() => this.handleClick(0)}> nolga tenglash </button> <br /> <br />
          <span>{this.state.count}</span> 
      </div>
    );
  }
}

export default App;