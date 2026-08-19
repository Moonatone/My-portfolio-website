import { createSlice } from '@reduxjs/toolkit'

const getInitialMode = () => {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const initialState = {
  mode: getInitialMode(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('theme', state.mode)
    },
    setTheme: (state, action) => {
      state.mode = action.payload
      window.localStorage.setItem('theme', state.mode)
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
