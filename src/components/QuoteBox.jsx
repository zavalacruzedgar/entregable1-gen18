import React from 'react'
import GetRandomAll from './GetRandomAll'


const QuoteBox = ({ randomQuote, randomColors, getRandomAll }) => {

    const colorObj = {
        color: randomColors
    }
    // const backgroundObj = {
    //     backgroundColor: randomColors
    // }
    return (
        <article style={colorObj} className='card'>
            <p className='card_quote'>{randomQuote.quote}</p>
            <h1 className='card_author'>{randomQuote.author}</h1>
            <GetRandomAll
                getRandomAll={getRandomAll}
                randomColors={randomColors}
            />
        </article>

    )
}

export default QuoteBox