"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Impact from "@/components/sections/Impact";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import Donation from "@/components/sections/Donation";
import Navbar from "@/components/layout/Navbar";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingButton } from "@/components/ui/floating-button";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <div id="impact">
        <Impact />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Gallery />
      <Donation />
      <Footer />
      <FloatingButton />
    </main>
  );
}
