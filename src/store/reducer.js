import { combineReducers } from 'redux-immutable';
import { reducer as identReducer } from '../common/identCode/store';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as headReducer } from '../common/head/store';
import { reducer as ajaxReducer } from '../common/ajax/store';
import { reducer as suspensionReducer } from '../common/suspension/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as companyReducer } from '../pages/company/store';
import { reducer as searchReducer } from '../pages/search/store';
import { reducer as registerReducer } from '../pages/register/store';
import { reducer as feedbackReducer } from '../pages/feedback/store';
import { reducer as helpReducer } from '../pages/help/store';
import { reducer as resumeReducer } from '../pages/resume/store';
import { reducer as positionReducer } from '../pages/position/store';

export default combineReducers({
  ident: identReducer,
  header: headerReducer,
  head: headReducer,
  ajax: ajaxReducer,
  login: loginReducer,
  home: homeReducer,
  suspension: suspensionReducer,
  company: companyReducer,
  search: searchReducer,
  register: registerReducer,
  feedback: feedbackReducer,
  help: helpReducer,
  resume: resumeReducer,
  position: positionReducer
})
