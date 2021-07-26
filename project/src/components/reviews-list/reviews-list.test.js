import React from 'react';
import { render } from '@testing-library/react';

import ReviewsList from '../reviews-list/reviews-list';

const REVIEWS = [{
  id: 123,
  author: {name: 'Raul',userPic: 'https://stevensegallery.com/54/54'},
  rating: 3,
  date: '2010-01-11',
  review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
},
{
  id: 321,
  author: {name: 'Omar',userPic: 'https://www.placecage.com/54/54'},
  rating: 1,
  date: '1998-09-01',
  review: 'ATROCIOUS!',
}];

describe('Component: Review', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ReviewsList reviews={REVIEWS}/>);

    expect(getByText('Raul')).toBeInTheDocument();
    expect(getByText(/A quiet cozy and picturesque that hides behind a a river/)).toBeInTheDocument();

    expect(getByText('Omar')).toBeInTheDocument();
    expect(getByText(/ATROCIOUS!/)).toBeInTheDocument();
  });
});
