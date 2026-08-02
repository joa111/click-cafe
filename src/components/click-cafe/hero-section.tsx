'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import { Header } from "./header";

const heroImage = PlaceHolderImages.find(image => image.id === "hero-background");

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const getOpacity = () => {
    if (!isClient) return 1;
    const screenHeight = window.innerHeight;
    return 1 - Math.min(offsetY / (screenHeight * 0.5), 1);
  };
  
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <Header />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
          style={{ transform: isClient ? `translateY(${offsetY * 0.5}px)` : 'none' }}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div 
        className="relative z-10 p-4 space-y-6 transition-opacity duration-500"
        style={{ opacity: getOpacity() }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-fade-in-up">
          Welcome to Click Café
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Your daily dose of handcrafted coffee
        </p>
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-110">
              <Link href="#menu">See Our Menu</Link>
            </Button>
        </div>
      </div>
       <div className="absolute bottom-10 animate-bounce-slow">
            <Coffee className="h-8 w-8 text-white/80" />
        </div>
    </section>
  );
}
