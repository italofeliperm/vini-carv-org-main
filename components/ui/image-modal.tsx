"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePreventScroll } from "@/hooks/usePreventScroll";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    url: string;
    title: string;
    date: string;
  } | null;
}

export function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  usePreventScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-black rounded-xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Fechar imagem"
            >
              <X size={24} />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full">
              <Image
                src={image.url}
                alt={image.title}
                className="w-full h-full object-contain"
                fill
                sizes="100vw"
                priority
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {image.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base">{image.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
