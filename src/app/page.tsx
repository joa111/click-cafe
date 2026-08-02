
import { HeroSection } from "@/components/click-cafe/hero-section";
import { AboutSection } from "@/components/click-cafe/about-section";
import { MenuSection } from "@/components/click-cafe/menu-section";
import { GallerySection } from "@/components/click-cafe/gallery-section";
import { ContactSection } from "@/components/click-cafe/contact-section";
import { Footer } from "@/components/click-cafe/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
