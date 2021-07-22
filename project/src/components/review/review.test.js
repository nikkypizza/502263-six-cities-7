import React from 'react';
import { render } from '@testing-library/react';

import Review from './review';


describe('Component: Review', () => {
  it('should render correctly', () => {
    const review = {
      id: 123,
      author: {name: 'Raul', userPic: 'https://stevensegallery.com/54/54'},
      rating: 3,
      date: '2010-01-11',
      review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    };

    const { getByText } = render(<Review reviewItem={review}/>);

    const nameElement = getByText('Raul');
    const contentElement = getByText(/A quiet cozy and picturesque that hides behind a a river/);

    expect(nameElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
