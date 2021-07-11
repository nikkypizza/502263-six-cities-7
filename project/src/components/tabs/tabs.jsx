import React from 'react';
import { arrayOf, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeCity } from '../../store/action';
import { getActiveCity } from '../../store/ui/selectors';

import TabsList from '../tabs-list/tabs-list';


function Tabs({ cities }) {
  const dispatch = useDispatch();
  const activeCity = useSelector(getActiveCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <TabsList cities={cities} activeCity={activeCity} onClick={(city) => dispatch(changeCity(city))} />
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = {
  cities: arrayOf(string),
};

export default Tabs;
