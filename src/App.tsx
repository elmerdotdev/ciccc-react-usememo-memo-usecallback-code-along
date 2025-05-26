import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Message from './components/Message'
import HeavyCounter from './components/HeavyCounter'
import Search from './components/Search'
import Profile from './components/Profile'
import User from './components/User'

const App = () => {
  const [count, setCount] = useState<number>(0)
  const fullname = "John Smith"
  const age = 40
  const message = "The quick brown fox jumps over the lazy dog."

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>

      <Welcome fullname={fullname} age={age} />
      <Message message={message} />

      <HeavyCounter />

      <Search />

      <hr />

      <Profile />

      <hr />

      <User />
    </div>
  )
}

export default App