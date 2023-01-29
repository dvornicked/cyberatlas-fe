import { HTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'dark' | 'outline'
	className?: string
	children: ReactNode
}
