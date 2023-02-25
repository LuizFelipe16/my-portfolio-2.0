import styled from 'styled-components';

export const MenuTools = styled.div`
  width: 5rem;
  height: auto;

  bottom: 4rem;
  right: 0.5rem;
  
  z-index: 10000000;
  position: fixed;

  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .menu-tools {
    display: flex;
    flex-direction: column;
  }

  .button-tool {
    width: 3rem;
    height: 3rem;

    background-color: var(--cyan-500);
    color: var(--gray-900);

    border-radius: 100%;
    transition: 0.2s;

    &:hover {
      background-color: var(--cyan-500);
      filter: brightness(0.9);
    }
  }

  .animated-tool {
    animation: menu_open 1s normal both;
  }

  @keyframes menu_open {
    from {
      margin-bottom: -10rem;
    }
    to {
      margin-bottom: 0rem;
    }
  }
`;