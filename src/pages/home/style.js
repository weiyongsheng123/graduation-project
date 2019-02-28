import styled from 'styled-components';

export const LoadImgArea = styled.div`
  width: 100%;
  height: 600px;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export const LoadImg = styled.img`
  display: block;
  width: 400px;
  height: 350px;
  margin: auto;
  margin-top: 50px;
`;

export const LoadTitle = styled.h2`
  width: 300px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 80px;
`;

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
    .ant-cascader-picker-label {
      box-sizing: border-box;
      padding-right: 20px;
    }
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
  margin: auto;
`;

export const AdvertiseItem = styled.a`
  display: block;
  width: 100%;
  height: 80px;
  margin-bottom: 5px;
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
  margin-left: 32px;
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
    color: #9b9b9b;
  }
  h4 {
    clear: both;
    float: left;
    font-size: 15px;
    color: #666;
    margin-left: 25px;
    margin-bottom: 5px;
    margin-top: 10px;
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

export const AdvertiseOne = styled.div`
  position: fixed;
  top: 145px;
  left: 20px;
  width: 87px;
  height: 207px;
  z-index: 9999;
  a {
    display: block;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const AdvertiseTwo = styled.div`
  position: fixed;
  top: 145px;
  right: 20px;
  width: 87px;
  height: 207px;
  z-index: 9999;
  a {
    display: block;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const SomethingWrapper = styled.div`
  width: 1050px;
  height: auto;
  margin-bottom: 30px;
  margin: auto;
  overflow: hidden;
`;

export const WorkInfo = styled.div`
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 12px;
  box-shadow: 0 0 30px #eee;
  float: left;
  width: 496px;
  height: auto;
  overflow: hidden;
  color: #666;
  box-sizing: border-box;
  padding-bottom: 20px;
  .tle {
    display: block;
    font-size: 16px;
    height: 45px !important;
    line-height: 45px !important;
    text-indent: 0 !important;
    margin: 0 20px;
    border-bottom: 1px solid #ddd;
    color: #ff6000 !important;
    font-weight: bold;
    font-family: "microsoft yahei" !important;
  }
  .msg {
    height: 70px;
    margin: 10px 20px 0;
    padding-left: 70px;
    background: url(//img01.51jobcdn.com/im/2016/home/cuad.png) no-repeat;
    font-size: 12px;
    color: #666;
    line-height: 20px;
    font-family: "microsoft yahei" !important;
    .tname {
      float: left;
      max-width: 100%;
      font-weight: bold;
      color: #666;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: "microsoft yahei" !important;
    }
    p {
      text-indent: 2em;
      clear: both;
      padding-top: 5px;
      font-size: 12px;
      color: #666;
      line-height: 20px;
      a {
        color: #ff6000;
        text-decoration: none;
      }
    }
  }
  .dcon {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    line-height: 23px;
    overflow: hidden;
    font-size: 12px;
    color: #666;
    font-family: "microsoft yahei" !important;
    li {
      width: 218px;
      margin-left: 20px;
      float: left;
      height: 28px;
      line-height: 28px;
      font-size: 13px;
      background: url(//img01.51jobcdn.com/im/2016/temp/libg.png) left center no-repeat;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      list-style: none;
    a {
      max-width: 170px;
      float: left;
      max-width: 200px;
      font-size: 13px;
      color: #666;
      margin-left: 10px;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: "microsoft yahei" !important;
   }
   img {
     border: 0 none;
   }
   }
  }
`;

export const InterviewSkill = styled.div`
  margin-bottom: 10px;
  background-color: #fff;
  float: right;
  width: 496px;
  height: auto;
  box-shadow: 0 0 30px #eee;
  overflow: hidden;
  font-size: 12px;
  color: #666;
  box-sizing: border-box;
  padding-bottom: 15px;
  .tle {
    display: block;
    font-size: 16px;
    height: 45px !important;
    line-height: 45px !important;
    text-indent: 0 !important;
    margin: 0 20px;
    border-bottom: 1px solid #ddd;
    color: #ff6000 !important;
    font-weight: bold;
    font-family: "microsoft yahei" !important;
  }
  dd {
    height: 148px;
    background-color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    div {
      float: left;
      width: 170px;
      text-align: center;
      margin-top: 20px;
      color: #333;
      line-height: 14px;
      font-size: 12px;
      a {
        color: #000;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        img {
          display: inline;
          border: 0;
          outline: none;
          width: 144px;
          height: 124px;
          color: #000;
        }
        &.desc {
          width: 170px;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    ul {
      float: left;
      margin-top: 16px;
      list-style: none;
      width: 280px;
      li {
        width: 280px;
        background-position: -174px -207px;
        padding-left: 20px;
        height: 28px;
        line-height: 26px;
        font-size: 14px;
        background: url(//img02.zhaopin.cn/2012/img/index/s.png) no-repeat -166px -207px;
        overflow: hidden;
        list-style: none;
        box-sizing: border-box;
        a {
          display: block;
          height: 21px;
          line-height: 20px;
        }
      }
    }
  }
`;
