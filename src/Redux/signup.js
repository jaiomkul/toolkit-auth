import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupApi = createAsyncThunk("signup/data", async (body) => {
  const res = await fetch(
    "https://do-server-production.up.railway.app/api/users1",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log("data==>", data);
  return data;
});

export const initialStatuses = {
  Loading: "Loading",
  Fulfilled: "Filfilled",
  Error: "Error",
};

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: [],
    status: initialStatuses.Fulfilled,
  },

  extraReducers: {
    [signupApi.pending]: (state, action) => {
      state.status = initialStatuses.Loading;
    },
    [signupApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = initialStatuses.Fulfilled;
    },
    [signupApi.rejected]: (state, action) => {
      state.status = initialStatuses.Error;
    },
  },

  /*     extraReducers: (builder) => {
      builder
        .addCase(signupApi.pending, (state, action) => {
          state.status = initialStatuses.Loading;
        })
        .addCase(signupApi.fulfilled, (state, action) => {
          state.data.push(action.payload);
          state.status = initialStatuses.Fulfilled;
        })
        .addCase(signupApi.rejected, (state, action) => {
          state.status = initialStatuses.Error;
        });
    }, */
});

export default signupSlice.reducer;
