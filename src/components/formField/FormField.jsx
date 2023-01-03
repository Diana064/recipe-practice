import { ErrorMessage, Wrapper, Field, SpanName } from './FormField.styled';

export const FormField = ({ label, name }) => {
  return (
    <Wrapper>
      {label && <SpanName>{label}</SpanName>}
      <Field name={name}></Field>
      <ErrorMessage name={name} component="div" />
    </Wrapper>
  );
};
