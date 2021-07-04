import React from 'react';
import { arrayOf, func, string } from 'prop-types';

function TabsList({ cities, activeCity, onClick }) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((it) => (
        <li className="locations__item" key={it}>
          <button onClick={() => onClick(it)} className={`locations__item-link tabs__item ${it === activeCity ? 'tabs__item--active' : ''}`}>
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

