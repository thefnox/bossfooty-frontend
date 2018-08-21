import React from 'react';
import {
  Button
} from '@material-ui/core';
import { 
  injectStripe, 
  CardNumberElement, 
  CardCVCElement, 
  CardExpiryElement, 
  PostalCodeElement 
} from 'react-stripe-elements';
import { connect } from 'react-redux';
import './style.css';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    const { stripe, userData, onSubmit } = this.props;
    stripe.createToken({type: 'card', owner: {name: `${userData.firstName} ${userData.firstName}`, email: userData.email}}).then(({token}) => {
      onSubmit(token);
    });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
  };

  render() {
    return (
      <form className="checkoutForm" onSubmit={this.handleSubmit}>
        <article>
          <p>Standard subscription: $24.99/month</p>
        </article>
        <label>
          Card details
          <CardNumberElement style={{base: {fontSize: '18px'}}} />
          <CardExpiryElement style={{base: {fontSize: '18px'}}} />
          <CardCVCElement style={{base: {fontSize: '18px'}}} />
          <PostalCodeElement style={{base: {fontSize: '18px'}}} />
        </label>
        <Button type="submit">Confirm order</Button>
      </form>
    );
  }
}

export default injectStripe(connect()(CheckoutForm));