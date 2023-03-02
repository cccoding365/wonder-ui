import React, { useRef } from 'react'
import './style.scss'
import ReactDOM from 'react-dom/client'
import TooltipEl from './tooltipItem'
import { TooltipProps } from './props'

const el = document.createElement('div')
el.className = 'wonder_position-container'
if (!document.querySelector('.wonder_position-container')) {
  document.body.appendChild(el)
}



export default function Tooltip(props: TooltipProps): JSX.Element {
  const { style, className, children, content, align, color, onOpenChange, zIndex } = props
  const tooltipRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<any>(null)
  const toolTipStyle = {
    ...style,
  }
  const Ele = document.createElement('div')
  Ele.className = 'wonder_position'
  const containerEl = Ele as HTMLElement
  const root = ReactDOM.createRoot(containerEl)
  const tooltipMouseOver = (): void => {
    const viewportOffset = tooltipRef.current?.getBoundingClientRect()
    const left = viewportOffset?.left || 0
    const top = viewportOffset?.top || 0
    const width = tooltipRef.current?.clientWidth
    const height = tooltipRef.current?.clientHeight
    root.render(
      <TooltipEl left={(left as number)} top={(top as number)} width={(width as number)} height={(height as number)} content={content} align={align} cRef={childrenRef} color={color} zIndex={zIndex} />,
    )
    // 置入到指定节点下
    const container = document.querySelector('.wonder_position-container')
    if (container) {
      container.appendChild(Ele)
    }
    let timer: any = null
    clearTimeout(timer)
    timer = setTimeout(() => {
      (childrenRef.current as any).handleOpen(true)
      onOpenChange && onOpenChange(true)
    }, 150)
  }
  const tooltipMouseOut = (): void => {
    (childrenRef.current as any).handleOpen(false)
    let timer: any = null
    if (Ele) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const container = document.querySelector('.wonder_position-container')
        container?.removeChild(document.querySelector('.wonder_position') as Node)
        onOpenChange && onOpenChange(false)
      }, 150)
    }

  }
  return (
    <div
      className="wonder_tooltip"
      style={style || toolTipStyle}
      ref={tooltipRef}
      onMouseOver={tooltipMouseOver}
      onMouseOut={tooltipMouseOut}
    >
      {children}
    </div>
  )
}
Tooltip.defaultProps = {
  style: '',
  className: '',
  align: 'top',
  color: '#000',
  onOpenChange: () => { },
  zIndex: 1011,
}
