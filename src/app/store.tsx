import { configureStore } from '@reduxjs/toolkit'
import routesDataReducer from "../assets/data/routesDataSlice"

export default configureStore({
  reducer: {
    routesData: routesDataReducer,
  },
})