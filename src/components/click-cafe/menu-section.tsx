'use client';

import Image from "next/image";
import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Coffee, Croissant, Dessert, CakeSlice } from 'lucide-react';
import { cn } from "@/lib/utils";

const menuData = {
  "Specialty Coffee": [
    { id: "menu-espresso", name: "Espresso", price: "3.00", description: "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.", icon: Coffee },
    { id: "menu-latte", name: "Latte", price: "4.50", description: "A coffee drink made with espresso and steamed milk, topped with a light layer of foam.", icon: Coffee },
    { id: "menu-cappuccino", name: "Cappuccino", price: "4.00", description: "An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.", icon: Coffee },
  ],
  "Delicious Pastries": [
    { id: "menu-croissant", name: "Butter Croissant", price: "3.50", description: "A flaky, buttery, and crescent-shaped pastry, perfect with any coffee.", icon: Croissant },
    { id: "menu-muffin", name: "Blueberry Muffin", price: "3.00", description: "A soft and moist muffin bursting with fresh blueberries, a classic favorite.", icon: Dessert },
    { id: "menu-cake", name: "Chocolate Cake", price: "5.00", description: "A rich and decadent slice of chocolate cake, for when you need a sweet treat.", icon: CakeSlice },
  ],
};

type MenuItem = typeof menuData["Specialty Coffee"][0];

export function MenuSection() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };
  
  const handleModalClose = () => {
    setSelectedItem(null);
  };

  const selectedImage = PlaceHolderImages.find(img => img.id === selectedItem?.id);

  return (
    <section id="menu" className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className="space-y-4 text-center animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Menu
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Handcrafted beverages and freshly baked goods to delight your senses. Click on an item to see more.
          </p>
        </div>

        <div className="flex items-center gap-4 max-w-sm mx-auto my-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="h-px flex-1 bg-muted-foreground/30" />
          <Coffee className="text-primary h-6 w-6" />
          <div className="h-px flex-1 bg-muted-foreground/30" />
        </div>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          {Object.entries(menuData).map(([category, items], categoryIndex) => (
            <div key={category} className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-8 md:mb-12 text-center animate-fade-in-up" style={{ animationDelay: `${600 + categoryIndex * 400}ms` }}>
                {category}
              </h3>
              <div className="grid grid-cols-3 gap-y-10 gap-x-6 sm:gap-y-12 sm:gap-x-8">
                {items.map((item, itemIndex) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col items-center gap-3 sm:gap-4 cursor-pointer group animate-fade-in-up"
                    onClick={() => handleItemClick(item)}
                    style={{ animationDelay: `${700 + categoryIndex * 400 + itemIndex * 100}ms` }}
                  >
                    <div className={cn(
                      "flex items-center justify-center p-3 sm:p-4 rounded-full bg-muted transition-all duration-300 transform group-hover:scale-110 group-hover:bg-primary/20",
                    )}>
                      <item.icon className={cn(
                        "h-10 w-10 sm:h-12 md:h-14 sm:w-12 md:w-14 text-muted-foreground transition-colors duration-300 group-hover:text-primary",
                      )} />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(isOpen) => !isOpen && handleModalClose()}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col">
              {selectedImage && (
                <div className="relative w-full h-48 sm:h-64">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <DialogHeader className="p-6 pb-2">
                <DialogTitle className="flex justify-between items-baseline">
                  <span className="font-headline text-2xl sm:text-3xl">{selectedItem.name}</span>
                  <span className="text-xl sm:text-2xl font-semibold text-primary">${selectedItem.price}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground text-base sm:text-lg">{selectedItem.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
