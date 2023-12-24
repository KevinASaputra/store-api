import { useEffect, useState } from "react"
import { Button } from "../../common/components/Button";
import { addToCart } from "../../common/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

type resultProps = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}


export const Card = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState<resultProps[]>([]);
  const [showMore, setShowMore] = useState(false);
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => state.cart.cartItems)
  console.log(cartItem)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const apiURL = 'https://fakestoreapi.com/products';
        const response = await fetch(apiURL)
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.error(err)
      }
      finally {
        setLoading(false)
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleAddToCart = (product: resultProps) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="group bg-white rounded-xl border shadow-lg  hover:scale-105 transition-all duration-500 ease-in-out p-4 w-full"
          >
            <div className="relative w-[80%] h-[350px] mx-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h3 className="font-bold mt-8">{product.title}</h3>
            <div className="mt-4 flex flex-col items-start">
              {showMore ? product.description : `${product.description.substring(0, 50)}`}
              <button className="" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
            <div className="flex justify-between items-center gap-6 mt-8">
              <h3>{product.price}</h3>
              <Button
                type="button"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-lg py-3 px-8"
                onClick={() => (handleAddToCart(product))}
              >
                BUY NOW
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}