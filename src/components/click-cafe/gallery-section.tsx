import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const galleryImageIds = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6",
];

const galleryImages = galleryImageIds
  .map((id) => PlaceHolderImages.find((img) => img.id === id))
  .filter((img): img is NonNullable<typeof img> => Boolean(img));

// Grid spans for bento layout
const gridSpans = [
  "col-span-2 row-span-2", // gallery-1
  "col-span-1 row-span-1", // gallery-2
  "col-span-1 row-span-1", // gallery-3
  "col-span-1 row-span-1", // gallery-4
  "col-span-1 row-span-1", // gallery-5
  "col-span-2 row-span-1", // gallery-6
];

export function GallerySection() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="space-y-4 text-center animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            A Glimpse of Our Cafe
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore the warm and inviting atmosphere of Click Cafe. It's the perfect place to unwind, work, or catch up with friends.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto h-[60vh] min-h-[700px] md:min-h-[500px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "relative overflow-hidden group rounded-xl shadow-lg border bg-card animate-fade-in-scale-up",
                gridSpans[index] || "col-span-1 row-span-1"
              )}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
