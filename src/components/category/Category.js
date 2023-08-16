import React from 'react'
import './Category.scss'
function  Category({category}) {
  const style={
    color:'white'
  }
  return (
    <div className='CategoryContainer'>
      <h1 style={style}>Shop By Categories</h1>
      <p style={style}>Check More Categories</p>
      <div className="topPicksCategory">
        <h1 className='ps5'>{category.attributes.title}</h1>
      </div>
    </div>
  )
}

export default Category