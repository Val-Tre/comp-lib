export interface TextProps {
    customColor?: string;
    textType:
        | "display/large"
        | "display/medium"
        | "display/small"
        | "title/large"
        | "title/medium"
        | "title/small"
        | "title/caption"
        | "ui/medium/regular"
        | "ui/medium/bold"
        | "ui/small/regular"
        | "ui/small/bold"
        | "paragraph/medium/regular"
        | "paragraph/medium/bold"
        | "paragraph/small/regular"
        | "paragraph/small/bold";
    text: string;
}

export interface StyledTextProps {
    customColor?: string;
    textType:
        | "display/large"
        | "display/medium"
        | "display/small"
        | "title/large"
        | "title/medium"
        | "title/small"
        | "title/caption"
        | "ui/medium/regular"
        | "ui/medium/bold"
        | "ui/small/regular"
        | "ui/small/bold"
        | "paragraph/medium/regular"
        | "paragraph/medium/bold"
        | "paragraph/small/regular"
        | "paragraph/small/bold";
}
