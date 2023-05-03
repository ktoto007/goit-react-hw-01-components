import styled from 'styled-components';

export const OneFriend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 3px solid gray;
  border-radius: 10px;
  padding: 8px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${props => {
    if (props.status) {
      return 'green';
    }
    return 'red';
  }};
  display: block;
  border-radius: 50%;
`;
