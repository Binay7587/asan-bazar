import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";

export const getLoggedInUser = createAsyncThunk(
    "User/getLoggedInUser",
    async (data = null, thunkAPI) => {
        try {
            let response = await authService.getLoggedInUser();
            return response.result;
        } catch (e) {
            throw e;
        }
    }
)

const UserSlicer = createSlice({
    name: "user",
    initialState: {
        loggedInUser: null
    },
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        }
    },
    extraReducers: {
        [getLoggedInUser.fulfilled]: (state, action) => {
            state.loggedInUser = action.payload;
        },
        [getLoggedInUser.rejected]: (state, action) => {
            state.loggedInUser = null;
        }
    }
});

export const { setLoggedInUser } = UserSlicer.actions;
export default UserSlicer.reducer;