import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;
export const RecipeName = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
