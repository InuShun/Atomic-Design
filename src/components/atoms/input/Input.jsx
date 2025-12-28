import styled from 'styled-components';

export const Input = (props) => {
  const { placeholder = '' } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
padding: 9px 7px;
border: solid #ddd 1px;
border-radius: 9999px;
outline: none;
`;
