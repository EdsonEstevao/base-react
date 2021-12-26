import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title1/i))
      // expect(screen.getByRole('img', {name: /title1/i}))
      .toHaveAttribute('src', 'img/img.jpg');
    expect(
      screen.getByRole('heading', { name: /title1/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/body1/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
