import React from "react"
import styled from "styled-components"
import { core } from "../../theme/core";
import Icon from "../Icon/Icon";

type ButtonVariant = "Primary" | "Secondary" | "Tertiary";
type ButtonSize = "Medium" | "Large";

export type ButtonProps = {
    variant: ButtonVariant;
    size: ButtonSize;
    label: string;
    leadingIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    trailingIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    stretch?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
};

// Add aria label

const StyledButton = styled.button<ButtonProps>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-size: ${({ theme, size }) => {
        switch (size) {
            case "Medium":
                return theme.typography.fontSize.bodyS;
            case "Large":
                return theme.typography.fontSize.bodyM;
        }
    }};
    line-height: 1;
    color: ${({ theme, variant }) => {
        switch (variant) {
            case "Primary":
                return theme.colors.foreground.onPrimary;
            case "Secondary":
                return theme.colors.foreground.primary;
            case "Tertiary":
                return theme.colors.foreground.primary;
        }
    }};
    background-color: ${({ theme, variant }) => {
        switch (variant) {
            case "Primary":
                return theme.colors.background.primary;
            case "Secondary":
                return theme.colors.background.primaryFaded;
            case "Tertiary":
                return theme.colors.background.base;
        }
    }};
    height: ${({ theme, size }) => {
        switch (size) {
            case "Medium":
                return core.size.size400;
            case "Large":
                return core.size.size500;
        }
    }};    
    padding-left: ${({ theme, size }) => {
        switch (size) {
            case "Medium":
                return theme.spacing.spacingXS;
            case "Large":
                return theme.spacing.spacingS;
        }
    }};
    padding-right: ${({ theme, size }) => {
        switch (size) {
            case "Medium":
                return theme.spacing.spacingXS;
            case "Large":
                return theme.spacing.spacingS;
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme, size }) => {
        switch (size) {
            case "Medium":
                return theme.spacing.spacingXXS;
            case "Large":
                return theme.spacing.spacingXS;
        }
    }};
    width: ${({ stretch }) => (stretch ? '100%' : 'auto')};
    border: ${({ theme, variant }) => {
        switch (variant) {
            case "Primary":
                return "none";
            case "Secondary":
                return `1px solid ${theme.colors.border.neutral}`;
            case "Tertiary":
                return "none";
        }
    }};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusM};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return theme.colors.background.primaryHover;
                case "Secondary":
                    return theme.colors.background.primaryFadedHover;
                case "Tertiary":
                    return theme.colors.background.baseHover;
            }
        }};
        border: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return "none";
                case "Secondary":
                    return `1px solid ${theme.colors.border.neutralHover}`;
                case "Tertiary":
                    return "none";
            }
        }};
    };
    &:active {
        background-color: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return theme.colors.background.primaryActive;
                case "Secondary":
                    return theme.colors.background.primaryFadedActive;
                case "Tertiary":
                    return theme.colors.background.baseActive;
            }
        }};
        border: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return "none";
                case "Secondary":
                    return `1px solid ${theme.colors.border.neutralActive}`;
                case "Tertiary":
                    return "none";
            }
        }};
    };
    &:disabled {
        color: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return theme.colors.foreground.primaryDisabled;
                case "Secondary":
                    return theme.colors.foreground.primaryDisabled;
                case "Tertiary":
                    return theme.colors.foreground.primaryDisabled;
            }
        }};
        background-color: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return theme.colors.background.primaryDisabled;
                case "Secondary":
                    return theme.colors.background.primaryFadedDisabled;
                case "Tertiary":
                    return theme.colors.background.baseDisabled;
            }
        }};
        border: ${({ theme, variant }) => {
            switch (variant) {
                case "Primary":
                    return "none";
                case "Secondary":
                    return "none";
                case "Tertiary":
                    return "none";
            }
        }};
        cursor: not-allowed;
    }
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
`

const Button: React.FC<ButtonProps> = ({
    variant,
    size,
    label,
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    stretch = false,
    disabled = false,
    onClick,
    style,
}) => {
    const iconSize = size === "Large" ? "20px" : "16px";
    return (
        <StyledButton
            variant={variant}
            size={size}
            label={label}
            stretch={stretch}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            {LeadingIcon && <Icon icon={LeadingIcon} size={iconSize} />}
            {label}
            {TrailingIcon && <Icon icon={TrailingIcon} size={iconSize} />}
        </StyledButton>
    )
};

export default Button;