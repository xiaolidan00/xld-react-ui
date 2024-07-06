import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

//Doc默认配置
const meta = {
  title: 'Normal/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  //输入类型配置
  argTypes: {
    color: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
//覆盖属性值
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
//点击
export const OnClickBtn: Story = {
  args: {
    onClick: () => alert('you click the Button'),
    children: 'Button'
  }
};
