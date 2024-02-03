import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedRegions from "@modules/home/components/featured-regions"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedRegions />
      <FeaturedProducts />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
