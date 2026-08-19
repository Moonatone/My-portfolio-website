import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import uiReducer from './uiSlice'
import projectsReducer from './projectsSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    projects: projectsReducer,
  },
})
