import ProductDetailsPageDesktop from "@/components/ui/desktop/ProductDetailsPageDesktop"
import ProductDetailsPageDesktopLoading from "@/components/ui/desktop/ProductDetailsPageDesktop/ProductDetailsPageDesktopLoading";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
