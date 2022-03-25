// components
import ThemeButton from "../ThemeButton";
// css
import { ContainerFluid, Flex } from "../../styles/baseStyles";
import { Nav, StyledLink } from "../../styles/Navbar.styled";
// logo
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <ContainerFluid>
      <Nav>
        <Flex justify="space-between" width="80%" align="center">
          <StyledLink to="/">
            <img src={logo} alt="cinefilia" />
          </StyledLink>
          <ThemeButton />
        </Flex>
      </Nav>
    </ContainerFluid>
  );
}

export default Navbar;
