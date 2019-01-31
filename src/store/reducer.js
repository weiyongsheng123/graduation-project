import { combineReducers } from 'redux-immutable';
import { reducer as identReducer } from '../common/identCode/store';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginReducer } from '../pages/login/store';

export default combineReducers({
  ident: identReducer,
  header: headerReducer,
  login: loginReducer
})
