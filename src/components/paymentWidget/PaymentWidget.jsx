import { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { methods } from 'components/constants';
import { PaymentMethods } from 'components/paymentMethods/PaymentMethods';
import { VisaPaymentForm } from 'components/visaPaymentForm/VisaPaymentForm';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };
  selectedPaymentMethod = method => () => {
    this.setState({
      selectedMethod: method,
    });
  };
  render() {
    const { mastercard, visa, applePay } = methods;
    const { selectedMethod } = this.state;
    return (
      <Container>
        <PaymentMethods
          selectedMethod={selectedMethod}
          onSelect={this.selectedPaymentMethod}
        />
        {selectedMethod === mastercard && <div>Mastercard Form</div>}
        {selectedMethod === visa && <VisaPaymentForm />}
        {selectedMethod === applePay && <div>Apple Pay Form</div>}
      </Container>
    );
  }
}
