import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;
export const Button = styled.div`
  display: flex;
  border: 2px solid blue;
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #a85510;
    border: 2px solid #a85510;
    cursor: pointer;
  }
`;
