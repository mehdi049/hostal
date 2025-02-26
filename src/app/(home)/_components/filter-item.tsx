interface FilterItemProps {
  className?: string
  children?: React.ReactNode
}
export const FilterItem = ({ className, children }: FilterItemProps) => {
  return (
    <div
      className={`flex w-full max-w-20 flex-col items-center justify-center gap-1 rounded-xl border-2 border-[#DEE0F3] p-1 text-xs font-bold ${className}`}
    >
      {children}
    </div>
  )
}
