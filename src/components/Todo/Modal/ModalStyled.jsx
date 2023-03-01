import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalWindow = styled.div`
  background-color: #fff;
  width: 700px;
  height: 350px;
`;
export const ModalBox = styled.div`
  padding: 20px;
`;

export const ModalHeader = styled.h1`
  text-align: center;
  margin-top: 0;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #333;
  text-shadow: 1px 1px 1px #333;
  font-size: 30px;
`;

export const DescriptionHeader = styled.h2`
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #333;
  font-size: 20px;
`;
export const DescriptionText = styled.p`
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 17px;
`;
export const StatusHeader = styled.h2`
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #333;
  font-size: 20px;
`;
export const Checkbox = styled.input`
  margin: 0;
`;
export const ModalBtn = styled.button`
  margin-left: 20px;
  background: lightseagreen;
  color: #fff;
  padding: 3px 10px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  vertical-align: bottom;
  &:hover {
    background: lightslategrey;
  }
`;
