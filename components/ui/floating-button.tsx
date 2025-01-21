"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5598985425844";
    const message =
      "Olá! Gostaria de saber mais sobre a Associação Vinícius Carvalheido.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botão de voltar ao topo quando estiver próximo ao footer
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Mostrar quando estiver nos últimos 20% da página
      const threshold = documentHeight - windowHeight * 1.2;
      setShowScrollTop(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={showScrollTop ? scrollToTop : handleWhatsAppClick}
        className={`fixed bottom-2 sm:bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
        showScrollTop
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-green-500 hover:bg-green-600"
        }`}
      aria-label={showScrollTop ? "Voltar ao topo" : "Contato via WhatsApp"}
    >
      {showScrollTop ? (
        <ArrowUp className="w-6 h-6 text-white" />
      ) : (
        <MessageCircle className="w-6 h-6 text-white" />
      )}
    </motion.button>
  );
}
