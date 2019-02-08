import { fromJS } from 'immutable';
import { CHANGE_PAGE, CHANGE_TOTAL_PAGE } from './actionTypes';

const defaultState = fromJS({
  positionList: [
        {
          position: 'w123123！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'w1111111程师，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'w2222222222师，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: '333333333333333急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: '444444444444444444，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'w555555555555555555555师，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web666666666666666666666急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'we77777777777777777777工程师，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web888888888888888888888888，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web99999999999999999999999999，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'webaaaaaaaaaaaaaaaaaaaa师，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前bbbbbbbbbbbbbbbbbb，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前cccccccccccccccccc！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'wedddddddddddddddddddddd招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前eeeeeeeeeeeeeeeeeeeee，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前fffffffffffffffffffff，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前ggggggggggggggggggg急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前hhhhhhhhhhhhhhhhhhh急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'weiiiiiiiiiiiiiiiiiiii！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'webjjjjjjjjjjjjjjjjjjjjjj招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'webkkkkkkkkkkkkkkkkkkkkkkkk！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'weblllllllllllllllllllll！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'webmmmmmmmmmmmmmmmmmm师，急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'wennnnnnnnnnnnnnnnnnnnn急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        },
        {
          position: 'web前端oooooooooooooooo急招！！！',
          company: '阿里巴巴（杭州）主公司',
          city: '淮南',
          educate: '本科',
          numbers: '2人',
          experience: '3年以上',
          salary: '3000-5000'
        }],
      totalPages: 1,
      page: 1
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return state.set('page',action.page);
    case CHANGE_TOTAL_PAGE:
      return state.set('totalPages',action.totalPages);
    default:
      return state;
  }
};
