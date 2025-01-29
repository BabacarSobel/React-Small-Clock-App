import {var1Reducer} from "@store/slices";
import {updateVar1} from "@store/slices/var1Slice";

describe('var1Slice', () => {
    it('should return the initial state', () => {
        const initialState = { value: 'VAR1' };
        expect(var1Reducer(undefined, { type: "" })).toEqual(initialState);
    });

    it('should handle updateVar1', () => {
        const initialState = { value: 'VAR1' };
        const result = var1Reducer(initialState, updateVar1('27-01-2025'));
        expect(result.value).toBe('27-01-2025');
    });
});
