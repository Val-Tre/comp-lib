type textTransform = "none" | "uppercase" | "lowercase";

export const colors = {
    neutral: {
        0: '#ffffff',
        10: '#f2f2f8',
        20: '#dcdae6',
        30: '#d0cede',
        40: '#c6c4d4',
        50: '#a5a3b8',
        60: '#48455f',
        70: '#2d2b3b',
        80: '#24222f',
        90: '#111019',
    },
    blue: {
        10: '#dfdbfa',
        40: '#5038e6',
        50: '#361bd9',
        60: '#2d17b5',
    },
    red: {
        40: '#e82d5a',
        50: '#e82d5a'
    }
};

export const textColors = {
    lightMode: {
      accent: colors.blue[50],
      primary: colors.neutral[90],
      secondary: colors.neutral[60],
      inverse: colors.neutral[0],
      disabled: colors.neutral[50],
      error: colors.red[50],
    },
    darkMode: {
        accent: colors.blue[40],
        primary: colors.neutral[0],
        secondary: colors.neutral[40],
        inverse: colors.neutral[0],
        disabled: colors.neutral[60],
        error: colors.red[40],
    },
};

export const borderColors = {
    lightMode: {
        app: colors.neutral[20],
        accent: colors.blue[40],
        neutral: colors.neutral[30],
        error: colors.red[50],
    },
    darkMode: {
        app: colors.neutral[70],
        accent: colors.blue[40],
        neutral: colors.neutral[60],
        error: colors.red[40],
    },
}

export const backgroundColors = {
    lightMode: {
        app: colors.neutral[10],
        accent: {
            default: colors.blue[50],
            hover: colors.blue[40],
            active: colors.blue[60],
        },
        neutral: {
            default: colors.neutral[0],
            hover: colors.neutral[10],
            active: colors.neutral[20],
        },
    },
    darkMode: {
        app: colors.neutral[90],
        accent: {
            default: colors.blue[50],
            hover: colors.blue[40],
            active: colors.blue[60],
        },
        neutral: {
            default: colors.neutral[80],
            hover: colors.neutral[80],
            active: colors.neutral[70],
        },
    },
}
  
export const typography = {
    display: {
        large: {
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '80px',
        },
        medium: {
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '40px',
        },
        small: {
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '32px',
        },
    },
    title: {
        large: {
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '28px',
        },
        medium: {
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '24px',
        },
        small: {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '20px',
        },
        caption: {
            fontSize: '10px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '26px',
            letterSpacing: '0.4px',
            textTransform: 'uppercase' as textTransform,
        },
    },
    ui: {
        medium: {
            regular: {
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '20px',    
            },
            bold: {
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '20px',    
            },
        },
        small: {
            regular: {
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '16px',    
            },
            bold: {
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '16px',    
            },
        },
    },
    paragraph: {
        medium: {
            regular: {
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',    
            },
            bold: {
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24px',    
            },
        },
        small: {
            regular: {
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '20px',    
            },
            bold: {
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '20px',    
            },
        },
    },
};