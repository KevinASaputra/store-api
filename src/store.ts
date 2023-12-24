import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./common/features/cart/cartSlice"


export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;