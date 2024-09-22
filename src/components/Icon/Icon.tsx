import React from 'react';
import styled from 'styled-components';

interface IconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: string;
  color?: string;
}

const StyledIcon = styled.div<{ size: string; color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  color: ${(props) => props.color};
  svg {
    width: 100%;
    height: 100%;
    fill: none;
  }
`;

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = '1rem', color }) => {
  return (
    <StyledIcon size={size} color={color}>
      <IconComponent />
    </StyledIcon>
  );
};

export default Icon;
