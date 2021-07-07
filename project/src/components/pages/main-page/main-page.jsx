import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func, number, string } from 'prop-types';
import cn from 'classnames';

import { adPropTypes } from '../../../propTypes/ad.js';
import { MapCitySetting, TABS_CITIES } from '../../../const';
import { filterAdsByCity } from '../../../util.js';
import { fetchOffers } from '../../../api/api-actions.js';

import LoadWrapper from '../../load-wrapper/load-wrapper.jsx';
import Header from '../../header/header';
import Tabs from '../../tabs/tabs.jsx';
import CityPlaces from '../../city-places/city-places.jsx';
import CityPlacesEmpty from '../../city-places-empty/city-places-empty.jsx';
import Map from '../../map/map.jsx';


function MainPage({ ads, activeCity, focusedAdId, adsAreLoaded, loadAds }) {
  useEffect(() => {
    loadAds();
  }, [loadAds]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={TABS_CITIES} />
        <div className="cities">
          <div className={cn('cities__places-container', 'container', {'cities__places-container--empty': !ads.length})}>
            <section className={ads.length ? 'cities__places places' : 'cities__no-places'}>
              <LoadWrapper isLoad={adsAreLoaded}>
                {ads.length ?
                  <CityPlaces ads={ads} activeCity={activeCity} /> :
                  <CityPlacesEmpty activeCity={activeCity} />}
              </LoadWrapper>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {ads.length && <Map city={MapCitySetting[activeCity.toUpperCase()]} ads={ads} focusedAdId={focusedAdId} />}
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
  focusedAdId: number,
  adsAreLoaded: bool,
  loadAds: func,
};

const mapStateToProps = ({ ads, activeCity, focusedAdId, adsAreLoaded }) => ({
  ads: filterAdsByCity(ads, activeCity),
  activeCity,
  focusedAdId,
  adsAreLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadAds() {
    dispatch(fetchOffers());
  },
});

export { MainPage };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
