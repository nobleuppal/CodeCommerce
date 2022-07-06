import React from "react";
import './CustomerCart.css';
import ItemContainer from "../ItemContainer/ItemContainer";
import secretCode from '../assets/rare_code.jpeg';
import rareCode from '../assets/secret_code.jpeg';
import CheckOut from "../CheckOut/CheckOut";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import Payment from "../Payment/Payment";
import Confirmation from "../Confirmation/Confirmation";


class CustomerCart extends React.Component {
   constructor() {
       super();
       this.itemData = [
       { image: rareCode, price: 99.50, name: 'Rare Code'}, 
       { image: secretCode, price: 130.50, name: 'Secret Code'}
       ]
       this.state = {
            checkoutTotal: 0,
            checkoutPage: <ItemContainer handleClick={this.handleClick} checkoutPrice={this.getCartTotal} profileArray={this.itemData}/>, 
            prevPage: null,  
            shippingCost: 0, 
       }
       this.lastDigits = 0;   
   }

   getCartTotal = (cartTotal) => {
        this.setState({ checkoutTotal: cartTotal});
   }

   handleClick = (e) => {
        e.preventDefault();
        if (this.state.checkoutPage.type.name === "ItemContainer") {
            this.setState({ checkoutPage: <ShippingInfo toPrev={this.goToPrev} handleClickCart={this.handleClick} setShipping={this.setShippingInfoValid} getActive={this.getActive}/>, prevPage: <ItemContainer handleClick={this.handleClick} checkoutPrice={this.getCartTotal} profileArray={this.itemData}/>});
        }
        else if (this.state.checkoutPage.type.name === "ShippingInfo") {
            this.setState({ checkoutPage: <Payment toPrev={this.goToPrev} getLastDigits={this.getLastFour} handleClickCart={this.handleClick}/>, prevPage: <ShippingInfo handleClickCart={this.handleClick} toPrev={this.goToPrev} getActive={this.getActive}/>});
        }
        else if (this.state.checkoutPage.type.name === "Payment") {
            this.setState({ checkoutPage: <Confirmation lastDigits={this.lastDigits}/>, prevPage: <Payment toPrev={this.goToPrev} getLastDigits={this.getLastFour} handleClickCart={this.handleClick}/>});
        }
    }

    goToPrev = () => {
        if (this.state.checkoutPage.type.name === "ShippingInfo" ) {
            this.setState({checkoutPage: this.state.prevPage});
            this.setState({prevPage: null});
        }
        else if (this.state.checkoutPage.type.name === "Payment") {
            this.setState({checkoutPage: this.state.prevPage});
            this.setState({prevPage: <ItemContainer handleClick={this.handleClick} checkoutPrice={this.getCartTotal} profileArray={this.itemData}/>});
        }
    }

    getLastFour = (digits) => {
        this.lastDigits = digits;
    }

    getActive = (active, option) => {
        if (option === 0 && active === true) {
            this.setState({shippingCost: 0});
        }
        else if (option === 1 && active === true) {
            this.setState({shippingCost: 5});
        } 
    }
    
    setShippingInfoValid = () => {
        this.setState({shippingInfoValid: true});
    }

    render() {
        return(
            <div className="customer-cart">
                <div>{this.state.checkoutPage}</div>
                <CheckOut onPage={this.state.checkoutPage.type.name} shippingCost={this.state.shippingCost} handleClick={this.handleClick} checkoutPrice={this.state.checkoutTotal}/>
            </div>
        );
    }
}

export default CustomerCart;