import React from "react";
import './Payment.css';
import { faCheckCircle, faCheckSquare, faCreditCard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cvvInvalid: "Invalid CVV",
            nameInvalid: "Invalid Name",
            cardType: null,
            cardLength: 19,
            month: "",
            year: "",
            lastDigits: 0,
        }
    }

    cvvCheck = (e) => {
        const maxLength = 3;

        if(e.target.value.length !== maxLength) {
            this.setState({cvvInvalid: "Invalid CVV"});
        }
        else {
            this.setState({cvvInvalid: null});
        }
    }

    nameCheck = (e) => {
        const regExName = /^([^0-9]*)$/;


        if(!regExName.test(e.target.value)) {
            this.setState({nameInvalid: "Invalid Name"});
        }
        else {
            this.setState({nameInvalid: null});
        }
    }

    numberCheck = (e) => {
        const regExMaster = /^5[1-5][0-9]{14}|^2[2-7][0-9]{14}$/;
        const regExVisa = /^4[0-9]{15}$/;
        const regExAmex = /^3[47][0-9]{13}$/;
        const regExDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

        if(regExMaster.test(e.target.value)) {
            this.setState({cardType: "Master"});
            this.setState({cardLength: 19});
            let value = e.target.value.match(/.{1,4}/g);
            this.setState({lastDigits: value[3]});
            e.target.value = value.join(' '); 
        }
        else if(regExVisa.test(e.target.value)) {
            this.setState({cardType: "Visa"});
            this.setState({cardLength: 19});
            let value = e.target.value.match(/.{1,4}/g);
            this.setState({lastDigits: value[3]});
            e.target.value = value.join(' ');  
        }
        else if (regExAmex.test(e.target.value)) {
            this.setState({cardType: "Amex"});
            this.setState({cardLength: 18});
            let value = e.target.value.match(/.{1,4}/g);
            this.setState({lastDigits: value[3]});
            e.target.value = value.join(' '); 
        }
        else if (regExDiscover.test(e.target.value)) {
            this.setState({cardType: "Discover"});
            this.setState({cardLength: 19});
            let value = e.target.value.match(/.{1,4}/g);
            this.setState({lastDigits: value[3]});
            e.target.value = value.join(' '); 
        }
        else {
            this.setState({cardType: null});
        }
    }

    handleClick = (e) => {
        if(this.state.nameInvalid === null && this.state.cvvInvalid === null && this.state.cardType !== null && this.state.month !== "" && this.state.year !== "") {
            this.props.getLastDigits(this.state.lastDigits);
            this.props.handleClickCart(e);
        }
    }



    render() {
        return(
            <div className="payment-page">
                <h3>Payment Information</h3>
                <div className="payment-info">
                    <div className="cardholder-container">
                        <p>{this.state.nameInvalid}</p>
                        <label htmlFor="cardholder">Cardholder Name</label>
                        <input onChange={e => this.nameCheck(e)} name="cardholder" id="cardholder" type="text"/>
                    </div>

                    <div className="card-number-container">
                        <p>{this.state.cardType}</p>
                        <label htmlFor="card-number">Card Number</label>
                        <input maxLength={this.state.cardLength} onChange={e => this.numberCheck(e)} name="card-number" id="card-number" type="text"/>
                    </div>

                    <div className="expiration-container">
                        <label htmlFor="expiration-date">Expiration Date</label>
                        <select onChange={e => (this.setState({month: e.target.value}))} id="month" name="month">
                            <option value="">Month</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <select onChange={e => (this.setState({year: e.target.value}))} id="year" name="year">
                            <option value="">Date</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>

                    <div className="cvv-container">
                        <p>{this.state.cvvInvalid}</p>
                        <label htmlFor="cvv">CVV</label>
                        <input name="cvv" id="cvv" type="number" onChange={e => this.cvvCheck(e)}/>                       
                    </div>
                               
                    <button className="back" onClick={() => this.props.toPrev()} type="button">Back</button>
                    <button className="pay" onClick={(e) => this.handleClick(e)} type="button">Pay</button> 

                    <div className="checkout-steps-two">
                        <div id="cart-icon"><FontAwesomeIcon icon={faCheckCircle}/><span>Cart</span></div>
                        <div id="shipping-icon"><FontAwesomeIcon icon={faCheckCircle}/><span>Shipping</span></div>
                        <div id="payment-icon"><FontAwesomeIcon icon={faCreditCard}/><span>Payment</span></div>
                        <div id="confirmation-icon"><FontAwesomeIcon icon={faCheckSquare}/><span>Confirmation</span></div>
                    </div>                                  
                </div>
            </div>
        );
    }
}

export default Payment;