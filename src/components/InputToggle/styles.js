import styled from 'styled-components';

export const Container = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  height: 1.5rem;
  width: 3rem;
  border-radius: 1rem;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 0;
  background: var(--mediumBackground);
  transition: all 0.2s ease;
  box-shadow: 0 6px 16px -3px rgba(44, 44, 44, 0.1);
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.5);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  &:checked {
    background: var(--highlight);
    &:after {
      transform: translatex(calc(3rem - 1.25rem - 4px));
    }
  }
`;
