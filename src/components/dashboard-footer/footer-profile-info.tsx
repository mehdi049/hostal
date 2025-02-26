import { Profile } from '@/types/profile.types'
import { User } from 'lucide-react'

interface FooterProfileInfoProps {
  profile: Profile
}
export const FooterProfileInfo = ({ profile }: FooterProfileInfoProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <User />
        <div>
          <p className="font-bold">
            <span className="text-destructive">{profile.prefix}</span>{' '}
            {profile.name}
          </p>
          <p className="text-xs italic">
            Né le {profile.birthdate} ({profile.age}ans)
          </p>
        </div>
      </div>
      <div>
        <p className="text-xs opacity-80">{profile.address}</p>
        <p className="text-xs text-destructive">{profile.buildingCode}</p>
      </div>
    </div>
  )
}
