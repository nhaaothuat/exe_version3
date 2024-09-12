import React from 'react'
import CutoutTextLoader from './CutoutTextLoader'

const Loading = () => {
  return (
     <div>
     <CutoutTextLoader
       height="450px"
       background="white"
       // NOTE: Using GIFs for the background looks super cool :)
       imgUrl="/imgs/random/11.jpg"
     />
   </div>
  )
}

export default Loading
