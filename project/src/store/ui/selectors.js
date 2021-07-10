import { NameSpace } from '../root-reducer';

const getActiveCity = (state) => state[NameSpace.UI].activeCity;
const getAdSortingType = (state) => state[NameSpace.UI].adSortingType;
const getFocusedAdId = (state) => state[NameSpace.UI].focusedAdId;

export { getActiveCity, getAdSortingType, getFocusedAdId };
