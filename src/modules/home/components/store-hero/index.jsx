"use client"

import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { Splide, SplideSlide } from "splide-nextjs/react-splide"
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css"

const StoreHero = () => {
  return (
    <Splide options={{ rewind: true, arrows: false }} aria-label="Hero Section">
      <SplideSlide>
        <div className="h-[90vh] w-full relative flex justify-around items-center flex-wrap">
          <div className="text-transparent relative inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-10 mx-5 hidden lg:block xl:block w-[24rem]">
            {/* <h1 className="text-xl-semi mb-4 drop-shadow-md shadow-black">
          Introducing the Latest Summer Styles
        </h1>
        <p className="text-base-regular max-w-[24rem] mb-6 drop-shadow-md shadow-black">
          This season, our new summer collection embraces designs to provide
          comfort and style - ensuring you&apos;re well-prepared for whatever
          comes your way.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink> */}
          </div>

          <div className="text-white relative inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-10 py-10 px-5 mx-5 bg-[#884A22] rounded-md">
            <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
              Get 10% Cash Back On $500
            </h1>
            <p className="text-base-regular max-w-[24rem] mb-6 drop-shadow-md shadow-black">
              This season, our new summer collection embraces designs to provide
              comfort and style - ensuring you&apos;re well-prepared for
              whatever comes your way.
            </p>
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>

          <Image
            // src="/hero.webp"
            src="/hero2.png"
            loading="eager"
            priority={true}
            quality={90}
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="h-[90vh] w-full relative flex justify-around lg:justify-start xl:justify-start items-center flex-wrap">
          <div className="text-white relative inset-0 z-10 flex flex-col justify-center items-center text-center lg:pl-5 small:text-left small:justify-end small:items-start small:p-10 mx-5 w-[24rem] lg:w-[36rem] xl:w-[36rem]">
            <h1 className="text-xl-semi mb-4 drop-shadow-md shadow-black">
              Introducing the Latest Summer Styles
            </h1>
            <p className="text-base-regular max-w-[24rem] lg:max-w-[36rem] xl:max-w-[36rem] mb-6 drop-shadow-md shadow-black">
              This season, our new summer collection embraces designs to provide
              comfort and style - ensuring you&apos;re well-prepared for
              whatever comes your way.
            </p>
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>

          <Image
            src="/hero.webp"
            // src="/hero2.png"
            loading="eager"
            priority={true}
            quality={90}
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div></div>
      </SplideSlide>
    </Splide>
  )
}

export default StoreHero
