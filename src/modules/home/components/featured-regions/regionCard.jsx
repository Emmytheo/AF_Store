"use client"

import { useEffect, useState } from "react"

const RegionCard = (props) => {
  const { region, color } = props
  return (
    <div className="text-base-regular mt-2 p-2 flex justify-start rounded-md shadow-card min-h-24">
      {region ? (
        <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full dark:bg-gray-600 m-1 dark:ring-gray-500 p-1 shadow-card" style={{background: color}}>

          <span className="font-medium text-white">
            J&L
          </span>
        </div>
      ) : (
        <div className="rounded-full p-8 animate-pulse bg-gray-100"></div>
      )}
      <div className="my-2 px-2 flex justify-around flex-col">
        <h1 className="text-base font-semibold">Aviation Store</h1>
        {region ? (
          <span className="text-base-regular">Delivery within 24 Hours</span>
        ) : (
          <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
        )}

        {/* <div></div> */}
      </div>
    </div>
  )
}

export default RegionCard
