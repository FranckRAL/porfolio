"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel = ({
  images
}: ProjectCarouselProps) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full">
      {/* Carousel container */}
      <div
        className="
          relative
          aspect-4/3
          w-full
          overflow-hidden

          rounded-2xl
          border
          border-border/70
          bg-card

          
          shadow-sm

          
        "
      >
        {/* Inner paper/frame */}
        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden
            rounded-xl
            group
          "
        >
          {/* Slides */}
          <div
            className="
              flex
              h-full
              transition-transform
              duration-500
              ease-out
            "
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="
                  relative
                  h-full
                  min-w-full
                  shrink-0
                "
              >
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1280px) 50vw,
                    600px
                  "
                />
              </div>
            ))}
          </div>

          {/* Decorative handwritten strokes */}
          <div
            className="
              pointer-events-none
              absolute
              right-5
              top-5
              flex
              rotate-[-15deg]
              items-end
              gap-1
            "
          >
            <span className="h-5 w-1 rounded-full bg-primary" />
            <span className="h-3 w-1 rounded-full bg-primary" />
            <span className="h-2 w-1 rounded-full bg-primary" />
          </div>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous Image"
              className="
                absolute
                left-4
                top-1/2
                flex
                size-9
                -translate-y-1/2
                items-center
                justify-center

                lg:opacity-0
                lg:group-hover:opacity-100

                rounded-full
                border
                border-primary/50

                bg-primary/20
                text-white

                shadow-sm
                backdrop-blur-sm

                transition-all
                duration-200

                hover:scale-105
                hover:bg-background

                active:scale-95
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Image"
              className="
                absolute
                right-4
                top-1/2
                flex
                size-9
                -translate-y-1/2
                items-center
                justify-center

                lg:opacity-0
                lg:group-hover:opacity-100

                rounded-full
                border
                border-primary/50

                bg-primary/20
                text-white

                shadow-sm
                backdrop-blur-sm

                transition-all
                duration-200

                hover:scale-105
                hover:bg-background

                active:scale-95
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Afficher l'image ${index + 1}`}
              aria-current={current === index}
              className={`
                rounded-full
                transition-all
                duration-300

                ${
                  current === index
                    ? "h-2 w-5 bg-primary"
                    : "size-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"
                }
              `}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProjectCarousel;