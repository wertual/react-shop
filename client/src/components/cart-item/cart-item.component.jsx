import React from 'react';

import { CartItemContainer, ImageItem, ItemDetailsContainer, NameContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageItem src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;