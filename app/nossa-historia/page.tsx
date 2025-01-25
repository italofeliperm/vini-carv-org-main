"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import { DonationModal } from "@/components/ui/donation-modal";
import { VolunteerModal } from "@/components/ui/volunteer-modal";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FloatingButton } from "@/components/ui/floating-button";
import { Footer } from "@/components/layout/Footer";
import { useRouter, usePathname } from "next/navigation";

const historicalPhotos = [
  {
    url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
    year: "2018",
    description: "Primeira ação social realizada",
    title: "O Início da Jornada",
  },
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    year: "2019",
    description: "Início do projeto Alimentação Solidária",
    title: "Expandindo Horizontes",
  },
  {
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    year: "2020",
    description: "Expansão para novas comunidades",
    title: "Crescimento e Impacto",
  },
  {
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    year: "2021",
    description: "Inauguração da sede própria",
    title: "Nossa Nova Casa",
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    year: "2022",
    description: "Lançamento do programa educacional",
    title: "Educação Transformadora",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Fundação",
    description: "Início das atividades com distribuição de alimentos",
    impact: "50 famílias atendidas",
  },
  {
    year: "2019",
    title: "Primeiro Projeto Estruturado",
    description: "Lançamento do programa Alimentação Solidária",
    impact: "200 famílias beneficiadas",
  },
  {
    year: "2020",
    title: "Expansão Territorial",
    description: "Alcance de novas comunidades e parcerias",
    impact: "500 famílias impactadas",
  },
  {
    year: "2021",
    title: "Sede Própria",
    description: "Inauguração do espaço físico",
    impact: "1000 atendimentos mensais",
  },
  {
    year: "2022",
    title: "Educação e Desenvolvimento",
    description: "Início dos programas educacionais",
    impact: "200 crianças beneficiadas",
  },
  {
    year: "2023",
    title: "Consolidação",
    description: "Reconhecimento e ampliação dos projetos",
    impact: "2000 famílias atendidas",
  },
];

export default function NossaHistoria() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    router.replace('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = -15;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historicalPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-900 h-[60vh] md:h-[70vh] relative flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80")',
            filter: "grayscale(50%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Nossa História
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Conheça a jornada da Associação Vinícius Carvalheido e como nasceu
              nosso compromisso com a transformação social.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Como Tudo Começou
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Em 2018, um grupo de amigos unidos pelo desejo de fazer a
                  diferença começou uma jornada que transformaria não apenas
                  suas vidas, mas a de centenas de famílias em situação de
                  vulnerabilidade social.
                </p>
                <p className="text-lg">
                  O que começou com pequenas ações de distribuição de alimentos
                  em comunidades carentes logo se transformou em um movimento
                  organizado. A dedicação e o comprometimento do grupo chamou a
                  atenção de outros voluntários e parceiros, permitindo a
                  expansão das atividades.
                </p>
                <p className="text-lg">
                  Com o crescimento das ações e o aumento do número de famílias
                  atendidas, surgiu a necessidade de formalizar o trabalho.
                  Assim nasceu oficialmente a Associação Vinícius Carvalheido,
                  com a missão de promover transformação social através da
                  solidariedade e do trabalho voluntário.
                </p>
              </div>
            </motion.div>

            {/* Como Ajudamos e Ações */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  {/* Como Ajudamos */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                  >
                    <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                      Como Ajudamos?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          title: "Doações de Alimentos e Materiais",
                          description:
                            "Coletamos e distribuímos alimentos, roupas e materiais de higiene para famílias em necessidade.",
                          icon: "🥫",
                        },
                        {
                          title: "Apoio Psicológico",
                          description:
                            "Oferecemos suporte emocional para aqueles que passam por situações difíceis, ajudando-os a encontrar força e esperança.",
                          icon: "💚",
                        },
                        {
                          title: "Educação e Capacitação",
                          description:
                            "Promovemos oficinas e cursos que ajudam as pessoas a se qualificarem para o mercado de trabalho.",
                          icon: "📚",
                        },
                        {
                          title: "Eventos Solidários",
                          description:
                            "Organizamos eventos comunitários para levantar fundos e conscientizar sobre a importância da solidariedade.",
                          icon: "🤝",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Ações */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16"
                  >
                    <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                      Ações
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Campanhas de Arrecadação",
                          description:
                            "Realizamos campanhas sazonais para coletar alimentos, roupas e brinquedos para distribuir a famílias carentes.",
                          icon: "📦",
                        },
                        {
                          title: "Projetos Educacionais",
                          description:
                            "Implementamos projetos de alfabetização e reforço escolar para crianças e adultos.",
                          icon: "✏️",
                        },
                        {
                          title: "Parcerias",
                          description:
                            "Trabalhamos em conjunto com outras organizações e empresas para ampliar nosso alcance e impactar positivamente a comunidade.",
                          icon: "🤝",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500"
                        >
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Timeline */}
            {/* <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                Nossa Linha do Tempo
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full font-bold">
                          {milestone.year}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-blue-900">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                          <p className="text-blue-600 font-semibold">
                            {milestone.impact}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Photo Gallery */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                Momentos Marcantes
              </h2>
              <div className="relative aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden shadow-xl">
                {historicalPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      x:
                        currentSlide === index
                          ? 0
                          : currentSlide > index
                            ? -100
                            : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 ${currentSlide === index ? "z-10" : "z-0"
                      }`}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.description}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-white/80 text-lg mb-2">{photo.year}</p>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {photo.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {photo.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Indicadores de slide */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                  {historicalPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/70"
                        }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Faça Parte Dessa História
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Junte-se a nós nessa missão de transformar vidas e construir um
                futuro melhor para nossa comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-colors"
                  onClick={() => setIsVolunteerModalOpen(true)}
                >
                  Seja Voluntário <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  onClick={() => setIsDonationModalOpen(true)}
                >
                  Faça uma Doação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <FloatingButton />

      {/* Modais */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </main>
  );
}
