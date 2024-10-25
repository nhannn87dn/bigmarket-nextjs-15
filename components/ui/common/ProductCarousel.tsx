'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProductDetails } from "@/constants/APIEndpoints/products";
import Image from "next/image";

export default function ProductCarousel({
    photos,
    productName,
    height= 400,
    width= 400
}: {
    photos: TProductDetails['gallery'];
    productName: string;
    height?: number;
    width?: number;
}) {
  const settings = {
    customPaging: function(index:number) {
      return (
        <div className="small-thumb border border-gray-300 rounded overflow-hidden cursor-pointer h-[50px] w-[50px]">
          <Image className="w-full h-auto" height={50} width={50} src={photos[index].thumb_url} alt={''} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    navigator: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={`slider-container block`} style={{"height": height + 50}}>
      <Slider {...settings}>
        {
        photos.map((p)=>{
            return (
                <div key={`photos-${p.img_id}`}>
                    <Image loading="lazy" height={height} width={width} src={p.img_url} alt={p.img_desc || productName} />
                </div>
            )
            })
        }
      </Slider>
    </div>
  );
}

