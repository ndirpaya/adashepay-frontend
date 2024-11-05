import React from 'react'

type ICardHeader = {
  className?: string
  children: React.ReactNode
}

const CardHeader: React.FC<ICardHeader> = ({ className, children }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default CardHeader