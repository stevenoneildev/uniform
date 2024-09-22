import { core } from "./core";

export interface Theme {
    colors: {
        foreground: {
            primary: string;
            primaryFaded: string;
            primaryDisabled: string;
            onPrimary: string;
            onPrimaryFaded: string;
            onPrimaryDisabled: string;
        },
        background: {
            page: string;
            primary: string;
            primaryHover: string;
            primaryActive: string;
            primaryDisabled: string;
            primaryFaded: string;
            primaryFadedHover: string;
            primaryFadedActive: string;
            primaryFadedDisabled: string;
            base: string;
            baseHover: string;
            baseActive: string;
            baseDisabled: string;
        },
        border: {
            neutral: string;
            neutralHover: string;
            neutralActive: string;
        }
    },
    typography: {
        fontFamily: string;
        fontWeight: {
          regular: number;
          medium: number;
          bold: number;
        };
        fontSize: {
          bodyS: string;
          bodyM: string;
          bodyL: string;
          headingXS: string;
          headingS: string;
          headingM: string;
          headingL: string;
          headingXL: string;
        };
        lineHeight: {
          tight: number;
          normal: number;
          relaxed: number;
        };
    },
    spacing: {
        spacingNone: string;
        spacingXXS: string;
        spacingXS: string;
        spacingS: string;
        spacingM: string;
        spacingL: string;
        spacingXL: string;
        spacingXXL: string;
    },
    borderRadius: {
        borderRadiusNone: string;
        borderRadiusS: string;
        borderRadiusM: string;
        borderRadiusL: string;
    },
};

export const lightTheme: Theme = {
    colors: {
        foreground: {
            primary: core.colors.grey1200,
            primaryFaded: core.colors.grey600,
            primaryDisabled: core.colors.grey400,
            onPrimary: core.colors.grey50,
            onPrimaryFaded: core.colors.grey400,
            onPrimaryDisabled: core.colors.grey600,
        },
        background: {
            page: core.colors.grey0,
            primary: core.colors.grey1200,
            primaryHover: core.colors.grey1100,
            primaryActive: core.colors.grey1000,
            primaryDisabled: core.colors.grey50,
            primaryFaded: core.colors.grey50,
            primaryFadedHover: core.colors.grey100,
            primaryFadedActive: core.colors.grey200,
            primaryFadedDisabled: core.colors.grey50,
            base: core.colors.grey0,
            baseHover: core.colors.grey50,
            baseActive: core.colors.grey100,
            baseDisabled: core.colors.grey0,
        },
        border: {
            neutral: core.colors.grey200,
            neutralHover: core.colors.grey300,
            neutralActive: core.colors.grey400,
        },        
    },
    typography: {
        fontFamily: core.typography.fontFamily,
        fontWeight: core.typography.fontWeight,
        fontSize: core.typography.fontSize,
        lineHeight: core.typography.lineHeight,
    },
    spacing: {
        spacingNone: core.size.size0,
        spacingXXS: core.size.size100,
        spacingXS: core.size.size150,
        spacingS: core.size.size200,
        spacingM: core.size.size300,
        spacingL: core.size.size400,
        spacingXL: core.size.size600,
        spacingXXL: core.size.size800,
    },
    borderRadius: {
        borderRadiusNone: core.size.size0,
        borderRadiusS: core.size.size50,
        borderRadiusM: core.size.size100,
        borderRadiusL: core.size.size150,
    },
};

export const darkTheme: Theme = {
    colors: {
        foreground: {
            primary: core.colors.grey50,
            primaryFaded: core.colors.grey400,
            primaryDisabled: core.colors.grey600,
            onPrimary: core.colors.grey1200,
            onPrimaryFaded: core.colors.grey600,
            onPrimaryDisabled: core.colors.grey400,
        },
        background: {
            page: core.colors.grey1200,
            primary: core.colors.grey50,
            primaryHover: core.colors.grey100,
            primaryActive: core.colors.grey200,
            primaryDisabled: core.colors.grey1100,
            primaryFaded: core.colors.grey1100,
            primaryFadedHover: core.colors.grey1000,
            primaryFadedActive: core.colors.grey900,
            primaryFadedDisabled: core.colors.grey1100,
            base: core.colors.grey1200,
            baseHover: core.colors.grey1100,
            baseActive: core.colors.grey1000,
            baseDisabled: core.colors.grey1200,
        },
        border: {
            neutral: core.colors.grey900,
            neutralHover: core.colors.grey800,
            neutralActive: core.colors.grey700,
        },      
    },
    typography: {
        fontFamily: core.typography.fontFamily,
        fontWeight: core.typography.fontWeight,
        fontSize: core.typography.fontSize,
        lineHeight: core.typography.lineHeight,
    },
    spacing: {
        spacingNone: core.size.size0,
        spacingXXS: core.size.size100,
        spacingXS: core.size.size150,
        spacingS: core.size.size200,
        spacingM: core.size.size300,
        spacingL: core.size.size400,
        spacingXL: core.size.size600,
        spacingXXL: core.size.size800,
    },
    borderRadius: {
        borderRadiusNone: core.size.size0,
        borderRadiusS: core.size.size50,
        borderRadiusM: core.size.size100,
        borderRadiusL: core.size.size150,
    },
};