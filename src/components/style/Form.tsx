import styled from "styled-components";

const Form = styled.form`
`;

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  color: #555555;
  font-size: 18px;
  line-height: 120%;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const TextInput = styled.input.attrs(props => ({
  type: 'text'
}))`
  border: 1px solid #B1D9FF;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-family: MabryPro;
  width: 100%;
  color: #555555;

  ::placeholder {
    color: #CCCCCC;
  }
`;

const FormSection = styled.div`
  margin: 24px 0;
  text-align: left;
`;

export {
  Form,
  FormSection,
  TextInput,
  Label,
}