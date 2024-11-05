import React from 'react'

type ICard = {
  className?: string
  children: React.ReactNode
}

const Card: React.FC<ICard> = ({ className, children }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Card