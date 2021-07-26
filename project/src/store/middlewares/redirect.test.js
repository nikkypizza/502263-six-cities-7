import redirect from './redirect';
import {redirectTo} from '../action';
import {AppRoute} from '../../const';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('../../services/browser-history', () => fakeHistory);

describe('Middleware: redirect', () => {
  it('action should be passed to next middleware', () => {
    const {invoke, next} = mockRedux();
    const action = redirectTo(AppRoute.ROOT);

    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const {invoke} = mockRedux();
    invoke(redirectTo(AppRoute.LOGIN));
    expect(fakeHistory.location.pathname).toBe(AppRoute.LOGIN);

    invoke(redirectTo(AppRoute.NOT_FOUND));
    expect(fakeHistory.location.pathname).toBe(AppRoute.NOT_FOUND);
  });

  it('should not redirect due to bad action', () => {
    const url = '/test-url';
    const {invoke} = mockRedux();

    invoke({type: 'NON_EXISTING_ACTION', payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
