"use client";

import { motion } from "framer-motion";
import { Users2, GiftIcon, Home, Heart } from "lucide-react";

const stats = [
  { number: "5000+", label: "Pessoas Impactadas", icon: Users2 },
  { number: "20+", label: "Comunidades Atendidas", icon: Home },
  { number: "10000+", label: "Doações Realizadas", icon: GiftIcon },
  { number: "200+", label: "Voluntários Ativos", icon: Heart },
];

export default function Impact() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}