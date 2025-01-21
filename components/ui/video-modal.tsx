"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { usePreventScroll } from "@/hooks/usePreventScroll";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  embedUrl: string;
}

export function VideoModal({ isOpen, onClose, embedUrl }: VideoModalProps) {

  usePreventScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/80"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative w-full max-w-[400px] bg-white rounded-lg overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
            >
              <X className="h-6 w-6 text-white" strokeWidth={2.5} />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe

                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 