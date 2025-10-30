import { useState } from 'react'
import './App.css'
import WordCount from "./WordCount.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
              <WordCount></WordCount>
            </div>
        </>
    )
}

export default App
