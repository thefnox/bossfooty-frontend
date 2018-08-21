/**
 *
 * SubscribeCheckout
 *
 */

import React from 'react';
import { Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from 'components/CheckoutForm';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class SubscribeCheckout extends React.Component {
  render() {
    const { onSubmit, userData } = this.props;
    return (
      <Elements>
        <InjectedCheckoutForm onSubmit={onSubmit} userData={userData} />
      </Elements>
    );
  }
}

export default SubscribeCheckout;
