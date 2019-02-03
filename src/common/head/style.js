import styled from 'styled-components';

export const HeadWrapper = styled.div`
  width: 100%;
  height: 36px;
  line-height: 36px;
  background-color: #1890ff;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
`;

export const CityChange = styled.div`
  width: auto;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  float: left;
  margin-left: 150px;
  cursor: pointer;
  position: relative;
  &:hover {
      color: yellow;
      transition: color 0.3s;
    }
`;

export const CityChoose = styled.div`
  background: none 0px 0px repeat scroll rgb(255, 255, 255);
  border: 1px solid rgb(189, 189, 191);
  top: 35px;
  color: rgb(0, 0, 0);
  padding: 0px 5px;
  position: absolute;
  width: 820px;
  z-index: 999999;
  font-weight: normal;
  top: 36px !important;
  left: 0px!important;
  border-top: none !important;
  font-size: 14px!important;
  line-height: 32px!important;
  .triangle {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 6px solid #fff;
    margin-left: 30px;
    position: absolute;
    top: -6px;
  }
  .city_name {
    line-height: 36px;
    padding-left: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    clear: both;
    font-size: 18px;
    background: transparent;
  }
  ul {
    clear: both;
    overflow: hidden;
    min-height: 100px;
    padding-top: 10px;
    li {
      background-color: #FFF;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: block;
      border: 1px solid #ddd;
      line-height: 58px!important;
      font-size: 18px;
      text-align: center;
      font-weight: normal;
      vertical-align: middle;
      cursor: pointer;
      float: left;
      text-align: center;
      color: #666;
      margin: 0 10px 10px 10px;
      &:hover {
        box-shadow: 0 0 20px #ddd;
        color: #000;
        transition: all 0.4s;
      }
    }
  }
}
`;

export const RecruitInfo = styled.div`
  width: auto;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  float: right;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
      color: yellow;
      transition: color 0.3s;
    }
`;

export const CompanyServer = styled.div`
  width: auto;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  float: right;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
      color: yellow;
      transition: color 0.3s;
    }
`;

export const PersonCenter = styled.div`
  width: auto;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  float: right;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
      color: yellow;
      transition: color 0.3s;
    }
`;

export const RegisterLogin = styled.div`
  width: auto;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  float: right;
  margin-right: 30px;
  cursor: pointer;
  a {
    color: #fff;
    &:hover {
      color: yellow;
    }
  }
`;

export const TelephoneContact = styled.div`
  width: auto;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  float: right;
  margin-right: 130px;
  cursor: pointer;
  &:hover {
      color: yellow;
      transition: color 0.3s;
    }
`;
