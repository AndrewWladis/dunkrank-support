import React from 'react'
import './index.css'

function Item({data}) {
  return (
    <div className="Item">
      <h2>{data.title}</h2>
      <h3 className='info'>- {data.info}</h3>
    </div>
  )
}

export default Item