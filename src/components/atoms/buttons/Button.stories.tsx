import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,

  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: 'ariaLabel',
  label: 'label',
  width: '4rem',
};
