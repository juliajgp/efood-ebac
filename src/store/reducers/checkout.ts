import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckoutState = {
  items: Produto[]
  isOpen: boolean
}

const initialState: CheckoutState = {
  items: [],
  isOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close} = checkoutSlice.actions
export default checkoutSlice.reducer
