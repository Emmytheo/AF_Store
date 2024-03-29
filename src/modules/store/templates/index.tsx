"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"

import Hero from "@modules/home/components/hero"
import FeaturedRegions from "@modules/home/components/featured-regions"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
      {/* <Hero /> */}
      <FeaturedRegions />
      <div className="flex flex-col small:flex-row small:items-start py-6">
        <RefinementList refinementList={params} setRefinementList={setParams} />
        <InfiniteProducts params={params} />
      </div>
    </>
  )
}

export default StoreTemplate
