import React from "react";

class Payment extends React.Component {
    render() {
        return(
            <div className="payment-page">
                <h3>Payment Information</h3>
                <div className="payment-info">
                    <div className="cardholder-container">
                        <label htmlFor="cardholder">Cardholder Name</label>
                        <input name="cardholder" id="cardholder" type="cardholder"/>
                    </div>

                    <div className="card-number-container">
                        <label htmlFor="card-number">Cardholder Name</label>
                        <input name="cardholder" id="cardholder" type="cardholder"/>
                    </div>

                    <div className="expiration-container">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;