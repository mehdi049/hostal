import Image from 'next/image'
interface CompanyLabelProps {
  name: string
  description: string
  isCollapsed: boolean
}
export const CompanyLabel = ({
  name,
  description,
  isCollapsed,
}: CompanyLabelProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-10">
        <Image
          src="/logo-ambulance.svg"
          width={isCollapsed ? 30 : 40}
          height={isCollapsed ? 30 : 40}
          alt={name}
          className="rounded-full"
        />
      </div>
      {!isCollapsed && (
        <div className="space-y-1">
          <span className="block text-left text-xs font-medium uppercase">
            {name}
          </span>
          <span className="block text-left text-xs text-white/80">
            {description}
          </span>
        </div>
      )}
    </div>
  )
}
