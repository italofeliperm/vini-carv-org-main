"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { ImageModal } from "@/components/ui/image-modal";
import Image from "next/image";

const images = [
  {
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2071",
    title: "Distribuição de Alimentos",
    date: "Dezembro 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    title: "Natal Solidário",
    date: "Dezembro 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
    title: "Dia das Crianças",
    date: "Outubro 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070",
    title: "Páscoa Solidária",
    date: "Abril 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070",
    title: "Volta às Aulas",
    date: "Janeiro 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2071",
    title: "Oficina de Arte",
    date: "Setembro 2023",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Nossa Galeria
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Momentos especiais que marcam nossa história e o impacto em nossa
            comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:opacity-60 z-10" />
              <Image
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  {image.date && (
                    <p className="text-sm text-white/80">{image.date}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        image={selectedImage !== null ? images[selectedImage] : null}
      />
    </section>
  );
}
