
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  },
  addressInfo: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setAddressInfo: (state, action) => {
      state.addressInfo = action.payload;
    },
    resetForm: () => initialState
  }
});

export const { setPersonalInfo, setAddressInfo,resetForm } = formSlice.actions;
export default formSlice.reducer;
