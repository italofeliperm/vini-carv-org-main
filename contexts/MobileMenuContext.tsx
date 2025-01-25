"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface MobileMenuContextType {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) {
			// Clean up any scroll-related styles when menu closes
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			document.body.style.overflow = '';
			document.body.classList.remove('modal-open');
		}
	}, [isMenuOpen]);

	return (
		<MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			{children}
		</MobileMenuContext.Provider>
	);
}

export function useMobileMenu() {
	const context = useContext(MobileMenuContext);
	if (context === undefined) {
		throw new Error("useMobileMenu must be used within a MobileMenuProvider");
	}
	return context;
}