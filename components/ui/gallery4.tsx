"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  tags?: string[];
  github?: string;
  live?: string;
  status?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Projects",
  description = "A selection of things I've built.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section className="pt-10 pb-5 px-4">
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h2>
            <p className="text-white/40 text-sm mt-2 max-w-md">{description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/50 transition-colors disabled:opacity-25 disabled:cursor-default"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/50 transition-colors disabled:opacity-25 disabled:cursor-default"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-0 px-4 max-w-5xl mx-auto">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl h-full">
                  <div className="relative h-full min-h-[27rem] overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6">
                      {item.status && (
                        <span className="text-[10px] text-indigo-300 border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 rounded-full tracking-wide uppercase mb-3">
                          {item.status}
                        </span>
                      )}
                      <h3 className="text-white font-bold text-lg mb-2 leading-snug">{item.title}</h3>
                      <p className="text-white/55 text-xs mb-4 line-clamp-3 leading-relaxed">{item.description}</p>

                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-white/50 border border-white/15 px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-3">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1"
                          >
                            <img src="/icons/github.svg" alt="" aria-hidden="true" className="size-3.5 invert opacity-60 group-hover:opacity-100" />
                            GitHub
                          </a>
                        )}
                        {item.live && (
                          <a
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                          >
                            <ArrowRight className="w-3 h-3" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-6 bg-indigo-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
