import { Label } from "../elements/Label"
import { Input } from "../elements/Input"


export const InputForm = () => {

  return (
    <div className="">
      <Label
        className=""
        htmlFor="email">Email</Label>
      <Input
        placeholder="*****"
        type="email"
        name="email"
        id="email"
        className="w-full"
        value="10" />
    </div>
  )
}