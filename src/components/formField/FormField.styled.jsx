import styled from 'styled-components';
import {
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from 'formik';

export const Wrapper = styled.label``;
export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;

export const Field = styled(FormikField)`
  margin-left: 5px;
`;
export const SpanName = styled.span`
  background-color: lightblue;
`;
