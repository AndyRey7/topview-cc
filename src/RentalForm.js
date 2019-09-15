import React, {Component} from 'react';

export default class RentalForm extends Component {

    state = {
        error: false,
        category: 'Adult Male Bike'
    }

    handleErrorClick = () => {
        this.setState({
            error: !this.state.error
        })
    }

    errorMessage = () => {
            if (this.state.error === false) throw window.alert("please choose insurance!")
    }
    render() {
        return (
            <form onSubmit={(e) => this.props.handleAdd(e, this.state)}>
                <h2>Bike Rental Form</h2>
                <div>
                    <span>Bike</span>
                    <select onChange={this.handleChange}>
                        <option value="Adult Male Bike">Adult Male Bike</option>
                        <option value="Adult Female Bike">Adult Female Bike</option>
                        <option value="Kids Unisex">Kids Unisex Bike</option>
                    </select>
                </div>
                <div>
                    <span>Helmet</span>
                    <select onChange={this.handleChange}>
                        <option value="Adult Unisex Helmet">Adult Unisex Helmet</option>
                        <option value="Kids Unisex Helmet">Kids Unisex Helmet</option>
                    </select>
                </div>
                <div>
                <span>Insurance $9.99</span>
                <input type="checkbox" onClick={this.handleErrorClick} value="Insurance"/>
                </div>
                <input type="submit" onClick={() => this.errorMessage()} value="Complete Rental Reservation"/>
            </form>
        )
    }
}
