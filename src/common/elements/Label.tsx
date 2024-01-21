type labelProps = {
  children: React.ReactNode,
  className: string
  htmlFor: string
}

export const Label = ({ children, className, htmlFor }: labelProps) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{children}</label>
    </div>
  )
}