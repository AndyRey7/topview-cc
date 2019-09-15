import React from 'react';

const BikeInfo = (props) => {


    const showProducts = () => {
        if(props.clicked === true) {
            return (
                <div className='card'>
                    <h1> {props.bike.name}</h1>
                    <h2>Type: {props.bike.product_type}</h2>
                    <h3>Price: ${props.bike.price}</h3>
                    <img src={props.bike.image} alt="bikes"/>
                </div>
            )
        }
    }
        return <div>{showProducts()}</div>
}
export default BikeInfo;
