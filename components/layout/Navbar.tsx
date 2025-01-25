"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { motion, AnimatePresence } from "framer-motion";
import { DonationModal } from "@/components/ui/donation-modal";
import { VolunteerModal } from "@/components/ui/volunteer-modal";
import { usePreventScroll } from "@/hooks/usePreventScroll";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { title: "Início", href: "/#home" },
  { title: "Sobre", href: "/#about" },
  { title: "Impacto", href: "/#impact" },
  { title: "Projetos", href: "/#projects" },
  { title: "Galeria", href: "/#gallery" },
  { title: "Como Ajudar", href: "/#donate" },
];

const scrollToSection = (
  href: string,
  setIsOpen?: (isOpen: boolean) => void,
  router?: any
) => {
  const isHome = window.location.pathname === "/";
  const sectionId = href.replace("/#", "");

  const scrollToElement = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Increased offset to account for padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (setIsOpen) {
        setIsOpen(false);
      }
    }
  };

  if (!isHome) {
    router?.push("/").then(() => {
      setTimeout(scrollToElement, 100);
    });
  } else {
    // Use RAF to ensure DOM is ready
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToElement);
    });
  }
};




export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  usePreventScroll(isMenuOpen);

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        scrollToSection(hash, undefined, router);
      }, 500);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMenuOpen]);


  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-110">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between relative z-110">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("/#home", undefined, router);
          }}
          className="text-xl font-bold text-blue-900 cursor-pointer"
        >
          AVC
        </a>

        {/* Links da navbar com efeito de sublinhado */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection(item.href, undefined, router);
              }}
              className="relative text-gray-600 hover:text-blue-600 transition-colors group py-1"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-90 p-2 hover:bg-blue-50 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-blue-900" />
          ) : (
            <Menu size={24} className="text-blue-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 bg-white z-[100] md:hidden"
          >
            <div className="flex flex-col h-[100dvh] pt-20 px-4">
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    className="relative inline-block text-center"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection(item.href, setIsMenuOpen, router);
                      }}
                      className="relative text-2xl text-blue-900 hover:text-blue-600 transition-colors group inline-block py-1"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>

                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="space-y-4 pt-8"
                >
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 text-lg py-6 transition-colors"
                    onClick={() => {
                      setIsDonationModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Doe Agora
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg py-6 transition-colors"
                    onClick={() => {
                      setIsVolunteerModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Seja Voluntário
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </header>
  );
}
