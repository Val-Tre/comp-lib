import styled, { css } from "styled-components";
import { StyledTextProps } from "./textTypes";
import { typography } from "../../styles/globals";

export const StyledText = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== "textType" && prop !== "customColor",
})<StyledTextProps>`
    vertical-align: top;
    ${({ customColor }) => {
        return css`
            color: ${customColor} !important;
        `;
    }}
    ${({ textType }) => {
        switch (textType) {
            // Display
            case "display/large":
                return css`
                    ${typography.display.large}
                    display: block;
                `;
                break;
            case "display/medium":
                return css`
                    ${typography.display.medium}
                    display: block;
                `;
                break;
            case "display/small":
                return css`
                    ${typography.display.small}
                    display: block;
                `;
                break;
            // Title
            case "title/large":
                return css`
                    ${typography.title.large}
                    display: block;
                `;
                break;
            case "title/medium":
                return css`
                    ${typography.title.medium}
                    display: block;
                `;
                break;
            case "title/small":
                return css`
                    ${typography.title.small}
                    display: block;
                `;
                break;
            case "title/caption":
                return css`
                    ${typography.title.caption}
                    display: block;
                `;
                break;
            // UI
            case "ui/medium/regular":
                return css`
                    ${typography.ui.medium.regular}
                `;
                break;
            case "ui/medium/bold":
                return css`
                    ${typography.ui.medium.bold}
                `;
                break;
            case "ui/small/regular":
                return css`
                    ${typography.ui.small.regular}
                `;
                break;
            case "ui/small/bold":
                return css`
                    ${typography.ui.small.bold}
                `;
                break;
            // Paragraph
            case "paragraph/medium/regular":
                return css`
                    ${typography.paragraph.medium.regular}
                `;
                break;
            case "paragraph/medium/bold":
                return css`
                    ${typography.paragraph.medium.bold}
                `;
                break;
            case "paragraph/small/regular":
                return css`
                    ${typography.paragraph.small.regular}
                `;
                break;
            case "paragraph/small/bold":
                return css`
                    ${typography.paragraph.small.bold}
                `;
                break;
            // Default
            default:
                return css`
                    ${typography.paragraph.medium.regular}
                `;
        }
    }};
`;
