import React from 'react'

function GetRandomAll({getRandomAll, randomColors}) {

    const backgroundObj = {
        backgroundColor: randomColors
    }
    
  return (
    <div>
           <button 
        style={backgroundObj} 
        className='card_button'
        onClick={getRandomAll}
        >&#62;</button>
    </div>
  )
}

export default GetRandomAll