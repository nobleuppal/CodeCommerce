import React from "react";
import './CustomerCart.css';
import ItemContainer from "../ItemContainer/ItemContainer";

class CustomerCart extends React.Component {
    render() {
        return(
            <form className="customer-cart">
                <ItemContainer/>
            </form>
        );
    }
}

export default CustomerCart;