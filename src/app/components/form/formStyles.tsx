import styled from 'styled-components';
import { StyledFormProps } from './formTypes';
import { backgroundColors } from '../../styles/globals';

export const StyledForm = styled.form.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})<StyledFormProps>`
  display: flex;
  width: 512px;
  padding: 32px;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  background-color: ${(props) =>
    props.isDarkMode
        ? backgroundColors.darkMode.neutral.default
        : backgroundColors.lightMode.neutral.default
  };
`;
