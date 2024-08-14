import styled from "styled-components";

const ClockGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: #fafafa;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

export default ClockGrid;
