import React from "react";

class Confirmation extends React.Component {
   
    
    render() {
        return(
            <div>Card Ending with {this.props.lastDigits}</div>
        );
    }
}

export default Confirmation;