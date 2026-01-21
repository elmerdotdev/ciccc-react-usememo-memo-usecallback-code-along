import { memo } from "react"

type Props = {
  onFetch: () => void
}

const GetUserButton = memo(({ onFetch }: Props) => {
  console.log("Rendered GetUserButton component")

  return (
    <button onClick={onFetch}>Get User</button>
  )
})

export default GetUserButton