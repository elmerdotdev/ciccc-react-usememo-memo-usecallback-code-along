import { useMemo, useState } from "react"

const Search = () => {
  const [keyword, setKeyword] = useState<string>("")
  const [isDark, setIsDark] = useState<boolean>(false)

  const filteredItems = useMemo(() => {
    console.log("Filtering items...")
    const items: string[] = ["apple", "banana", "mango", "orange", "peach"]
    return items.filter(fruit =>
      fruit.toLowerCase().includes(keyword.toLowerCase())
    )
  }, [keyword])

  return (
    <div>
      <h2>Fruit Search:</h2>
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Enter keyword..."
      />

      <ul>
        {filteredItems.map((fruit, i) => (
          <li key={i}>
            {fruit}
          </li>
        ))}
      </ul>

      <button onClick={() => setIsDark(!isDark)}>
        Toggle Mode: {isDark ? "DARK" : "LIGHT"}
      </button>
    </div>
  )
}

export default Search