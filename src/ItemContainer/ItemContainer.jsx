import React from "react";
import './ItemContainer.css';
import CartItem from '../CartItem/CartItem';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemOne:  <CartItem
                image={this.props.profileArray[0].image}
                price={this.props.profileArray[0].price}
                name={this.props.profileArray[0].name}
                removeItem={this.removeItem}
                priceAdder={this.priceAdder}
                id="one"
            />,
            
            itemTwo:  <CartItem
                image={this.props.profileArray[1].image}
                price={this.props.profileArray[1].price}
                name={this.props.profileArray[1].name}
                removeItem={this.removeItem}
                priceAdder={this.priceAdder}
                id="two"         
            />,

            
        }
        this.cartTotal = 0;
        this.firstRun = 0;
    }

    priceAdder = (itemTotal, prevTotal) => {
        if(this.firstRun < 2) {
            prevTotal = 0;
            ++this.firstRun;
        }
        this.cartTotal = this.cartTotal + itemTotal - prevTotal;
        this.props.checkoutPrice(this.cartTotal);
    }

    removeItem = (id) => {
        if (id === 'one') {
            this.setState({itemOne: null});
        }
        else if (id === 'two') {
            this.setState({itemTwo: null});
        }
    }
    
    render() {
        return(
            <div className="item-container">  
               <div className="item-product">Product</div>
               <div className="price">Price</div>
               <div className="quantity">Quantity</div>
               <div className="total-price">Total Price</div> 
               <div className="first-item">{this.state.itemOne}</div>
               <div className="second-item">{this.state.itemTwo}</div>    
               <button className="item-button" onClick={(e) => this.props.handleClick(e)} type="button">Checkout</button>
            </div>
        );
    }
}

export default ItemContainer;