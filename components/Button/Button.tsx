import { ButtonProps } from '@/components/Button/Button.props'
import { forwardRef } from 'react'

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ variant, className, children, ...props },
	ref,
) {
	const variants = {
		primary: 'bg-primary text-white hover:bg-secondary hover:text-dark',
		dark: 'bg-dark text-white hover:bg-secondary hover:text-dark',
		outline:
			'border border-primary text-primary hover:bg-primary hover:text-white',
	}

	return (
		<button
			ref={ref}
			{...props}
			className={`rounded-lg py-2 px-3 text-white transition duration-200 ease-in-out
			 ${variants[variant || 'primary']} ${className}`}>
			{children}
		</button>
	)
})
