"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Natal Solidário",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070",
    description:
      "Distribuição de presentes e cestas básicas para famílias carentes durante o período natalino.",
    tags: ["Natal", "Doações", "Família"],
  },
  {
    title: "Páscoa do Bem",
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=2070",
    description:
      "Celebração da Páscoa com distribuição de chocolates e atividades recreativas para crianças.",
    tags: ["Páscoa", "Crianças", "Recreação"],
  },
  {
    title: "Volta às Aulas",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070",
    description:
      "Doação de material escolar e uniformes para crianças em idade escolar.",
    tags: ["Educação", "Material Escolar", "Crianças"],
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça algumas das nossas principais iniciativas que impactam
            diretamente a vida de milhares de pessoas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:opacity-60 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
