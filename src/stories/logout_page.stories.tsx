import React from 'react';
import { Meta, Story } from '@storybook/react';
import Logout_page from '../components/logout_page';

export default {
  title: 'logout_page',
  component: Logout_page,
} as Meta;

const Template: Story = (args) => <Logout_page {...args} />;

export const Default = Template.bind({});
Default.args = {};
