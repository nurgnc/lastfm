import styled from "styled-components";

export const ArtistCardContent = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: ${(props) => props.justify};
  align-items: center;
  border: 1px solid gray;
  padding: 25px;
  border-radius: 10px;
  margin: 10px;
`;
