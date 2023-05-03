import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: auto;
  width: 380px;
  heigth: 400px;
  background-color: GhostWhite;
  padding-top: 50px;
`;

export const InformationContainer = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 80px;
  display: block;
  margin: 0 auto;
`;

export const MainText = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 12px;
`;

export const SecondaryText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 8px;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 15px 0;
  background-color: Gainsboro;
`;

export const StatBlock = styled.li`
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid gray;
    padding-right: 30px;
  }
`;

export const StatsText = styled.span`
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: CornflowerBlue;

  :last-child {
    font-weight: 500;
    color: SteelBlue;
  }
`;
