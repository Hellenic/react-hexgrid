import * as React from "react"

export type TextProps = {
  children: string | React.ReactNode | React.ReactNode[]
  x?: string | number
  y?: string | number
  className?: string
} & React.SVGProps<SVGTextElement>

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
export function Text(props: TextProps) {
  const { children, x, y, ...rest } = props
  return (
    <text x={x || 0} y={y ? y : "0.3em"} textAnchor="middle" {...rest}>
      {children}
    </text>
  )
}

export default Text
