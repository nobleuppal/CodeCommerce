import React from "react";

class SignIn extends React.Component {
    render() {
        return(
            <div className="sign-in">
                <h3>Sign In</h3>

                <div className="sign-body">
                    <label for="email">Your Email Address *</label>
                    <input id="email" name="email" type="email"/>

                    <label for="password">Your Password *</label>
                    <input id="password" name="password" type="password"/>

                    <input id="submit" type="button" name="submit" value="Continue"></input>
                </div>
            </div>
        );
    }
}

export default SignIn;