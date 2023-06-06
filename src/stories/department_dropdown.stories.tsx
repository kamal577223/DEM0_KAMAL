import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Department_staff from '../components/department_dropdown';

export default {
  title: 'Department_Dropdown',
  component: Department_staff,
};

const Template: Story = (args) => {
  const [selected, setSelected] = useState(args.initialSelected);
  const [query, setQuery] = useState('');

  return (
    <Department_staff
      {...args}
      selected={selected}
      setSelected={setSelected}
      query={query}
      setQuery={setQuery}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  initialSelected: { id: 1, name: 'Computer Science' },
};
