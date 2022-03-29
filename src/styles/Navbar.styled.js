import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
  z-index: 10;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.border};
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
  & > img {
    margin-right: 10px;
  }
`;

export const ThemeButtons = styled.button`
  border-radius: 70%;
  margin: 0 10px;
  padding: 8px 10px;
  border: none;
  background: #fff;
  cursor: pointer;
`;
