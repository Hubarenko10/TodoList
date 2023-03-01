import styled from 'styled-components';

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  width: 30%;
`;

export const List = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const HeaderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1.3fr;
  gap: 16px;
  padding: 16px;
  font-weight: bold;
  background-color: #808080;
  color: #fff;
`;

export const HeaderItem = styled.div`
  padding: 4px;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

export const Cell = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
`;
