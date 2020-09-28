import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function RadioButton({ name, options, className, ...rest }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find(ref => (ref ? ref.checked : null));

        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find(ref => ref.value === value);

        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {options.map((option, index) => (
        <Container
          key={option.id}
          className={`wrap radioButton primaryInput ${className} ${option.className ||
            ''} ${option.disabled ? 'disabled' : ''}`}
        >
          <input
            // eslint-disable-next-line no-return-assign
            ref={elRef => (inputRefs.current[index] = elRef)}
            type="radio"
            name={fieldName}
            value={option.value}
            defaultChecked={defaultValue === option.value}
            id={`${name}_${option.id}`}
            disabled={option.disabled}
            {...rest}
          />
          <label htmlFor={`${name}_${option.value}`}>
            <span>{option.label}</span>
          </label>
        </Container>
      ))}
    </>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  className: '',
};
