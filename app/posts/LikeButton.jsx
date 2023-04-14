'use client'

import { useState } from 'react'

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? 'No me gusta' : 'Me gusta'}
    </button>
  )
}

export default LikeButton
