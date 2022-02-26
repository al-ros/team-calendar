import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('<Header />', () => {
  it('should render Header component properly', () => {

    const { asFragment } = render(<Header />);
    const header = screen.getByRole('header');

    expect(header).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot(); // snapshot
  });

});
