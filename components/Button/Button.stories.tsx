import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
	title: 'Example/Button',
	component: Button,
	args: {
		children: 'Button',
	},
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['primary', 'dark', 'outline'],
			},
		},
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
}

export const Dark = Template.bind({})
Dark.args = {
	variant: 'dark',
}

export const Outline = Template.bind({})
Outline.args = {
	variant: 'outline',
}
