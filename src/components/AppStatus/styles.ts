import styled from 'styled-components';

export const AppStatusStyles = styled.div`
  .status-done {
    animation: appear_done 2s 'infinite';

    @keyframes appear_done {
      0% { 
        transform: scale(1.0);
      }

      25% { 
        transform: scale(0.4);
      }

      50% { 
        transform: scale(1.0);
      }

      75% { 
        transform: scale(1.0);
      }
      
      100% { 
        transform: scale(1.0);
      }
    }
  }
`;
