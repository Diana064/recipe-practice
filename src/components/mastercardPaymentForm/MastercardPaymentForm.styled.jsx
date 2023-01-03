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
