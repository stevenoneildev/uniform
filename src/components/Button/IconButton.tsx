import React from "react";
import styled from "styled-components";
import { core } from "../../theme/core";
import Icon from "../Icon/Icon";

type IconButtonVariant = "Primary" | "Secondary" | "Tertiary";
type IconButtonSize = "Medium" | "Large";

export type IconButtonProps = {
  variant: IconButtonVariant;
  size: IconButtonSize;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const StyledIconButton = styled.button<Omit<IconButtonProps, "icon">>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case "Medium":
        return theme.typography.fontSize.bodyS;
      case "Large":
        return theme.typography.fontSize.bodyM;
    }
  }};
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
  height: ${({ theme, size }) => {
    switch (size) {
      case "Medium":
        return core.size.size400;
      case "Large":
        return core.size.size500;
    }
  }};
  width: ${({ theme, size }) => {
    switch (size) {
      case "Medium":
        return core.size.size400;
      case "Large":
        return core.size.size500;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
  
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
  }
  
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
`;

const IconButton: React.FC<IconButtonProps> = ({
  variant,
  size,
  icon: IconComponent,
  disabled = false,
  onClick,
  style,
}) => {
  const iconSize = size === "Large" ? "20px" : "16px";
  return (
    <StyledIconButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      <Icon icon={IconComponent} size={iconSize} /> {/* Single icon */}
    </StyledIconButton>
  );
};

export default IconButton;