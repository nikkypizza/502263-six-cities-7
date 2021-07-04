import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import cn from 'classnames';


function TabsList({ cities, activeCity, onClick }) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((it) => (
        <li className="locations__item" key={it}>
          <button onClick={() => onClick(it)} className={cn('locations__item-link', 'tabs__item', { 'tabs__item--active': it === activeCity })}>
            <span>{it}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

TabsList.propTypes = {
  cities: arrayOf(string),
  activeCity: string,
  onClick: func,
};

export default TabsList;

