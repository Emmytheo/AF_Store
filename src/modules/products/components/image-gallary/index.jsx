"use client"

// import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef } from "react"
import { Splide, SplideSlide } from "splide-nextjs/react-splide"
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css"

// type ImageGalleryProps = {
//   images: MedusaImage[]
// }

const ImageGallery = ({ images }) => {
  const imageRefs = useRef([])

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className="h-14 w-12 relative border border-white"
              onClick={() => {
                handleScrollTo(image.id)
              }}
            >
              <span className="sr-only">Go to image {index + 1}</span>
              <Image
                src={image.url}
                className="absolute inset-0"
                alt="Thumbnail"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </button>
          )
        })}
      </div>

      {/* <Splide
        options={{ rewind: true, arrows: false }}
        aria-label="Image gallery Section"
      > */}
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            // <SplideSlide key={index}>
            <div
              ref={(image) => imageRefs.current.push(image)}
              key={image.id}
              className="relative aspect-[29/34] w-full"
              id={image.id}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0"
                alt={`Product image ${index + 1}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            // </SplideSlide>
          )
        })}
      </div>
      {/* </Splide> */}
    </div>
  )
}

export default ImageGallery
