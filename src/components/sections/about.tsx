"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { BoxReveal, BlurIn } from "../reveal-animations";
import Link from "next/link";
import React from "react";

const FloatingImage = ({ src, delay, className, size = 150 }: { src: string; delay: number; className?: string; size?: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{
      y: [0, -20, 0],
      opacity: 1
    }}
    transition={{
      y: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      },
      opacity: { duration: 1, delay: delay * 0.5 }
    }}
    className={cn("absolute rounded-xl overflow-hidden shadow-2xl border border-white/10 z-20 hidden md:block", className)}
    style={{ width: size, height: size * 1.3 }}
  >
    <Image
      src={src}
      alt="Floating"
      fill
      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
    />
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 overflow-hidden bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-16 lg:flex-row items-center lg:items-start relative">

          {/* Left Column: Sticky Title & Text */}
          <div className="w-full lg:w-1/2 z-10">
            <div className="top-[100px] sticky mb-12 lg:mb-0">
              <Link href={"#about"}>
                <BoxReveal width="100%">
                  <h2
                    className={cn(
                      "bg-clip-text text-5xl text-left text-transparent md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none",
                      "bg-gradient-to-b from-black/90 to-black/40",
                      "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/20 dark:bg-opacity-50"
                    )}
                  >
                    About <br /> Me
                  </h2>
                </BoxReveal>
              </Link>

              <div className="space-y-6 text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl font-light">
                <BoxReveal delay={0.2}>
                  <p>
                    I am <span className="text-black dark:text-white font-bold underline decoration-blue-500 decoration-4 underline-offset-8">Abdifatah</span>, a seasoned Frontend Developer dedicated to crafting exceptional digital experiences. My journey in tech is driven by a fusion of creativity and technical precision.
                  </p>
                </BoxReveal>

                <BoxReveal delay={0.4}>
                  <p>
                    Beyond the code, I am passionate about technology evangelism and public speaking. I thrive in environments where I can bridge the gap between complex software solutions and user-centric design.
                  </p>
                </BoxReveal>

                <BoxReveal delay={0.6}>
                  <p>
                    My experience spans from building scalable web applications to leading technical discussions, always with a focus on delivering high-performance, accessible, and visually stunning products.
                  </p>
                </BoxReveal>
              </div>
            </div>
          </div>

          {/* Right Column: Large Hero Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center z-10">
            <BlurIn delay={0.5} className="w-full max-w-[650px]">
              <div className="relative group overflow-hidden rounded-[2rem] border-8 border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-all duration-700 hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 z-10 flex items-end p-12">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-white text-4xl font-black italic tracking-tighter uppercase leading-none mb-2">Frontend  Developer</p>
                    <p className="text-blue-400 text-lg font-medium tracking-widest uppercase"> Founder of Gravity Tech Community</p>
                  </div>
                </div>
                <Image
                  src="/assets/3.jpg"
                  alt="Abdifatah tech expo winner"
                  width={1000}
                  height={1200}
                  className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  priority
                />
              </div>
            </BlurIn>
          </div>
        </div>

        {/* Floating Images Section Under */}
        <div className="relative w-full h-[600px] mt-20 pointer-events-none">
          <FloatingImage
            src="/assets/1.jpg"
            delay={0}
            className="left-[5%] top-10 -rotate-12 scale-125 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={280}
          />
          <FloatingImage
            src="/assets/4.jpg"
            delay={1.2}
            className="left-[35%] top-32 rotate-6 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={220}
          />
          <FloatingImage
            src="/assets/5.jpg"
            delay={2.5}
            className="left-[65%] top-12 -rotate-3 scale-110 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={240}
          />
          <FloatingImage
            src="/assets/8.jpg"
            delay={0.8}
            className="left-[20%] top-60 rotate-12 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={200}
          />
          <FloatingImage
            src="/assets/3.jpg"
            delay={1.8}
            className="left-[50%] top-[40%] -rotate-6 scale-90 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={180}
          />
          <FloatingImage
            src="/assets/13.jpg"
            delay={3.2}
            className="right-[5%] top-40 rotate-[15deg] hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={260}
          />
          <FloatingImage
            src="/assets/9.jpg"
            delay={0.5}
            className="left-[12%] top-[75%] rotate-6 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={210}
          />
          <FloatingImage
            src="/assets/11.jpg"
            delay={1.5}
            className="left-[42%] top-[68%] -rotate-12 scale-110 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={190}
          />
          <FloatingImage
            src="/assets/15.jpg"
            delay={2.1}
            className="right-[22%] top-[12%] rotate-12 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={230}
          />
          <FloatingImage
            src="/assets/12.jpg"
            delay={2.1}
            className="right-[22%] top-[12%] rotate-12 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={230}
          />
          <FloatingImage
            src="/assets/14.jpg"
            delay={2.1}
            className="right-[22%] top-[12%] rotate-12 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto"
            size={230}
          />

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
