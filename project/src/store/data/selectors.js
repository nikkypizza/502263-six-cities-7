import { NameSpace } from '../root-reducer';

const getAds = (state) => state[NameSpace.DATA].ads;
const getAdsAreLoaded = (state) => state[NameSpace.DATA].adsAreLoaded;
const getFullAdInfoLoaded = (state) => state[NameSpace.DATA].fullAdInfoLoaded;
const getFullAdInfo = (state) => state[NameSpace.DATA].fullAdInfo;
const getAdComments = (state) => state[NameSpace.DATA].adComments;
const getAdsNearby = (state) => state[NameSpace.DATA].adsNearby;

export { getAds, getAdsAreLoaded, getFullAdInfoLoaded, getFullAdInfo, getAdComments, getAdsNearby};
