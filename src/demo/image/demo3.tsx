import React from "react"
import { Space, Image } from "../../../packages"

export default function Demo() {
  const imgList = [
    '/img/wallhaven-1pqe79.png',
    '/img/wallhaven-1pqz9v.jpg',
    '/img/wallhaven-p9o51m.png',
    '/img/wallhaven-p9op59.jpg',
    '/img/wallhaven-qzrky5.jpg',
    '/img/wallhaven-qzryz7.png'
  ]
  return (
    <Space>
      {
        imgList.map((item: any, index: number) => {
          return <Image
            width="150px"
            height="150px"
            src={item}
            preview
            key={index}
            previewList={imgList}
            toIndex={index}
          />
        })
      }
    </Space>
  )
}