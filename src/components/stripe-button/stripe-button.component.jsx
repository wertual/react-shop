import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_mZB3UHfB3sbs0As2hZUMt6Tp00wOgpCO9E';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout 
           label='Pay Now'
           name='CRWN Clothing Ltd.'
           shippingAddress
           billingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is ${price}`} 
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;