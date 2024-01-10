import { useEffect, useState } from "react"
import { productsProps, useFetchProducts } from "../../services/useFetchProducts";
import { Button } from "../../common/components/Button";
import { addToCart } from "../../common/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";


export const Card = () => {
  const { isLoading, fetchProducts, products } = useFetchProducts();
  const [showMore, setShowMore] = useState(false);
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => state.cart.cartItems)
  console.log(cartItem)

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleAddToCart = (product: productsProps) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {products && products.length && products.map((product) => {
        return (
          <div
            key={product.id}
            className="group bg-white rounded-xl border shadow-lg  hover:scale-105 transition-all duration-500 ease-in-out p-4 w-full"
          >
            <div className="relative w-[80%] h-[350px] mx-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h3 className="font-bold mt-8">{product.name}</h3>
            <div className="mt-4 flex flex-col items-start">
              {/* {showMore ? product.description : `${product.description.substring(0, 50)}`} */}
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