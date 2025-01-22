"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const menuItems = [
  {
    title: "Suporte",
    items: [
      {
        label: "Fale conosco",
        href: "https://wa.me/5598985425844?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Associação.",
        isExternal: true,
      },
      {
        label: "Ajuda",
        href: "mailto:fviniciuscarvalheido@hotmail.com",
        isExternal: true,
      },
    ],
  },
];

const socialLinks = {
  instagram: "https://www.instagram.com/associacaoviniciusc/"
  // facebook: "https://facebook.com/avc",
  // youtube: "https://youtube.com/@avc",
};

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-blue-900">
              AVC
            </Link>
            <p className="text-sm">
              Transformando vidas através da solidariedade. Juntos construímos
              uma sociedade mais justa, levando esperança para quem mais
              precisa.
            </p>
            <div className="flex gap-4">
              <Link
                href={socialLinks.instagram}
                target="_blank"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
              </Link>
              {/* <Link
                href={socialLinks.facebook}
                target="_blank"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
              </Link>
              <Link
                href={socialLinks.youtube}
                target="_blank"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform"
              >
                <Youtube className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
              </Link> */}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {menuItems.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        className="text-sm hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                      >
                        {item.label}
                        {item.href.includes("mailto") && (
                          <Mail className="w-4 h-4" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contato Direto */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-sm">fviniciuscarvalheido@hotmail.com</li>
                <li className="text-sm">(98) 98542-5844</li>
                <li className="text-sm">São Luís - MA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright e Créditos */}
        <div className="mt-8 text-center space-y-2">
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mx-auto">
          &copy; 2025 Associação Vinícius Carvalheido. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
          Site criado por{" "}
          <Link
            href="https://gabrielanselmoa.vercel.app/"
            target="_blank"
            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            Gabriel Anselmo
          </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
