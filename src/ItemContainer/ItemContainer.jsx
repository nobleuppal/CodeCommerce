import React from "react";

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
            </div>
        );
    }
}
export default ItemContainer;