import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Dropdown from './Dropdown'

describe('<Dropdown />', () => {
  it('should render Dropdown component properly', () => {

    const { asFragment } = render(<Dropdown />);
    const dropdown = screen.getByRole('dropdown');

    expect(dropdown).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot(); // snapshot
  });
})
