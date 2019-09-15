import React, {Component} from 'react';

export default class RentalForm extends Component {

    state = {
        error: false
    }

    handleErrorClick = () => {
        this.setState({
            error: !this.state.error
        })
    }

    checkSelectionErrorMessage = () => {
        let selectedBike = document.getElementById('bikeOption');
        let selectedHelmet = document.getElementById('helmetOption');
        let selectedBikeValue = selectedBike.options[selectedBike.selectedIndex].value;
        let selectedHelmetValue = selectedHelmet.options[selectedHelmet.selectedIndex].value;

        if (selectedBikeValue && selectedHelmetValue === "selectOption") {
            alert("please select a bike and helmet please!!");
        }
    }

    errorMessage = () => {
            if (this.state.error === false) {
                this.checkSelectionErrorMessage()
                window.alert("please choose insurance!")
            }
    }

    render() {
        return (
            <form>
                <h2>Bike Rental Form</h2>
                <div>
                    <span>Bike</span>
                    <select id="bikeOption">
                        <option value="selectOption">--- Please Select ---</option>
                        <option value="Adult Male Bike">Adult Male Bike</option>
                        <option value="Adult Female Bike">Adult Female Bike</option>
                        <option value="Kids Unisex">Kids Unisex Bike</option>
                    </select>
                </div>
                <div>
                    <span>Helmet</span>
                    <select id="helmetOption">
                        <option value="selectOption">--- Please Select ---</option>
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
