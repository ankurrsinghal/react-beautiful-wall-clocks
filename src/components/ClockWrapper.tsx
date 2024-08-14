import styled from "styled-components";

const ClockWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8rem 0;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 2rem 0 0;
    font-family: Inter;
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 4rem 0;
  }
`;

export default ClockWrapper;
