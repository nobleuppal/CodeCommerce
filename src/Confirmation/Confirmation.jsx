import React from "react";
import './Confirmation.css';
import { faCheckCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Confirmation extends React.Component {
   
    
    render() {
        return(
            <div className="confirmation">
                 <div className="checkout-steps-three">
                    <div id="cart-icon"><FontAwesomeIcon icon={faCheckCircle}/><span>Cart</span></div>
                    <div id="shipping-icon"><FontAwesomeIcon icon={faCheckCircle}/><span>Shipping</span></div>
                    <div id="payment-icon"><FontAwesomeIcon icon={faCheckCircle}/><span>Payment</span></div>
                    <div id="confirmation-icon"><FontAwesomeIcon icon={faCheckSquare}/><span>Confirmation</span></div>
                </div>      
                <div>Card Ending with {this.props.lastDigits}</div>
                <div>Congratulations, <br/> Your order is accepted.</div>
                <button className="track-order">Track Order</button>
                <button className="back-home">Back to Homepage</button>                      
            </div>

        );
    }
}

export default Confirmation;