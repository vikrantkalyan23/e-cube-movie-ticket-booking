import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: { tickets: [] },
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
    },
  },
});

export const { addTicket } = bookingSlice.actions;
export default bookingSlice.reducer;
