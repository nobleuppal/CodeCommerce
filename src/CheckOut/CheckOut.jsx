import React from "react";
import './CheckOut.css';

class CheckOut extends React.Component {
   



   render() {
       return(
            <div className="check-out">
                <h3>Summary</h3>
                <label htmlFor="promo">Do you have a promo code?</label>
                <div><input id="promo" name="promo" type="text" maxLength={6}></input><button type="button">Apply</button></div>
                <div>
                    <span>Cart Subtotal: <span>${this.props.checkoutPrice}</span></span>
                    <span>Shipping & Handling: <span>${this.props.shippingCost}</span></span>
                    <span>Discount: <span>-</span></span>
                    <span>Cart Total: <span>${this.props.checkoutPrice + this.props.shippingCost}</span></span>
                </div>
            </div>
       );
   }


}

export default CheckOut;