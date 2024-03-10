import React from 'react'
import './loading.css'

export const Loading:React.FC<{text:string}> = ({text}) => {
  return (
    <h1 className='loading_text'>
        {text}
    </h1>
  )
}
