import React, { useRef } from 'react';
import './Switch.css';

export const Switch = ({ setDarkMode, checked, setChecked }) => {
  const ref = useRef(null);

  function handleChange() {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }
  return (
    <div className="dark-mode">
      <p className="dark-mode-tile">Dark Mode</p>
      <input
        onChange={handleChange}
        ref={ref}
        checked={checked}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default Switch;
