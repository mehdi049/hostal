interface CircleProps {
  className?: string
  borderColor?: string
}

export const Circle = ({
  className,
  borderColor = 'secondary',
}: CircleProps) => {
  return (
    <span
      className={`inline-block h-5 w-5 rounded-full border-2 border-${borderColor} ${className}`}
    ></span>
  )
}
