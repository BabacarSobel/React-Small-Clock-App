import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Can be put in a common place /types/store if the project grow
interface Var1State {
    value: string;
}

const initialState: Var1State = {
    value: "VAR1",
};

const var1Slice = createSlice({
    name: "var1",
    initialState,
    reducers: {
        updateVar1: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const {updateVar1} = var1Slice.actions;
export default var1Slice.reducer;