import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, BackgroundImageContainer, CollectionFooterContainer, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({item, addItem }) => {
    
    const { name, price, imageUrl } = item;

    return (
    <CollectionItemContainer>
        <BackgroundImageContainer className='image' imageUrl={imageUrl} />
        
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>    
            <PriceContainer>{price}$</PriceContainer>    
        </CollectionFooterContainer>

        <AddButton inverted onClick={() => addItem(item)}>
            ADD TO CART
        </AddButton>
    </CollectionItemContainer>
)};


const mapDispatchToProps = dispath => ({
    addItem: item => dispath(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
    )(CollectionItem);