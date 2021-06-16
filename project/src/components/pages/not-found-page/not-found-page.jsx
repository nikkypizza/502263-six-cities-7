import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const.js';


function NotFoundPage() {
  return (
    <section className="not-found">
      <h1 className="not-found__heading">
        404. <br />
        Page not found
      </h1>
      <Link className="not-found__link" to={AppRoute.ROOT}>
        Go to main page
      </Link>
    </section>
  );
}

export default NotFoundPage;
