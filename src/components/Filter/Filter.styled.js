import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Text = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

const Field = styled.input`
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 14px;
  min-width: 125px;
  padding: 8px;
  &:hover {
    border: 1px solid blue;
  }
`;

export { Wrapper, Text, Field };
