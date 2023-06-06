import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/ok_button';

const meta: Meta<typeof Button> = {
  title: 'ok_button',
  component: Button,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Button>;

//exporting primary varient of button
export const Primary: Story = {

}