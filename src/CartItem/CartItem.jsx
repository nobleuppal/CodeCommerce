import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './CartItem.css';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            totalPrice: this.props.price,
        }
    }


    handleChange = (e) => {
        this.setState({quantity: e.target.value, totalPrice: (e.target.value)*(this.props.price)});
    }

    render() {
        return(
            <div className="cart-item">
                <FontAwesomeIcon className="x-mark" icon={faXmarkCircle}/>
                <div className="product">
                    <img src={this.props.image} alt="rare-code"/>
                    <h6>{this.props.name}</h6>
                </div>
                <span className="product-price">${this.props.price}</span>
                <select value={this.state.quantity} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <span>${this.state.totalPrice}</span>
            </div>
        );
    }
}

export default CartItem;