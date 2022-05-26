import React from "react";
import './ItemContainer.css';
import CartItem from '../CartItem/CartItem';

class ItemContainer extends React.Component {
    
    render() {
        return(
            <div className="item-container">
                <div className="category-container">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total Price</div>
                </div>
                <CartItem
                    image={this.props.profileArray[0].image}
                    price={this.props.profileArray[0].price}
                    name={this.props.profileArray[0].name}
                />
                <CartItem
                    image={this.props.profileArray[1].image}
                    price={this.props.profileArray[1].price}
                    name={this.props.profileArray[1].name}
                />
            </div>
        );
    }
}
export default ItemContainer;