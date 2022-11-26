
import { createSlice } from '@reduxjs/toolkit'

const contactForm = createSlice({
  name: 'contact',
  initialState: {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  },
  reducers: {
    updateVal(state, { payload: { key, val } }) {
      state[key] = val
    },
  },
})

export const { updateVal } = contactForm.actions

export default contactForm.reducer;