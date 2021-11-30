import { render, screen } from '@testing-library/react';
import Async from './Async';

// ============================== Notes ==============================
// tests are able to return promises 
//  https://jestjs.io/docs/asynchronous

// mock functions
// jest.fn() - will create a mock function
// mockResolvedValueOnce() - will allow us to set a value, this fetch function 
//  should resolve to when its being called
//  https://jestjs.io/docs/mock-functions
//  https://jestjs.io/docs/mock-function-api
// ===================================================================

describe('Async component', () => {
  test('renders post if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id:'p1', title: 'first post'}]
    });
    render(<Async />);

    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});