import styled from "styled-components";

export const ArtistCardContent = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: ${(props) => props.justify};
  align-items: center;
  min-height: 15rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.border};
  padding: 25px;
  border-radius: 10px;
  margin: 10px;
  color: ${({ theme }) => theme.textColor};
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & h4,
    p {
      margin: 0;
    }
  }
`;

export const ArtistTitle = styled.span`
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.border};
`;
