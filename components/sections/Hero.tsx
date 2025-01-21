"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { VolunteerModal } from "@/components/ui/volunteer-modal";
import { DonationModal } from "@/components/ui/donation-modal";

export default function Hero() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  return (
    <section className="relative h-screen text-white overflow-hidden max-w-[100vw]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-600/40" />

      <div className="relative container mx-auto px-6 md:px-8 h-full flex items-center justify-center max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full text-center"
        >
          <span className="text-blue-100 text-lg md:text-xl mb-6 block font-medium">
            Associação Vinícius Carvalheido
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-white drop-shadow-lg">
            Transformando Sonhos em Realidade
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-12 text-white/95 max-w-2xl mx-auto drop-shadow">
            Desde 2018, a Associação Vinícius Carvalheido tem se dedicado a
            levar esperança e dignidade para famílias em situação de
            vulnerabilidade social, através de ações que transformam vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto text-base sm:text-lg px-8 py-5 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 rounded-md shadow-md"
              onClick={() => setIsDonationModalOpen(true)}
              onMouseEnter={() => setIsHeartFilled(true)}
              onMouseLeave={() => setIsHeartFilled(false)}
            >
              <span className="inline-flex items-center gap-2">
                Faça uma Doação
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ease-in-out ${
                    isHeartFilled ? "text-red-500" : ""
                  }`}
                  fill={isHeartFilled ? "currentColor" : "none"}
                  strokeWidth={2}
                />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border border-white hover:bg-blue-600 hover:border-blue-600 hover:text-white w-full sm:w-auto text-base sm:text-lg px-8 py-5 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 rounded-md shadow-md"
              onClick={() => setIsVolunteerModalOpen(true)}
            >
              <span className="inline-flex items-center gap-2">
                Seja Voluntário
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </section>
  );
}
