import { useCallback, useEffect, useState } from "react"
import GetUserButton from "./GetUserButton"

type User = {
  id: number,
  firstName: string,
  email: string
}

const User = () => {
  console.log("Rendered User component")
  const [user, setUser] = useState<User>()

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch(`https://dummyjson.com/users/1`)
      const data = await res.json()
      setUser(data)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    console.log("useEffect triggered")
    fetchUser()
  }, [fetchUser])

  return (
    <div>
      <h2>User</h2>
      <h3>Name: {user?.firstName}</h3>
      <h3>Email: {user?.email}</h3>
      <GetUserButton onFetch={fetchUser} />
    </div>
  )
}

export default User