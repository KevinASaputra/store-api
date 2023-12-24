import { createSlice } from "@reduxjs/toolkit"

interface addToCartProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface CartItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
  totalPrice: number
}

const initialState = {
  cartItems: [] as CartItem[],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: { payload: addToCartProps }) => {
      const newItem = action.payload
      const isProductsExist = state.cartItems.findIndex(product => product.id === newItem.id)

      if (isProductsExist !== -1) {
        state.cartItems[isProductsExist].quantity += 1
        state.cartItems[isProductsExist].totalPrice = state.cartItems[isProductsExist].price * state.cartItems[isProductsExist].quantity
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        })
      }
    },
    removeToCart: () => { },
  }
})

export const { addToCart, removeToCart } = cartSlice.actions

export default cartSlice.reducer