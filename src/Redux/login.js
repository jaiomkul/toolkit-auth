import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginApi = createAsyncThunk("login/api", async (body) => {
  try {
    const res = await fetch(
      "https://do-server-production.up.railway.app/api/auth",
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

    if (res.status === 200) {
      console.log("ok data", res);
    } else {
      console.log("not ok");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const initialStatuses = {
  Loading: "Loading",
  Fulfilled: "Filfilled",
  Error: "Error",
};

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: [],
    status: initialStatuses.Fulfilled,
  },
  extraReducers(builder) {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.status = initialStatuses.Loading;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.login = action.payload;
        state.status = initialStatuses.Fulfilled;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.status = initialStatuses.Error;
      });
  },
});

export default loginSlice.reducer;
