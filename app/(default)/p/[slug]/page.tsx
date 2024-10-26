import ProductDetailsPageDesktop from "@/components/ui/desktop/ProductDetailsPageDesktop"
import ProductDetailsPageDesktopLoading from "@/components/ui/desktop/ProductDetailsPageDesktop/ProductDetailsPageDesktopLoading";
import { getProductDetailById } from "@/constants/APIEndpoints/products";
import { settings } from "@/constants/settings";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const match = slug.match(/([a-z-0-9-\-]+)-p(\d+)$/);
  const productId = match ? match[2] : null; // Check if match is not null

  if(!productId) return notFound();

  const productDetail = await getProductDetailById(parseInt(productId));

  if(!productDetail) return notFound();


  return {
    ...settings.metaDataBaseField,
    title: productDetail.metaData.metaTitle || '',
    description: productDetail.metaData.metaDescription,
    alternates: {
      canonical: `/${productDetail.url}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: productDetail.metaData.metaTitle,
      description: productDetail.metaData.metaDescription,
      url: productDetail.url,
      siteName: settings.siteName,
      images: [
        {
          url: productDetail.goods_thumb, // Must be an absolute URL
          width: 640,
          height: 347,
        },
      ],
      locale: 'vi',
      type: 'article',
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const match = slug.match(/([a-z-0-9-\-]+)-p(\d+)$/);
  const productId = match ? match[2] : null; // Check if match is not null

  if(!productId) return notFound();

  return (
    <Suspense fallback={<ProductDetailsPageDesktopLoading />}>
        <ProductDetailsPageDesktop slug={slug} productId={parseInt(productId)}  />
    </Suspense>
  )
}
