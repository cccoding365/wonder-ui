import React from "react"
import { Image } from "../../../packages"

export default function Demo() {
  const src = "/img/wallhaven-qzryz7.png"
  return (
    <Image
      width="180px"
      height="140px"
      src={src} preview
    />
  )
}