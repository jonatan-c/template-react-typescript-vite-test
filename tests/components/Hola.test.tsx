import Hola from '../../src/components/Hola';
import { render ,screen} from '@testing-library/react';
import React from 'react';


describe('Hola', () => {

    // it('should render correctly', () => {
    //     const { container } = render(<Hola />);
    //     expect(container.firstChild).toMatchSnapshot();
    //     screen.debug() 
    // }
    // );

    it('should render correctly', () => {
        render(<Hola />);
        expect(screen.getByText('Hola')).toBeInTheDocument();
        screen.debug() 
    }
    );
})