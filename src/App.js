import React, { Component } from 'react';
import BikeContainer from './BikeContainer';
import RentalForm from './RentalForm';
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
          <RentalForm />
          <div><BikeContainer bikes={this.state.bikes} /></div>
          </div>
      )
  }
}

export default App;
