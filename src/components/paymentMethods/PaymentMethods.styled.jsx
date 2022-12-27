import styled from 'styled-components';
export const Button = styled.div`
  display: flex;
  border: 2px solid blue;
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${p => {
    return p.selected ? p.theme.colors.primary : p.theme.colors.white;
  }};
  &:hover {
    color: #a85510;
    border: 2px solid #a85510;
    cursor: pointer;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  gap: 16px;
  justify-content: center;
`;
