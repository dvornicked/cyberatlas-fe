import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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
Primary.play = async ({ canvasElement, args }) => {
	const canvas = within(canvasElement)
	const button = canvas.getByRole('button')
	expect(button).toHaveTextContent(args.children as string)
}
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
