import { render, screen } from '@testing-library/react';

import { Posts } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      body: 'body 1',
      avatar: 'img/img1.jpg',
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2',
      avatar: 'img/img2.jpg',
    },
    {
      id: 3,
      title: 'title 3',
      body: 'body 3',
      avatar: 'img/img3.jpg',
    },
  ],
};
describe('<Posts />', () => {
  it('should render posts', () => {
    const { debug } = render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute(
      'src',
      'img/img3.jpg',
    );
    debug();
  });
  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
