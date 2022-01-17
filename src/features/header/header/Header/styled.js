import styled from "styled-components";
import { ReactComponent as Logo } from "../svg/Logo.svg";

export const Wrapper = styled.header`
  padding: 0 30px;
  margin: 0;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationList = styled.ul`
  display: grid;
  align-items: center;
  gap: 0 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavigationItem = styled.li``;

export const CompanyLogo = styled(Logo)`
  width: 20px;
  height: 20px;
  margin-right: 50px;
`;
