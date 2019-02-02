import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const SearchWrapper = styled.div`
  width: 1050px;
  height: auto;
  margin: auto;
  overflow: hidden;
`;

export const InputArea = styled.div`
  width: 650px;
  height: 240px;
  box-shadow: 0 0 30px #eee;
  margin-left: 19px;
  margin-top: 25px;
  margin-bottom: 30px;
  background: #fff;
  display: inline-block;
  overflow: hidden;
  .ant-input-group-compact {
    width: 600px;
    height: 56px;
    margin-left: 40px;
    margin-top: 25px;
    .ant-select-selection {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      .ant-select-selection__rendered {
        height: 56px;
        line-height: 56px;
      }
    }
  }
  .ant-input {
    width: 400px !important;
    height: 56px;
    line-height: 56px;
    font-size: 16px;
  }
  .ant-btn-primary {
    width: 96px;
    height: 55px;
    line-height: 55px;
    .anticon-search {
      font-size: 24px;
    }
  }
  .ant-cascader-picker {
    width: 370px !important;
    margin-left: 20px;
    margin-top: 40px;
    .ant-cascader-input {
      width: 370px !important;
      box-sizing: border-box;
    }
  }
  .ant-select-enabled {
    &.selectMoney {
      width: 220px !important;
      box-sizing: border-box;
      margin-left: 20px;
      margin-top: 40px;
      height: 56px;
      vertical-align: top;
      .ant-select-selection {
        width: 220px;
        height: 56px;
        box-sizing: border-box;
        line-height: 56px;
        .ant-select-selection__rendered {
          height: 56px;
          line-height: 56px;
          font-size: 16px;
        }
      }
    }
  }
`;

export const SuggestOption = styled.div`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SuggestItem = styled.span`
  width: auto;
  height: 30px;
  line-height: 30px;
  color: #777;
  margin-left: 20px;
`;

export const LogoCityArea = styled.div`
  width: 300px;
  height: 180px;
  margin-top: 55px;
  margin-left: 60px;
  display: inline-block;
  vertical-align: top;
  background: #fff;
  box-shadow: 0 0 30px #eee;
  img {
    width: 180px;
    height: 80px;
    display: inline-block;
    margin: 50px 20px 60px 20px;
  }
  h3 {
     width: 80px;
     height: 60px;
     color: #1a6cb2 !important;
     line-height: 60px;
     font-size: 24px;
     font-weight: bold;
     margin-bottom: 0px;
     display: inline-block;
     vertical-align: middle;
  }
`;

export const AdvertiseMent = styled.div `
  width: 1050px;
  height: auto;
  margin-bottom: 30px;
  box-shadow: 0 0 30px #eee;
  background: #fff;
  margin: auto;
`;

export const AdvertiseItem = styled.a`
  display: block;
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
  background: url(${(props) => props.imgUrl});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const NewsArea = styled.div `
  width: 1150px;
  height: auto;
  margin-bottom: 30px;
  margin: auto;
  overflow: hidden;
`;

export const NewsH3 = styled.h3`
  display: block;
  margin: 0 auto;
  width: 286px;
  height: 94px;
  line-height: 94px;
  text-align: center;
  color: #333;
  font-size: 24px;
  position: relative;
  font-weight: 700;
  font-family: PingFang SC,Microsoft YaHei;
  box-sizing: border-box;
  cursor: pointer;
  &:before {
    width: 80px;
    height: 1px;
    content: "";
    background: #ccc;
    position: absolute;
    display: block;
    top: 47px;
    left: 0px;
  }
  &:after {
    width: 80px;
    height: 1px;
    content: "";
    background: #ccc;
    position: absolute;
    display: block;
    top: 47px;
    right: 0px;
  }
`;

export const NewsItem = styled.div`
  float: left;
  width: 340px;
  height: 170px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0 0 30px #eee;
  background: #fff;
  cursor: pointer;
  margin-left: 40px;
  &:hover {
    box-shadow: 0px 5px 20px #333;
  }
  h3 {
    color: #333;
    max-width: 160px;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: inline-block;
    margin: 20px 0 0 25px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: #2d8cf0;
    }
  }
  .salary {
    color: #ff5959;
    float: right;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    margin-right: 10px;
    vertical-align: middle;
    cursor: pointer;
  }
  .areaStudyExper {
    clear: both;
    float: left;
    font-size: 14px;
    color: #666;
    margin: 15px 0px 0px 17px;
    padding: 8px;
    background: none;
    outline: none;
    border: none;
    vertical-align: middle;
    cursor: pointer;
    text-align: center;
  }
  .hr {
    clear: both;
  }
  h4 {
    clear: both;
    float: left;
    font-size: 15px;
    color: #666;
    margin-left: 25px;
    margin-bottom: 5px;
    background: none;
    outline: none;
    border: none;
    vertical-align: middle;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    &:hover {
      color: #1787f8;
    }
  }
  .desc {
    clear: both;
    float: left;
    font-size: 12px;
    color: #666;
    margin-left: 25px;
  }
`;

export const ScrollTop = styled.div`
  position: fixed;
  width: 45px;
  height: 45px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  bottom: 68px;
  right: 40px;
  text-align: center;
  background: transparent;
  .iconfont {
    font-size: 50px;
    color: #ccc;
    background: #fff;
  }
`;

export const Suggest = styled.div`
  position: fixed;
  width: 48px;
  height: 40px;
  line-height: 16px;
  color: #FFF;
  text-align: center;
  bottom: 18px;
  right: 40px;
  padding-top: 8px;
  background: #ccc;
`;
