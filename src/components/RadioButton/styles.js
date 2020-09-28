import styled from 'styled-components';

export const Container = styled.div`
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
    label {
      &:hover {
        color: inherit;
      }
    }
  }

  &.hide {
    display: none;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked,
  &.selected input[type='radio'] {
    /* The .selected class is used in the radio list */
    + label:before {
      border-color: var(--borders);
    }

    + label:after {
      width: 0.75rem;
      height: 0.75rem;
    }

    + label {
      color: var(--highlight);

      strong {
        color: var(--highlight);
      }
      span {
        color: var(--texts);
      }
    }
  }

  label {
    display: flex;
    position: relative;
    padding: 0 1rem 0 3rem;
    height: 100%;
    border-radius: 0.25rem;
    align-items: center;
    flex: auto;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--highlight);
    }

    &:before,
    &:after {
      position: absolute;
      content: '';
      border-radius: 50%;
      transition: all 0.3s ease;
      transition-property: all;
      box-sizing: border-box;
    }

    &:before {
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid var(--borders);
      background-color: var(--mediumBackground);
    }

    &:after {
      top: 50%;
      left: 1.625rem;
      width: 0;
      height: 0;
      transform: translate(-50%, -50%);
      background: var(--highlight);
    }
  }
`;
