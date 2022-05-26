import React from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import CustomerCart from "../Customer Cart/CustomerCart";
import SignIn from "../SignIn/SignIn";
import './LogIn.css';

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            accountStatus: <SignIn profileArray={this.profiles} toCart={this.toCartPage} toCreate={this.toCreatePage}/>,
            index: 0,
        }
        this.profiles = [];
    }

    toCreatePage = () => {
        this.setState({ accountStatus: <CreateAccount toSignIn={this.toSignInPage} allProfiles={this.addProfile}/>});
    }

    toSignInPage = () => {
        this.setState({ accountStatus: <SignIn profileArray={this.profiles} toCart={this.toCartPage} toCreate={this.toCreatePage}/>});
    }

    toCartPage = () => {
        this.setState({ accountStatus: <CustomerCart/>});
    }

    addProfile = (email, password, zip, first, last) => {
        
        let {index} = this.state;

        const profileObj = {
            email: email,
            password: password,
            zip: zip,
            first: first,
            last: last,
        } 

        this.profiles[index] = profileObj;

        this.setState({index: index + 1});
    }

    render() {

        const {accountStatus} = this.state;

        return(
            <div className="log-in">
                {accountStatus}
            </div>
        );
    }
}

export default LogIn;