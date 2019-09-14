import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        bikes: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then( data => {
            this.setState({
                bikes: data
            }, () => console.log('this is state', this.state.bikes))
        })
    }
  render(){
      return (
          <div>
          Hello
          </div>
      )
  }
}

export default App;
