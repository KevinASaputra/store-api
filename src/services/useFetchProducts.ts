import { useState } from "react"

export type productsProps = {
  id: number
  name: string
  price: number
  quantity: number
  category: string
  image: string
}

export const useFetchProducts = () => {
  const [products, setProducts] = useState<productsProps[]>([]);
  const [isLoading, setLoading] = useState(true);


  const fetchProducts = async () => {
    const API_URL = 'http://localhost:3000/api/products/';
    if (!API_URL) {
      console.error('API_URL not found');
      return;
    }

    try {

      const products = await fetch(API_URL).then((res) => res.json());
      console.log(products)
      setProducts(products);
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false);
    }
  }

  return { products, isLoading, fetchProducts };
}
