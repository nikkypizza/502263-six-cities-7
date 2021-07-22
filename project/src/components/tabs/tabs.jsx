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
        <TabsList cities={cities} activeCity={activeCity} onClick={(city) => dispatch(changeCity(city))} />
      </section>
    </div>
  );
}

Tabs.propTypes = {
  cities: arrayOf(string),
};

export default Tabs;
