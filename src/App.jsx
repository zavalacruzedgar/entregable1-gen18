
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'




function App() {
  const getIndexRandom = arr => {
    return Math.floor(Math.random() * arr.length)
  }

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColors = colors[getIndexRandom(colors)]
  
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColors, setRandomColors] = useState(firstColors)

  const backgroundObject = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColors(colors[getIndexRandom(colors)])
  
  }

  return (
    <div style={backgroundObject} className="App">
     <QuoteBox 
     randomQuote={randomQuote}
     randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
