import React from 'react'

function Result(props) {
  let {result} = props
  return (
    <div className='flex justify-end items-end px-10 py-6 h-full flex-col'>
      <p className='max-w-full break-words text-right whitespace-normal text-7xl font-semibold text-wrap overflow-hidden overflow-ellipsis'>{result}</p>
    </div>
  )
}

export default Result