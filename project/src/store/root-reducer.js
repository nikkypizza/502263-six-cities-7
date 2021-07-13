import { combineReducers } from 'redux';
import { data } from './data/data';
import { ui } from './ui/ui';
import { user } from './user/user';

const NameSpace = {
  USER: 'USER',
  DATA: 'DATA',
  UI: 'UI',
};

const rootReducer = combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
});

export {NameSpace, rootReducer};
