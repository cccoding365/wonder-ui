import React from 'react'
import { Button, Divider } from '../../../packages'

export default function Demo() {
  return (
    <div>
      都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。
      <Divider>左对齐分割线</Divider>
      腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。
      <Divider position="center">居中分割线</Divider>
      时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。
      <Divider position="right">右对齐分割线</Divider>
      层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。
      <Divider>
        <Button>按钮作为分割线</Button>
      </Divider>
      披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。
    </div>
  )
}
