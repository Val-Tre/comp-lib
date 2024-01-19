"use client"

import { MainProps } from './mainTypes';
import { StyledMain } from './mainStyles';

const Main: React.FC<MainProps> = ({ isDarkMode, children }) => {
  return (
    <StyledMain isDarkMode={isDarkMode}>
        {children}
    </StyledMain>
  );
};

export default Main;