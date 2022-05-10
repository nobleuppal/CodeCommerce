import React from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import SignIn from "../SignIn/SignIn";
import './LogIn.css';

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            accountStatus: <SignIn/>,
        }
    }

    toCreatePage = () => {
        this.setState({ accountStatus: <CreateAccount/>});
    }

    toSignInPage = () => {
        this.setState({ accountStatus: <SignIn/>});
    }

    render() {

        const {accountStatus} = this.state;

        return(
            <div className="log-in">
                <div className="account">
                    <button onClick={ () => this.toSignInPage() }>Sign In</button>
                    <button onClick={ () => this.toCreatePage() }>Create Account</button>
                </div>
                {accountStatus}
            </div>
        );
    }
}

export default LogIn;