import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';

import { adPropTypes } from '../../../propTypes/ad.js';
import { MapCitySetting, TABS_CITIES } from '../../../const';
import { filterAdsByCity } from '../../../util.js';

import Header from '../../header/header';
import Tabs from '../../tabs/tabs.jsx';
import CityPlaces from '../../city-places/city-places.jsx';
import CityPlacesEmpty from '../../city-places-empty/city-places-empty.jsx';
import Map from '../../map/map.jsx';


function MainPage({ ads, activeCity }) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={TABS_CITIES}/>
        <div className="cities">
          <div className={`cities__places-container container ${ads.length ? '' : 'cities__places-container--empty'}`}>
            <section className={ads.length ? 'cities__places places' : 'cities__no-places'}>
              {ads.length ?
                <CityPlaces ads={ads} activeCity={activeCity} /> :
                <CityPlacesEmpty activeCity={activeCity} />}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {ads.length && <Map city={MapCitySetting[activeCity.toUpperCase()]} ads={ads} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  activeCity: string,
};

const mapStateToProps = ({ ads, activeCity }) => ({
  ads: filterAdsByCity(ads, activeCity),
  activeCity,
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
