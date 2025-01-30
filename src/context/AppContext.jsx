import React, { useState } from 'react';
import { createContext } from "react";

export const SliderContext = createContext();

const AppContext = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const info = {
    activeSlideIndex,
    setActiveSlideIndex,
  };

  return (
    <div>
      <SliderContext.Provider value={info}>{children}</SliderContext.Provider>
    </div>
  );
};

export default AppContext;