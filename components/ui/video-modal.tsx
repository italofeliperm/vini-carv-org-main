"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { usePreventScroll } from "@/hooks/usePreventScroll";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  embedUrl: string;
}

export function VideoModal({ isOpen, onClose, embedUrl }: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  usePreventScroll(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-black/80 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="min-h-screen px-4 text-center flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-[400px] bg-white rounded-lg overflow-hidden modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-2 right-2 z-10 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
              >
                <X className="h-6 w-6 text-white" strokeWidth={2.5} />
              </button>
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 z-10 transition-opacity duration-150 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                </div>
                <iframe
                  src={embedUrl}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-150 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  onLoad={() => {
                    setTimeout(() => setIsLoading(false), 200);
                  }}

                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 