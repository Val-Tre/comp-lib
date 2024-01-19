import styled from 'styled-components';
import { StyledHeaderProps, StyledLogoProps } from './headerTypes';
import { textColors, borderColors, backgroundColors, typography } from '../../styles/globals';

export const StyledHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})<StyledHeaderProps>`
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${(props) =>
    props.isDarkMode
        ? borderColors.darkMode.app
        : borderColors.lightMode.app
  };
  background-color: ${(props) =>
    props.isDarkMode
        ? backgroundColors.darkMode.neutral.default
        : backgroundColors.lightMode.neutral.default
  };
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogoText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})<StyledLogoProps>`
  font-size: ${typography.title.medium.fontSize};
  font-style: ${typography.title.medium.fontStyle};
  font-weight: ${typography.title.medium.fontWeight};
  line-height: ${typography.title.medium.lineHeight};
  margin-left: 8px;
  color: ${(props) =>
    props.isDarkMode
        ? textColors.darkMode.primary
        : textColors.lightMode.primary
  };
`;