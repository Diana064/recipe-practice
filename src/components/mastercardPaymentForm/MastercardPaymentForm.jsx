import { Formik } from 'formik';
import { Form } from './MastercardPaymentForm.styled';
import { FormField } from 'components/formField/FormField';
import { paymentScheme } from 'components/validation';
const initialValues = { cardHolder: '', cardNumber: '', cvv: '' };

export const MastercardPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => actions.setSubmitting(false), 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={paymentScheme}
    >
      {({ isSubmitting }) => {
        console.log(isSubmitting);
        return (
          <>
            <h2>MastercardPaymentForm</h2>
            <Form>
              <FormField label="Card holder" name="cardHolder" />
              <br />

              <FormField label="Card number" name="cardNumber" />
              <br />

              <FormField label="CVV" name="cvv" />
              <br />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Trying to pay' : 'Pay'}
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};
