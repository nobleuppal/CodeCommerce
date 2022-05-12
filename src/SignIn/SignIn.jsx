import React from "react";
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputType: "password",
        }
        this.arrayProfiles = this.props.profileArray;
    }

    toggleVis = () => {
        const pass = document.getElementById('password');
        if (pass.type === 'password') {
            this.setState({inputType: 'text'});
        }
        else {
            this.setState({inputType: 'password'});
        }
    }

    isValidAccount = () => {
        const emailElm = document.getElementById('email');
        const passElm = document.getElementById('password');

        for (const elm of this.arrayProfiles) {
            if ( emailElm.value === elm.email && passElm.value === elm.password ) {
                this.props.toCart();
            }
        }
    }

    render() {

        const eye = <FontAwesomeIcon icon={faEye}/>
        
        return(
            <form className="sign-in">
                <h3>Welcome to Code Commerce!</h3>

                <div className="sign-body">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email"/>

                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <input id="password" name="password" type={this.state.inputType}/><span onClick={() => this.toggleVis()} className="fa-eye">{eye}</span>
                    </div>

                    <input onClick={ () => this.isValidAccount()} id="submit" type="button" name="submit" value="Sign In"></input>
                </div>
            </form>
        );
    }
}

export default SignIn;