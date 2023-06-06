import React from 'react';
import { Story, Meta } from '@storybook/react';
import Navbar from '../components/filter_button';


export default {
  title: 'filter_button',
  component: Navbar,
} as Meta;

const Template: Story = () => <Navbar />;

export const Default = Template.bind({});