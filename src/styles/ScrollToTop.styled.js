import styled from "styled-components";

export const ScrollToTopBtn = styled.button`
  opacity: ${(props) => props.opacity};
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  cursor: pointer;
  border: none;
  background: #fff;
  border-radius: 15px;
  padding: 5px 7px;
`;
