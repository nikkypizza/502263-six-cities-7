import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';

import { changeCity } from '../../store/action';

import TabsList from '../tabs-list/tabs-list';
import { getActiveCity } from '../../store/ui/selectors';


function Tabs({ cities, activeCity, changeCity }) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <TabsList cities={cities} activeCity={activeCity} onClick={changeCity} />
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = {
  cities: arrayOf(string),
  activeCity: string,
  changeCity: func,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(changeCity(city));
  },
});

export { Tabs };
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

