import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createTestingVar1Store} from '@/tests/testUtils';
import {Content2} from '@components/contents';

describe('Content2 Component', () => {
    it('renders the component with heading and content', () => {
        const store = createTestingVar1Store();

        render(
            <Provider store={store}>
                <Content2/>
            </Provider>
        );

        expect(screen.getByRole('heading', {name: 'Content 2'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Update VAR1'})).toBeInTheDocument();
    });
});
