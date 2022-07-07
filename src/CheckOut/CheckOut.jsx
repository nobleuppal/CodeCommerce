import React from "react";
import './CheckOut.css';

class CheckOut extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            discount: 0,
        }
   }

   useCode = (e) => {
    e.preventDefault();
    const promo = document.getElementById('promo');

    if(promo.value && this.props.onPage !== "Confirmation") {
        this.setState({discount: 75});
    }
    else {
        this.setState({discount: 0});
    }
}

   render() {
       return(
            <div className="check-out">
                <h3>Summary</h3>
                <label htmlFor="promo">Do you have a promo code?</label>
                <div><input readOnly id="promo" name="promo" type="text" maxLength={6} value="Q46g7H9yJ"></input><button onClick={e => this.useCode(e)} type="button">Apply</button></div>
                <div className="cost-breakdown">
                    <span>Cart Subtotal: <span>${this.props.checkoutPrice}</span></span><br/>
                    <span>Shipping & Handling: <span>${this.props.shippingCost}</span></span><br/>
                    <span>Discount: <span>${this.state.discount}</span></span><br/>
                    <span>Cart Total: <span>${this.props.checkoutPrice + this.props.shippingCost - this.state.discount}</span></span>
                </div>
            </div>
       );
   }


}

export default CheckOut;