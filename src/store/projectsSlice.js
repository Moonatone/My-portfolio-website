import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: 'All',
  searchQuery: '',
  activeProjectId: null, // id of project shown in the demo modal
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    openProjectModal: (state, action) => {
      state.activeProjectId = action.payload
    },
    closeProjectModal: (state) => {
      state.activeProjectId = null
    },
  },
})

export const {
  setFilter,
  setSearchQuery,
  openProjectModal,
  closeProjectModal,
} = projectsSlice.actions
export default projectsSlice.reducer
