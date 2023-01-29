import Button from '@/components/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
	it('should render correctly', () => {
		render(<Button>Click me</Button>)

		const button = screen.getByRole('button')

		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Click me')
	})
})
