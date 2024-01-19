"use client"

import Image from 'next/image'
import LogoLight from "../../../../public/images/logo-light.svg";
import LogoDark from "../../../../public/images/logo-dark.svg";
import Button from '../button/button';
import { HeaderProps } from './headerTypes';
import { StyledHeader, StyledLogoWrapper, StyledLogoText } from './headerStyles';

const Header: React.FC<HeaderProps> = ({ isDarkMode, onButtonClick }) => {
  return (
    <StyledHeader isDarkMode={isDarkMode}>
        <StyledLogoWrapper>
            <Image
                src={isDarkMode ? LogoDark : LogoLight}
                alt="Componento Logo"
                width={32}
                height={32}
                priority
                />

            <StyledLogoText isDarkMode={isDarkMode}>Componento</StyledLogoText>
        </StyledLogoWrapper>

        <Button isDarkMode={isDarkMode} priority="secondary" isDisabled={false} iconEnd={isDarkMode ? "IconLightMode" : "IconDarkMode"} label={isDarkMode ? 'Light' : 'Dark'} onClick={onButtonClick}/>
    </StyledHeader>
  );
};

export default Header;