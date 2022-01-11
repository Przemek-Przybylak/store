import styled from "styled-components";
import { ReactComponent as Logo } from "../svg/Logo.svg";

export const Wrapper = styled.header`
  padding: 0 30px;
  margin: 0;
  height: 60px;
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
`;

export const NavigationItem = styled.li``;

export const CompanyLogo = styled(Logo)`
  width: 38px;
  height: 38px;
`;
