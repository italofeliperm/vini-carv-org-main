'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'
import { MobileMenuProvider } from '@/contexts/MobileMenuContext'

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<MobileMenuProvider>
				{children}
			</MobileMenuProvider>
		</NextThemesProvider>
	)
}