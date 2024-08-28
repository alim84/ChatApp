import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginuserinfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loginuserinfo } = userSlice.actions

export default userSlice.reducer;
