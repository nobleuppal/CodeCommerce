import React from "react";
import './CustomerCart.css';
import ItemContainer from "../ItemContainer/ItemContainer";
import secretCode from '../assets/rare_code.jpeg';
import rareCode from '../assets/secret_code.jpeg';
import CheckOut from "../CheckOut/CheckOut";

class CustomerCart extends React.Component {
   constructor() {
       super();
       this.itemData = [
       { image: rareCode, price: 99.50, name: 'Rare Code'}, 
       { image: secretCode, price: 130.50, name: 'Secret Code'}
       ]
       this.state = {
            checkoutTotal: 0,
       }
   }

   getCartTotal = (cartTotal) => {
        this.setState({checkoutTotal: cartTotal});
   }

    render() {
        return(
            <form className="customer-cart">
                <ItemContainer checkoutPrice={this.getCartTotal} profileArray={this.itemData}/>
                <CheckOut toShipping={this.props.toShipping} checkoutPrice={this.state.checkoutTotal}/>
            </form>
        );
    }
}

export default CustomerCart;