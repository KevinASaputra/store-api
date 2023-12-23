interface buttonProps {
  children: React.ReactNode,
  className: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export const Button = ({ children, className, type, onClick }: buttonProps) => {
  return (
    <div className=''>
      <button type={type} className={className} onClick={onClick}>{children}</button>
    </div>
  )
}
