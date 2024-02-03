import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import StarRatingComponent from "react-star-rating-component"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div
        style={
          {
            // boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 10px",
            // borderRadius: "9px",
          }
        }
      >
        <Thumbnail thumbnail={thumbnail} size="full" />
        <div className="text-base-regular mt-2 px-2 flex justify-between flex-wrap">
          <span>{title}</span>
          <div className="flex items-center gap-x-2 mt-1">
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <span className="line-through text-gray-500">
                    {price.original_price}
                  </span>
                )}
                <span
                  className={clsx("font-semibold", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>

          {/* <div></div> */}
        </div>
        <div className="text-xs-regular mt-0 px-2">
          <span className="text-sm">J&J Stores</span>
        </div>
        <div className="text-base-regular mt-2 px-2">
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={3}
            renderStarIcon={() => <i style={{fontStyle: "normal", fontSize: "15px"}}>★</i>}
            starColor={'rgb(34, 197, 94)'}
          />
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
