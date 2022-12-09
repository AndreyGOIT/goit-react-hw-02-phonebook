import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p
        style={{
          display: 'flex',
          margin: 15,
        }}
      >
        Find contacts by name
      </p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
