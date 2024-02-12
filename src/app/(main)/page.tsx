import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedRegions from "@modules/home/components/featured-regions"
import ProductCarousel from "@modules/home/components/product-carousel"
import DiscountCarousel from "@modules/home/components/discount-carousel"
import ServicesCarousel from "@modules/home/components/services-carousel"
import BrandsCarousel from "@modules/home/components/brands-carousel"
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
      <ProductCarousel title={'Weekly Popular Products from Alaba Int’l'} />
      <ProductCarousel title={'Hot Deals from Alaba Int’l'} />
      <DiscountCarousel title={'Get Up To 70% Off'} />
      <ServicesCarousel title={'Services To Help You Shop'} />
      {/* <BrandsCarousel title={'Trending Product For You!'} /> */}
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
