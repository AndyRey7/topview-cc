import React, { Component } from 'react';
import BikeInfo from './BikeInfo';

export default class BikeContainer extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }



    bikeData = () => {
        return this.props.bikes.map(bike => <BikeInfo key={bike.id} bike={bike} clicked={this.state.clicked} />)
    }


    render() {
        return (
            <div className="hello">
            <button onClick={this.handleClick}>Show Bike Products</button>
            <div className="bike-container">
            {this.bikeData()}
            </div>
            </div>
        )
    }
}
