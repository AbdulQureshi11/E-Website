import React from 'react'

const PrimaryBtn = ({children, className}) => {
  return (
    <div>

        <button className={`${className}`}>{children}</button>
      
    </div>
  )
}

export default PrimaryBtn
