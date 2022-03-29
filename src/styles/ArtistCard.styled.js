import styled from "styled-components";

export const ArtistCardContent = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: ${(props) => props.justify};
  align-items: center;
  border: 1px solid;
  border-color: ${({ theme }) => theme.border};
  padding: 25px;
  border-radius: 10px;
  margin: 10px;
  color: ${({ theme }) => theme.textColor};
`;

export const ArtistTitle = styled.span`
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.border};
`;
