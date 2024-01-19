import { TextProps } from './textTypes';
import { StyledText } from './textStyles';

export const Text: React.FC<TextProps> = ({ textType, text, customColor }) => {
  return (
    <StyledText textType={textType} customColor={customColor}>
        {text}
    </StyledText>
  );
};

export default Text;