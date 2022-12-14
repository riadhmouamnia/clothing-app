import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <h3 className="name">{name}</h3>
      <span>
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
