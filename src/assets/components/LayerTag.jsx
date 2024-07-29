import React from 'react'

function LayerTag(prompt) {
  return (
    <div className='absolute right-10 -rotate-90 text-gray-500 bottom-14 tracking-widest fogie'>
      <h1>{prompt.title}</h1>
    </div>
  )
}

export default LayerTag
