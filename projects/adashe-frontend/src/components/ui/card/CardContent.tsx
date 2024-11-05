import React from 'react'

type ICardContent = {
  className?: string
  children: React.ReactNode
}

const CardContent: React.FC<ICardContent> = ({ children, className }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default CardContent