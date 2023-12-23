import { IconShoppingCart1 } from "antasena-icons"
import { Button } from "../../common/components/Button"


export const Header = () => {
  return (
    <header className=" bg-slate-700">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-28">
          <h1 className="text-3xl font-bold text-white">Store Simple </h1>
          <Button type="button" className="text-white bg-blue-600 hover:bg-blue-800 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300 ease-in-out">
            <IconShoppingCart1 />
          </Button>
        </div>
      </div>
    </header>
  )
}