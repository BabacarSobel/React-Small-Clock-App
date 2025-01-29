import {configureStore} from "@reduxjs/toolkit";
import {var1Reducer} from "@store/slices";

const store = configureStore({
        reducer: {
            var1: var1Reducer,
        }
    }
);

export type RootState = ReturnType<typeof store.getState>;
export default store;