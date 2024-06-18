import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Normal/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'color' }
  }
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: action('on-click') }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    styleType: 'primary',
    children: 'Button'
  }
};

export const Info: Story = {
  args: {
    styleType: 'info',
    children: 'Button'
  }
};

export const Color: Story = {
  args: {
    styleType: 'primary',
    color: 'red',
    children: 'Button'
  }
};
export const OnClickBtn: Story = {
  args: {
    onClick: () => alert('you click the Button'),

    children: 'Button'
  }
};
