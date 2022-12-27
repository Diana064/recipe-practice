import { Component } from 'react';
import { Container, Button } from './PaymentWidget.styled';
import { FaCcMastercard, FaCcVisa, FaCcApplePay } from 'react-icons/fa';

export class PaymentWidget extends Component {
  render() {
    return (
      <Container>
        <Button>
          <FaCcMastercard size="24" /> Mastercard
        </Button>
        <Button>
          <FaCcVisa size="24" /> Visa
        </Button>
        <Button>
          <FaCcApplePay size="24" /> Apple Pay
        </Button>
      </Container>
    );
  }
}
