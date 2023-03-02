import React from 'react'
import type { ProgressProps } from './props'
import './style.scss'

interface CircleProps extends ProgressProps {
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round'
  size?: number
}

function Circle(props: CircleProps): JSX.Element {
  const { percent = 0, size = 120, strokeColor, strokeWidth, strokeLinecap, children, className, style } = props

  return (
    <div className={className} style={{ ...style }}>
      <svg
        height={size}
        width={size}
        viewBox="0 0 120 120"
        x-mlns="http://www.w3.org/200/svg"
      >
        <circle
          r="50"
          cx="60"
          cy="60"
          stroke="#d9d9d9"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {percent > 0 ? (
          <circle
            r="50"
            cx="60"
            cy="60"
            stroke={strokeColor}
            strokeDasharray={`${(percent * 314) / 100},314`}
            strokeWidth={strokeWidth}
            fill="none"
            transform="rotate(-90,60,60)"
            strokeLinecap={strokeLinecap}
            style={{
              transition: `stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s`,
            }}
          />
        ) : null}
      </svg>
      {children && <div className="content">{children}</div>}
    </div>
  )
}

Circle.defaultProps = {
  size: 120,
  strokeWidth: 8,
  strokeLinecap: 'butt',
}
export default Circle
