import { Button } from './PaymentMethods.styled.jsx';
import { FaCcMastercard, FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import { methods } from 'components/constants.js';
import { ButtonsWrapper } from './PaymentMethods.styled.jsx';

export const PaymentMethods = ({ selectedMethod, onSelect }) => {
  const { mastercard, visa, applePay } = methods;
  return (
    <ButtonsWrapper>
      <Button
        selected={selectedMethod === mastercard}
        onClick={onSelect(mastercard)}
      >
        <FaCcMastercard size="24" /> Mastercard
      </Button>
      <Button selected={selectedMethod === visa} onClick={onSelect(visa)}>
        <FaCcVisa size="24" /> Visa
      </Button>
      <Button
        selected={selectedMethod === applePay}
        onClick={onSelect(applePay)}
      >
        <FaCcApplePay size="24" /> Apple Pay
      </Button>
    </ButtonsWrapper>
  );
};
