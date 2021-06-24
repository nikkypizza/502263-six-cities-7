import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';

import TabsList from '../tabs-list/tabs-list';


function Tabs({ cities, activeCity, changeCity }) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <TabsList cities={cities} activeCity={activeCity} onClick={changeCity}/>
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

const mapStateToProps = ({ activeCity }) => ({ activeCity });

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

