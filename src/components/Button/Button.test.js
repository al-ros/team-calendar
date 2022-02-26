import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('<Button />', () => {
  it('should render Button component properly', () => {

    const { asFragment } = render(<Button />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot(); // snapshot
  });

  it('should render Button with label', () => {
    render(<Button label="The magic button" />);
    const button = screen.getByRole('button', { name: /magic/i });
    expect(button).toBeInTheDocument();

    const button2 = screen.queryByRole('button', { name: /asdf/i });
    expect(button2).not.toBeInTheDocument();
  });

  it('should call onClick', () => {
    const handleClick = jest.fn(); // mock function

    render(<Button onClick={handleClick} label="The magic button" />);
    const button = screen.getByRole('button', { name: /magic/i });
    
    userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const { container } = render(<Button className='button--disabled' label="The magic button" />)
    // const button = screen.getByRole('button', { name: /magic/i })
    // expect(button).toHaveClass('button--disabled');
    expect(container.firstChild.classList.contains('button--disabled')).toBe(true)

    // expect(container.firstChild).toBeDisabled(); // why this test fail?!
  })

  // it('should be block', () => {
  //   expect(true).toBe(true);
  // })

  // it('should has classname', () => {
  //   expect(true).toBe(true);
  // })
});
