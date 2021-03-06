import React from "react";
import './CheckOut.css';

class CheckOut extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            discount: 0,
        }
        this.discount = 75;
   }

   useCode = (e) => {
        e.preventDefault();
        const promo = document.getElementById('promo');
        if(promo.value && this.props.onPage !== "Confirmation" && this.props.onPage !== "Payment" && this.props.checkoutPrice > 0) {
            this.setState({discount: 75});
            this.props.setPay(this.discount);
        }
    }

   
    

   render() {

       return(
            <div className="check-out">
                <h3>Summary</h3>
                <div>
                    <label htmlFor="promo">Do you have a promo code?</label>
                    <div><input readOnly id="promo" name="promo" type="text" maxLength={6} value="Q46g7H9yJ"/><button onClick={e => this.useCode(e)} type="button">Apply</button></div>
                </div>
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