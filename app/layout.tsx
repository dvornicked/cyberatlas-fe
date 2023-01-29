import { Roboto } from '@next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body className={`bg-light text-dark ${roboto.className}`}>
				{children}
			</body>
		</html>
	)
}
