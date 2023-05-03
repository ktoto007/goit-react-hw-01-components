import styled from 'styled-components';

export const StatsContainer = styled.li`
  width: 80px;
  height: 80px;
  text-align: center;
`;

export const StatsElement = styled.span`
  display: block;
  margin-top: 15px;
  color: ghostwhite;
  :last-child {
    font-weight: 600;
    font-size: 24px;
  }
`;
