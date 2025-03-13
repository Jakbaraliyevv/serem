import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-clise/";
export const store = configureStore({
  reducer: {
    modalSlice,
  },
});

export default store;
