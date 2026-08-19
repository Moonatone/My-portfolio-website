import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  mobileMenuOpen: false,
  toasts: [], // { id, message, tone }
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    showToast: {
      reducer: (state, action) => {
        state.toasts.push(action.payload)
      },
      prepare: (message, tone = 'success') => ({
        payload: { id: nanoid(), message, tone },
      }),
    },
    dismissToast: (state, action) => {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload)
    },
  },
})

export const { toggleMobileMenu, closeMobileMenu, showToast, dismissToast } =
  uiSlice.actions
export default uiSlice.reducer
