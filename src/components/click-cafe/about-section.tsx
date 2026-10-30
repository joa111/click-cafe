import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Coffee } from "lucide-react";

const aboutImage = PlaceHolderImages.find(image => image.id === "about-illustration");

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div 
            className="relative flex items-center justify-center animate-slide-in-left group"
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute -inset-4 md:-inset-8 bg-primary/10 rounded-3xl transform -rotate-6" />
            <div className="relative w-full max-w-md mx-auto">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                />
              )}
            </div>
          </div>
          <div 
            className="space-y-6 animate-slide-in-right"
            style={{ animationDelay: '200ms' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Brewing Passion in Every Cup
            </h2>
            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-muted-foreground/30" />
              <Coffee className="text-primary h-5 w-5" />
              <Coffee className="text-primary h-5 w-5" />
              <div className="h-px flex-1 bg-muted-foreground/30" />
            </div>
            <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg">
              Click Cafe was born from a passion for creating a cozy space where community and coffee come together. We source the finest beans, and our baristas pour their hearts into every cup. 
            </p>
            <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg">
              Come relax, connect, and become part of our story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
