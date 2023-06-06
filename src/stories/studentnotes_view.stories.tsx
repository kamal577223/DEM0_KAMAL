import React from 'react';
import type { Meta, Story } from '@storybook/react';

import RectangleFrame from '../components/studentnotes_view';

export default {
  title: 'RectangleFrame',
  component: RectangleFrame,
} as Meta;

const Template: Story = (args) => <RectangleFrame {...args} />;

export const Default = Template.bind({});
Default.args = {};
