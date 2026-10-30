import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section: Contact Info */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="space-y-8 animate-fade-in-up text-center max-w-xl" style={{ animationDelay: '200ms' }}>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">Let&apos;s Talk Coffee</h2>
              <p className="max-w-[500px] mx-auto text-muted-foreground md:text-lg">
                Have a question, a suggestion, or just want to chat about coffee? We&apos;re all ears. Drop us a line, and we&apos;ll get back to you as soon as we&apos;re done with our current brew.
              </p>
              <div className="pt-4 space-y-3 text-foreground flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a href="mailto:hello@clickcafe.com" className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>hello@clickcafe.com</span>
                </a>
                <a href="tel:1234567890" className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>(123) 456-7890</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Map and Location */}
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <p className="text-primary font-semibold tracking-wide">Our Location</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">Come Say Hello</h2>
          </div>
          
          {/* Map */}
          <div 
            className="aspect-video w-full max-w-4xl mt-8 overflow-hidden rounded-2xl shadow-lg animate-fade-in-up" 
            style={{ animationDelay: '800ms' }}
          >
            <iframe
              title="Click Cafe Google Maps Location"
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.632533814427!2d91.879038276063!3d25.58385807746355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e3579ec8f67%3A0x18c49be01c50d3d5!2sClick%20Cafe!5e0!3m2!1sen!2sin!4v1717865202867!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <h3 className="font-semibold text-xl mb-2">Headquarters</h3>
            <p className="text-muted-foreground text-lg">Click Cafe</p>
            <p className="text-muted-foreground text-lg">Laban, Last Stop, Shillong</p>
            <p className="text-muted-foreground text-lg">Meghalaya 793004</p>
            <p className="text-muted-foreground text-lg">India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
