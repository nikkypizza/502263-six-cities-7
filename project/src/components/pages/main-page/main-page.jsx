import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { MapCitySetting, TABS_CITIES } from '../../../const';
import { fetchOffers } from '../../../api/api-actions.js';
import { getActiveCity, getAdsFilteredByCity, getFocusedAdId } from '../../../store/ui/selectors.js';
import { getAdsAreLoaded } from '../../../store/data/selectors.js';

import LoadWrapper from '../../load-wrapper/load-wrapper.jsx';
import Header from '../../header/header';
import Tabs from '../../tabs/tabs.jsx';
import CityPlaces from '../../city-places/city-places.jsx';
import CityPlacesEmpty from '../../city-places-empty/city-places-empty.jsx';
import Map from '../../map/map.jsx';


function MainPage() {
  const dispatch = useDispatch();

  const ads = useSelector(getAdsFilteredByCity);
  const activeCity = useSelector(getActiveCity);
  const focusedAdId = useSelector(getFocusedAdId);
  const adsAreLoaded = useSelector(getAdsAreLoaded);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={TABS_CITIES} />
        <div className="cities">
          <div className={cn('cities__places-container', 'container', { 'cities__places-container--empty': !ads.length })}>
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

export default MainPage;
