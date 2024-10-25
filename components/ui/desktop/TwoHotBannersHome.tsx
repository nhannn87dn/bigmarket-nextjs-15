import { getBannersByPositionId } from "@/constants/APIEndpoints/ads";
import DisplayBanner from "../common/DisplayBanner";

export default async function TwoHotBannersHome() {
    const banners = await getBannersByPositionId({
        position_id: 34,
        limit: 2
      });
  return (
    <div className="two-banner-hot-home flex flex-col gap-y-[10px]">
        {
            banners && banners.length > 0 && banners.map((banner)=>{
                return <DisplayBanner width={220} height={100} key={`two-banner-hot-home-${banner.ad_id}`} data={banner} />
            })
        }
    </div>
  )
}
