interface PointProps {
  className?: string
  backgroundColor?: string
}
export const Point = ({ className, backgroundColor }: PointProps) => {
  return (
    <span
      className={`inline-block h-3 w-3 rounded-full ${backgroundColor} ${className}`}
    ></span>
  )
}
