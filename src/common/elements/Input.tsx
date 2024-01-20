type inputProps = {
  className: string
  type: string
  placeholder: string
  name: string
  id: string
  value: string
}

export const Input = ({ className, type, placeholder, name, id, value }: inputProps) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
      />
    </div>
  )
}