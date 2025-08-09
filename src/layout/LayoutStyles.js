import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  
  main {
    padding-top: 80px; /* Account for fixed header */
  }
  
  @media (max-width: 768px) {
    main {
      padding-top: 70px;
    }
  }
`;
