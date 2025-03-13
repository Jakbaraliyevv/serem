import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, // Modal dastlab yopiq
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
