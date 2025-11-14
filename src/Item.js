import React from 'react'
import './index.css'

function Item({data}) {
  return (
    <div className="item-card">
      <div className="item-icon">💡</div>
      <div className="item-content">
        <h3 className="item-title">{data.title}</h3>
        <p className="item-info">{data.info}</p>
      </div>
    </div>
  )
}

export default Item