'use client';
import { useState } from 'react';

export function useToggle({ initialToggleState = false } = {}) {
  const [toggle, setToggle] = useState(initialToggleState);

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  const handleToggleOn = () => {
    setToggle(true);
  };
  const handleToggleOff = () => {
    setToggle(false);
  };

  return { toggle, handleToggle, handleToggleOn, handleToggleOff };
}
