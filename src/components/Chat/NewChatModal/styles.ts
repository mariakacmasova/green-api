import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${({ theme }) => theme.mixins.fCenter};
  background: rgba(var(--rgb-black), 0.7);
  z-index: 100;
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 450px;
  ${({ theme }) => theme.mixins.column};
  gap: 1.3rem;
  padding: 2.2rem 2rem;
  border-radius: var(--bd-rd-5);
  background-color: var(--secondary-black);
`;

export const Title = styled.h5`
  ${({ theme }) => theme.mixins.fs20};
  font-weight: 500;
  color: var(--secondary-gray);
  text-align: center;
`;

export const FormWrapper = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;

  .react-tel-input {
    .form-control {
      width: 100%;
      ${({ theme }) => theme.mixins.fs14};
      font-weight: 400;
      color: var(--secondary-gray);
      border-radius: var(--bd-rd-5);
      border-width: 1px;
      border-style: solid;
      border-color: var(--dark-gray);
      background-color: var(--dark-gray);
      transition: var(--transition);

      &:is(:focus, :hover, :active) {
        outline: none;
        border-color: var(--green);
      }
    }

    .flag-dropdown {
      background-color: var(--dark-gray);
      border-color: var(--green);
    }

    .selected-flag {
      transition: var(--transition);

      &:is(:focus, :hover, :active) {
        background-color: var(--green);
      }
    }

    .flag-dropdown.open .selected-flag {
      background: var(--dark-gray);
    }

    .country-list {
      background-color: var(--dark-gray);
      /* width */
      ::-webkit-scrollbar {
        width: 2px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #000;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #adb5bd;
      }

      .country {
        transition: var(--transition);

        &:is(:hover, :active, :focus) {
          background-color: var(--gray);

          .country-name {
            color: var(--secondary-black);
          }
        }

        .country-name {
          color: var(--gray);
        }

        .dial-code {
          color: var(--green);
        }
      }

      .country.highlight {
        background-color: var(--green);

        .dial-code,
        .country-name {
          color: var(--dark-gray);
        }
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--secondary-gray);
  border: none;
  background: transparent;
  transition: var(--transition);

  &:is(:focus, :hover, :active) {
    outline: none;
    color: var(--green);
  }
`;

export const SuccessMessage = styled.p`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--secondary-gray);
  text-align: center;
`;
