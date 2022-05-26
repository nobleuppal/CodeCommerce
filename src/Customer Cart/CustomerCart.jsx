import React from "react";
import './CustomerCart.css';
import ItemContainer from "../ItemContainer/ItemContainer";
import secretCode from '../assets/rare_code.jpeg';
import rareCode from '../assets/secret_code.jpeg';

class CustomerCart extends React.Component {
   constructor() {
       super();
       this.itemData = [
       { image: rareCode, price: 99.50, name: 'Rare Code'}, 
       { image: secretCode, price: 130.50, name: 'Secret Code'}
       ]
   }

    render() {
        return(
            <form className="customer-cart">
                <ItemContainer profileArray={this.itemData} />
            </form>
        );
    }
}

export default CustomerCart;