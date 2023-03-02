import React from "react"
import { Image } from "../../../packages"

export default function Demo() {
  const fits = ['cover', 'contain', 'fill', 'none', 'scale-down']
  const src = "/img/wallhaven-qzryz7.png"
  return (
    <div style={{ display: 'flex' }}>
      {fits.map((item: any, index: number) => {
        return <div style={{ marginRight: '20px', width: '130px' }} key={index}>
          <p style={{ textAlign: 'center' }}>{item}</p>
          <Image width="130px" height="100px" src={src} fit={item} />
        </div>
      })}
    </div>
  )
}