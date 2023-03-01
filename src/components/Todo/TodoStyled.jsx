import styled from 'styled-components';

export const TodoHeader = styled.p`
  font-size: 25px;
  line-height: 52px;
  font-weight: bold;
  letter-spacing: -0.8px;
  margin: 0px;
`;

export const TodoForm = styled.div`
  display: flex;
  padding: 20px;
  align-items: flex-end;
`;
export const TodoInput = styled.input`
  padding: 4px 10px 4px;
  font-size: 16px;
  font-family: 'Lucida Grande', Verdana, sans-serif;
  line-height: 20px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  flex-grow: 1;
  &:focus {
    border-color: green;
  }
`;
export const TitleBox = styled.div`
  margin-right: 30px;
`;

export const DescriptionBox = styled.div`
  margin-right: 30px;
`;

export const FormBtn = styled.button`
  background: lightseagreen;
  color: #fff;
  padding: 3px 10px;
  margin: 0 0 0 3px;
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
