import React from 'react'
import {render, cleanup} from '@testing-library/react'
import MachineQuote from './MachineQuote'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<MachineQuote />)
    
    expect(asFragment(<MachineQuote />)).toMatchSnapshot()
});
