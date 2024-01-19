import styled from 'styled-components';
import { MainProps } from './mainTypes';
import BgLight from "../../../../public/images/bg-light.svg";
import BgDark from "../../../../public/images/bg-dark.svg";
import { textColors, backgroundColors } from '../../styles/globals';

export const StyledMain = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})<MainProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  color: ${(props) =>
    props.isDarkMode
        ? textColors.darkMode.primary
        : textColors.lightMode.primary
  };
  background-color: ${(props) =>
    props.isDarkMode
        ? backgroundColors.darkMode.app
        : backgroundColors.lightMode.app
  };
  background-image: url(${(props) =>
    props.isDarkMode
        ? BgDark.src
        : BgLight.src
  });
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;