import React from 'react'

type ICardTitle = {
  className?: string
  children: React.ReactNode
}

const CardTitle: React.FC<ICardTitle> = ({ children, className }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default CardTitle