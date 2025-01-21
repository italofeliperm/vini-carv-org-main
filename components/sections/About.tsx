"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoModal } from "@/components/ui/video-modal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function About() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 transition-all duration-500 ease-in-out opacity-90 group-hover:opacity-60" />
            <Image
              src="/assets/who-we-are.png"
              alt="Sobre nós"
              className="w-full h-full object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <Button
              size="lg"
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group/button shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1.5" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4 text-white transition-all duration-500 ease-in-out opacity-90 group-hover:opacity-100 group-hover:transform group-hover:translate-y-[-4px]">
              <p className="text-lg font-semibold">Assista nossa história</p>
              <p className="text-sm opacity-80">
                Conheça mais sobre nosso trabalho
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Nossa História
            </h2>
            <div className="space-y-4 text-gray-600 relative">
              <div className="relative">
                <div className="space-y-4">
                  <p>
                    A Associação Vinícius Carvalheido nasceu em 2018 do sonho de
                    um grupo de amigos que acreditava no poder da transformação
                    social através da solidariedade e do trabalho voluntário.
                  </p>
                  <p>
                    O que começou com pequenas ações pontuais de distribuição de
                    alimentos em comunidades carentes, rapidamente cresceu e se
                    transformou em um movimento organizado que hoje impacta a
                    vida de centenas de famílias.
                  </p>
                  <p>
                    Nossa missão é levar esperança e dignidade através de
                    projetos sociais que abrangem educação, alimentação, saúde e
                    desenvolvimento comunitário. Ao longo dos anos,
                    desenvolvemos diversos programas e iniciativas que têm
                    transformado vidas e comunidades inteiras.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
              </div>

              <div className="pt-4 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white group"
                >
                  <Link href="/nossa-historia">
                    Leia Nossa História Completa
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

        <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        embedUrl={`https://www.instagram.com/reel/CmbyM8BrKhQ/embed`}
        />

    </section>
  );
}
