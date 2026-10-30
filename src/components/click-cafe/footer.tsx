import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <Logo className="h-16 w-16" />
        <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Click Cafe. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">Designed with ❤️ for coffee lovers</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors duration-300 transform hover:scale-125">
            <a href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors duration-300 transform hover:scale-125">
            <a href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors duration-300 transform hover:scale-125">
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
