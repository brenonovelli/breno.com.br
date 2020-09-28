import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { AlarmExclamation } from 'styled-icons/boxicons-regular/';

import { Container, Error } from './styles';

const Input = ({ name, icon: Icon, loading, onBlur, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    fieldName,
    defaultValue,
    error,
    registerField,
    clearError,
  } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);

    if (onBlur) {
      onBlur(inputRef.current.value);
    }

    if (inputRef.current?.value) {
      clearError();
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {Icon && <Icon />}

      <input
        onFocus={handleInputFocus}
        name={fieldName}
        onBlur={handleInputBlur}
        type="text"
        defaultValue={defaultValue}
        id={name}
        {...rest}
        ref={inputRef}
      />

      {error && (
        <Error title={error}>
          <AlarmExclamation />
        </Error>
      )}
    </Container>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  loading: PropTypes.bool,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  icon: null,
  loading: false,
  onBlur: null,
};
