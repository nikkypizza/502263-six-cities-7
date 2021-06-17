import { AppRoute } from '../../const';
import {getSettingsVariantNames} from '../../util';


const componentVariants = {
  signedIn: {
    actionLinkHref: AppRoute.FAVORITES,
    textNodeClassname: 'header__user-name user__name',
  },
  notSignedIn: {
    actionLinkHref:  AppRoute.LOGIN,
    textNodeClassname: 'header__login',
  },
};

const SignInNames = getSettingsVariantNames(componentVariants);

export {componentVariants, SignInNames};
