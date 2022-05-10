import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './CreateAccount.css';

class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            inputType: "password",
            emailVis: 'e-error-invisible',
            passVis: 'p-error-invisible',
            firstVis: 'f-error-invisible',
            lastVis: 'l-error-invisible',
            zipVis: 'z-error-invisible',
        }
    }

    toggleVis = () => {
        const pass = document.getElementById('new-pass');
    
        if (pass.type === 'password') {
            this.setState({inputType: 'text'});
        }
        else {
            this.setState({inputType: 'password'});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.validateEmail();
        this.validatePass();
        this.validateNames();
        this.validateZip();
    }

    validateEmail = () => {
        const regExEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const newEmail = document.getElementById('new-email');
       
        if (!regExEmail.test(newEmail.value)) {
            this.setState({emailVis: 'e-error-visible'});
        }
        else {
            this.setState({emailVis: 'e-error-invisible'});
        }
    }

    validatePass = () => {
        const newPass = document.getElementById('new-pass');
        const passCheck = document.getElementById('pass-check');

        if(((newPass.value !== passCheck.value) || (newPass.value === ""))) {
            this.setState({passVis: 'p-error-visible'});
        }
        else {
            this.setState({passVis: 'p-error-invisible'});
        } 
    }

    validateNames = () => {
        const firstName = document.getElementById('first');
        const lastName = document.getElementById('last');

        const regExName = /^[A-Za-z]+$/;
        
        if ((regExName.test(firstName.value))) {
            this.setState({firstVis: 'f-error-invisible'});
        }
        else {
            this.setState({firstVis: 'f-error-visible'});
        }

        if((regExName.test(lastName.value))) {
            this.setState({lastVis: 'l-error-invisible'});
        }
        else {
            this.setState({lastVis: 'l-error-visible'});
        }

    }

    validateZip = () => {
        const zipCode = document.getElementById('zip');

        if (zipCode.value.length === 5) {
            this.setState({zipVis: 'z-error-invisible'});
        }
        else {
            this.setState({zipVis: 'z-error-visible'});
        }
    }

    render() {

        const eye = <FontAwesomeIcon icon={faEye}/>
        const {emailVis, passVis, firstVis, lastVis, zipVis} = this.state;

        return (
            <form className="create-account">
                <div className="enter-info">
                    <p className={emailVis}>hmmm... looks like the email is invalid</p>
                    <label htmlFor="new-email">Your E-Mail Address *</label>
                    <input id="new-email" name="new-email" type="email" required/>
                </div>

                <div className="enter-info">
                    <p className={passVis}>sorry, the password is invalid</p>
                    <label htmlFor="new-pass">Create Password *</label>
                    <div className="pass-container">
                        <input id="new-pass" name="new-pass" type={this.state.inputType} required/><span onClick={() => this.toggleVis()} className="fa-eye">{eye}</span>
                    </div>
                </div>

                <div className="enter-info">
                    <label htmlFor="pass-check">Confirm Password *</label>
                    <div className="pass-container">
                        <input id="pass-check" name="pass-check" type="password" required />
                    </div>
                </div>

                <div className="enter-info">
                    <p className={firstVis}>sorry, invalid name</p>
                    <label htmlFor="first">First Name *</label>
                    <input id="first" name="first" type="text" required/>
                </div>

                <div className="enter-info">
                    <p className={lastVis}>sorry, invalid name</p>
                    <label htmlFor="last">Surname *</label>
                    <input id="last" name="last" type="text" required/>
                </div>

                <div className="enter-info">
                    <p className={zipVis}>sorry, invalid zip code</p>
                    <label htmlFor="zip">Zip Code *</label>
                    <input id="zip" name="zip" type="number" required/>
                </div>

                <div className="submit-account">
                    <button onClick={ (e) => this.handleSubmit(e)}>LOG IN</button>
                    <p>or</p>
                    <button>SIGN UP WITH FACEBOOK</button>
                </div>
            </form>
        );
    }
}

export default CreateAccount;