import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 15rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.border};
  padding: 25px;
  border-radius: 10px;
  margin: 10px;
  color: ${({ theme }) => theme.textColor};
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    min-height: 25rem;
    justify-content: flex-start;
    & h4,
    p {
      margin: 0;
    }
  }
`;
