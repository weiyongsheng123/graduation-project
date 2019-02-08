import { CHANGE_PAGE, CHANGE_TOTAL_PAGE } from './actionTypes';

export const changeTotalPages = (list) => ({
  type: CHANGE_TOTAL_PAGE,
  totalPages: Math.ceil(list.length /10 )
});

export const changePages = (page) => ({
  type: CHANGE_PAGE,
  page
});
