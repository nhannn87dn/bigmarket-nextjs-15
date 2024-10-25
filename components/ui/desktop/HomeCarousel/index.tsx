import { getBannersByPositionId } from "@/constants/APIEndpoints/ads";
import SlickCarousel from "../../common/SlickCarousel";

export default async function HomeCarousel() {
    const items = await getBannersByPositionId({
      position_id: 1,
      limit: 10
    });
    const settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  if(!items) return null;
  return (
    <div className="slider-container">
        <SlickCarousel items={items} settings={settings} />
    </div>
  )
}
