import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {UpdateVarButton} from '@components/buttons';
import {updateVar1} from '@store/slices/var1Slice';
import {createTestingVar1Store} from "@/tests/testUtils";

describe('UpdateVarButton Component', () => {
    it('dispatches updateVar1 when clicked', () => {
        const store = createTestingVar1Store();
        const dispatchSpy = vi.spyOn(store, 'dispatch'); // Spy on dispatch

        render(
            <Provider store={store}>
                <UpdateVarButton/>
            </Provider>
        );

        const button = screen.getByRole('button', {name: 'Update VAR1'});
        fireEvent.click(button);

        expect(dispatchSpy).toHaveBeenCalledWith(updateVar1(expect.any(String)));
    });
});
