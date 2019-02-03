import { combineReducers } from 'redux-immutable';
import { reducer as identReducer } from '../common/identCode/store';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as headReducer } from '../common/head/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as homeReducer } from '../pages/home/store';

export default combineReducers({
  ident: identReducer,
  header: headerReducer,
  head: headReducer,
  login: loginReducer,
  home: homeReducer
})
