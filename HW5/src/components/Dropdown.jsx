import React from "react";
import PropTypes from "prop-types";

export const Dropdown = ({ elements, selectedValue, onChange }) => {
  return (
    <select value={selectedValue} onChange={onChange}>
      {elements.map((element, i) => (
        <option key={i} value={element.value}>
          {element.name}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
