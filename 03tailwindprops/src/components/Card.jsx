import React from 'react'

export default function Card({topic="cards",posts="Not Assisneg yet"})  {
  return (
    <div>
        <img src="../../image.png" alt="" />
        <h1 className='text-2xl bg-green-500 p-3 rounded'>{topic}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, quasi?</p>
    </div>
  )
}
