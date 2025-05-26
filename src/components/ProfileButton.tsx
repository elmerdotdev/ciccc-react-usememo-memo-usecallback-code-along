import { memo } from "react"

type Props = {
  onDisplay: () => void
}

const ProfileButton = memo(({ onDisplay }: Props) => {
  console.log("Rendered Profile Button component")

  return (
    <button onClick={onDisplay}>Display First Name</button>
  )
})

export default ProfileButton