import { memo } from "react"

type Props = {
  fullname: string
  age: number
}

const Welcome = memo(({ fullname, age }: Props) => {
  console.log("Rendered Welcome component")

  return (
    <div>
      <h2>Profile</h2>
      <h4>Full Name: {fullname}</h4>
      <h4>Age: {age}</h4>
    </div>
  )
})

export default Welcome