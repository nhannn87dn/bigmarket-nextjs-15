"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Image from "next/image";
import { TBanner } from "@/constants/APIEndpoints/ads";

type TSlickCarousel = {
  settings: {
    dots?: boolean;
    dotsClass?: string;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
  };
  items: TBanner[];
};
export default function SlickCarousel({
  settings,
  items = [],
}: TSlickCarousel) {
  const sliderRef = useRef<Slider | null>(null); // Specify the type for the ref
  const next = () => {
    sliderRef.current?.slickNext(); // Use current to access the slider instance
  };
  const previous = () => {
    sliderRef.current?.slickPrev(); // Use current to access the slider instance
  };

  return (
    <div className="slick-custom relative">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider; // Assign to current
        }}
        {...settings}
      >
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div
              data-position-id={item.position_id}
              key={`SlickCarousel-item-${index}`}
            >
              <Image
                priority={true}
                sizes="100vw"
                className="w-full h-auto"
                width={800}
                height={400}
                src={item.ad_code}
                alt={item.ad_name}
              />
            </div>
          ))}
      </Slider>
      <button
        className="slick-prev slick-arrow absolute z-40 !left-2 top-1/2 -translate-y-1/2"
        onClick={previous}
      >
        Previous
      </button>
      <button
        className="slick-next slick-arrow absolute z-40 !right-8 top-1/2 -translate-y-1/2"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}
