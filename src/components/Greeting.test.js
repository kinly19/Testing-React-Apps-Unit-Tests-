import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// ============================== Notes ==============================
// test() - function which is globally available
// first argument we give the test a brief description 
// second argument an anonymous function which will contain the actual code

// Writing tests - The Three "A"s
//  Arrange - set up the test data, test condition and environment
//  Act - Run logic that should be tested (e.g execute function)
//  Assert - compare execution results with expected results

// describe() - function where we can group test suites together
//  first argument - a brief description 
//  second argument - an anonymous function where we put all the different... tests inside of
// https://jestjs.io/docs/api
// https://jestjs.io/docs/expect

// userEvent - helps us trigger user events in this virtual screen when testing ()
//  https://testing-library.com/docs/ecosystem-user-event/

// Regular expressions are patterns used to match character combinations in strings - (/learn react/)
// ===================================================================

//one suit with two test
describe('Greeting component', () => {

  test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting/>);
  
    // Act
    // ... nothing
  
    //Assert
    const helloWorldElemenet = screen.getByText('Hello World'); 
    expect(helloWorldElemenet).toBeInTheDocument();
  });

  test('render divs paragraph', () => {
    render(<Greeting />)
    const paragraphElement = screen.getByText("Its good to see you");
    expect(paragraphElement).toBeInTheDocument();
  });

});

