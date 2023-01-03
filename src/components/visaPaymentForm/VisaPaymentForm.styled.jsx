import {
  Form as FormikForm,

  //   Formik as FormikForm,

  //   ErrorMessage as FormikForm,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  padding: 30px;
  width: 300px;
  align-items: center;
  justify-content: center;
`;
// export const FormField = styled.label`
//   background-color: lightblue;
//   margin-left: 10px;
// `;

// export const Formik = styled(FormikForm)``;
// export const ErrorMessage = styled(FormikForm)``;
