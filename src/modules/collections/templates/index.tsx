"use client"

import usePreviews from "@lib/hooks/use-previews"
import { getProductsByCollectionHandle } from "@lib/data"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCart } from "medusa-react"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Hero from "@modules/home/components/hero"
import FeaturedShops from "@modules/home/components/featured-shops"
import FeaturedProducts from "@modules/home/components/featured-products"
import ProductCarousel from "@modules/home/components/product-carousel"

type CollectionTemplateProps = {
  collection: {
    handle: string
    title: string
    id: string
  }
}

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({
  collection,
}) => {
  const { cart } = useCart()
  const { ref, inView } = useInView()

  const {
    data: infiniteData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(
    [`get_collection_products`, collection.handle, cart?.id],
    ({ pageParam }) =>
      getProductsByCollectionHandle({
        pageParam,
        handle: collection.handle,
        cartId: cart?.id,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  useEffect(() => {
    if (cart?.region_id) {
      refetch()
    }
  }, [cart?.region_id, refetch])

  const previews = usePreviews({
    pages: infiniteData?.pages,
    region: cart?.region,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <>
      <Hero />
      <div className="content-container py-6">
        <div className="mb-8 text-2xl-semi">
          <h1>{collection.title}</h1>
        </div>
        <FeaturedShops />
        <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8">
          {previews.map((p) => (
            <li key={p.id}>
              <ProductPreview {...p} />
            </li>
          ))}
          {isFetchingNextPage &&
            repeat(getNumberOfSkeletons(infiniteData?.pages)).map((index) => (
              <li key={index}>
                <SkeletonProductPreview />
              </li>
            ))}
        </ul>
        <div
          className="py-16 flex justify-center items-center text-small-regular text-gray-700"
          ref={ref}
        >
          <span ref={ref}></span>
        </div>
        <ProductCarousel title={"Weekly Popular Products from Alaba Int’l"} />
      </div>
    </>
  )
}

export default CollectionTemplate
