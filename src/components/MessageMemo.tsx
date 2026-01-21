import { memo } from "react"

type Props = {
  message: string
}

const Message = memo(({ message }: Props) => {
  console.log("Rendered Message component")

  return (
    <div>
      <p>{message}</p>
    </div>
  )
})

export default Message