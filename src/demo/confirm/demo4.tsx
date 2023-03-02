import React from 'react'
import { Button, Confirm, Message } from '../../../packages'

export default function Demo3() {
  const callback = () => {
    Confirm.info({
      confirmCallback: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('OK')
          }, 3000)
        })
      },
      cancelCallback() {
        Message.error('取消了')
      },
    })
      .then((res) => {
        console.log(res)
        Message.success('确认')
      })
      .catch((err) => {
        console.log(err)
        Message.error('出错了')
      })
  }
  return (
    <Button onClick={() => callback()}>
      处理异步任务
    </Button>
  )
}
