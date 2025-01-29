import { configureStore} from '@reduxjs/toolkit';
import var1Reducer from '@store/slices/var1Slice';

export const createTestingVar1Store = () => {
    return configureStore({
        reducer: {
            var1: var1Reducer,
        },
    });
};
