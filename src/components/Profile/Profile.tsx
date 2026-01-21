import { useCallback, useState } from "react"
import ProfileButton from "./ProfileButton"

const Profile = () => {
  console.log("Rendered Profile component")
  const [toggle, setToggle] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>("")

  const handleDisplay = useCallback(() => {
    setFirstName("Jane")
  }, [])

  return (
    <div>
      <h2>Profile</h2>
      <h3>Name: {firstName}</h3>
      <ProfileButton onDisplay={handleDisplay} />
      <button onClick={() => setToggle(!toggle)}>
        Toggle: {toggle ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default Profile