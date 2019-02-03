import { CHANGE_CITY, CHANGE_SHOW } from './actionTypes';

export const changeShow = (show) => ({
  type: CHANGE_SHOW,
  show
})

export const changeCity = (city) => ({
  type: CHANGE_CITY,
  city
});

