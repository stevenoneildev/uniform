import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button/Button';

export default {
    title: 'Primitives/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['Primary', 'Secondary', 'Tertiary'],
        },
        size: {
            control: 'select',
            options: ['Large', 'Medium'],
        },
        label: {
            control: 'text',
            defaultValue: 'Button'
        },
        hasLeadingIcon: {
            control: 'boolean',
            defaultValue: false,
        },
        hasTrailingIcon: {
            control: 'boolean',
            defaultValue: false,
        },
        isStretched: {
            control: 'boolean',
            defaultValue: false,
        },
        isDisabled: {
            control: 'boolean',
            defaultValue: false
        },
    }
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => (
    <ThemeProvider theme={lightTheme}>
      <Button {...args} />
    </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'Primary',
  size: 'Large',
  label: 'Button',
  disabled: false,
};
