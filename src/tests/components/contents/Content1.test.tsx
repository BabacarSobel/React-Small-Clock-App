import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createTestingVar1Store} from '@/tests/testUtils';
import {Content1} from '@components/contents';

describe('Content1 Component', () => {
    it('renders the component with heading and content', () => {
        const store = createTestingVar1Store();

        render(
            <Provider store={store}>
                <Content1/>
            </Provider>
        );

        expect(screen.getByRole('heading', {name: 'Content 1'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Update VAR1'})).toBeInTheDocument();
    });
});
