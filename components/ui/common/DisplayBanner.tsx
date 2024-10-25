import { TBanner } from '@/constants/APIEndpoints/ads'
import Image from 'next/image'
import Link from 'next/link'

function DisplayBanner({data, width= 10, height=10}: {data: TBanner, width?: number, height?: number}) {
 if(data.ad_link === ''){
    return <Image src={data.ad_code} alt={data.ad_name} width={width} height={height} />
 }
  return (
    <Link href={data.ad_link}>
      <Image src={data.ad_code} alt={data.ad_name} width={width} height={height} />
    </Link>
  )
}

export default DisplayBanner