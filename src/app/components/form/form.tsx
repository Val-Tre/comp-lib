"use client"

import { FormProps } from './formTypes';
import { StyledForm } from './formStyles';

const Header: React.FC<FormProps> = ({ isDarkMode, children }) => {
  return (
    <StyledForm isDarkMode={isDarkMode} onSubmit={(e) => (e.preventDefault)}>
      {children}
    </StyledForm>
  );
};

export default Header;