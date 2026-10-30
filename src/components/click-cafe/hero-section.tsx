import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Coffee } from "lucide-react";
import { Header } from "./header";

const heroImage = PlaceHolderImages.find(image => image.id === "hero-background");

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <Header />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-fade-in-up">
          Welcome to Click Café
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 animate-fade-in-up [animation-delay:300ms]">
          Your daily dose of handcrafted coffee
        </p>
        <div className="animate-fade-in-up [animation-delay:600ms]">
          <Button asChild size="lg" className="transition-transform duration-300 hover:scale-110">
            <Link href="#menu">See Our Menu</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce-slow" aria-hidden="true">
        <Coffee className="h-8 w-8 text-white/80" />
      </div>
    </section>
  );
}
