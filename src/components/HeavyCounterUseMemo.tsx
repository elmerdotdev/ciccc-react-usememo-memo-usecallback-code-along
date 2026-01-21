import { useMemo, useState } from "react"

const HeavyCounter = () => {
  const [count, setCount] = useState<number>(0)
  const [toggle, setToggle] = useState<boolean>(false)

  const heavyComputation = (num: number) => {
    console.log("Running super complex computation...")
    let total = 0
    for (let i = 0; i < 1000000000; i++) {
      total += num
    }
    return total
  }

  const computed = useMemo(() =>
    heavyComputation(count)
  , [count]) // Runs only when count state is updated 🤣

  return (
    <div>
      <h2>Computation Result: {computed}</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle: {toggle ? "ON" : "OFF"}</button>
    </div>
  )
}

export default HeavyCounter