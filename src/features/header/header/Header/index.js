import { Wrapper, NavigationList, CompanyLogo, NavigationItem } from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <NavigationList>
        <NavigationItem>
          <CompanyLogo />
        </NavigationItem>
      </NavigationList>
    </Wrapper>
  );
};
