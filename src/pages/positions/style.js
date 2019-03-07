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

export const PositionWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const WarnArea = styled.div`
  width: 950px;
  height: auto;
  line-height: 30px;
  background: #FFFAF0;
  font-size: 14px;
  color: #FFB433;
  border: 1px solid #FFDCA0;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  span {
    display: inline-block;
    width: 50px;
    height: 60px;
    margin: 10px 5px 10px 15px;
    font-size: 20px;
    vertical-align: middle;
    text-align: center;
  }
  p {
    display: inline-block;
    width: 840px;
    height: auto;
    font-size: 15px;
    line-height: 30px;
    margin: 10px 0;

  }
`;

export const TitleArea= styled.div`
  width: 1050px;
  height: auto;
  overflow: hidden;
  margin: auto;
  margin-bottom: 30px;
  padding: 25px;
  position: relative;
  background: #fff;
`;

export const TitleContinue = styled.span`
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  color: #1890ff;
  i {
    margin-right: 3px;
  }
`;

export const TitleTitle = styled.p`
  width: 100%;
  height: 50px;
  overflow: hidden;
  .left {
    display: block;
    float: left;
    font-size: 24px;
    font-weight: 550;
    color: #13256A;
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    max-width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "微软雅黑" !important;
  }
  .right {
    display: block;
    float: right;
    font-size: 24px;
    color: #ff5959;
    height: 45px;
    line-height: 45px;
    font-weight: bold;
    vertical-align: bottom;
    margin-right: 250px;
    width: 250px;
    overflow: hidden;
  }
`;

export const TitleCompany = styled.div`
  width: 100%;
  height: 30px;
  overflow: hidden;
  .left {
    display: block;
    float: left;
    font-size: 14px;
    color: #9497A1;;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    max-width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "微软雅黑" !important;
    cursor: pointer;
    &:hover {
      color: #1890ff;
    }
  }
  .right {
    display: block;
    float: right;
    font-size: 14px;
    color: #9497A1;;
    height: 30px;
    line-height: 30px;
    vertical-align: bottom;
    margin-right: 250px;
    width: 250px;
    overflow: hidden;
    span {
      box-sizing: border-box;
      padding: 0 10px;
      border-right: 2px solid #9497A1;;
      &:last-of-type {
        border: 0;
      }
    }
  }
`;

export const TitleButton = styled.div`
  position: absolute;
  right: 65px;
  top: 62px;
  width: 200px;
  height: 50px;
  button {
    width: 100%;
    height: 100%;
  }
`;

export const DetailArea = styled.div`
  width: 1050px;
  height: auto;
  overflow: hidden;
  margin: auto;
`;

export const InfoArea = styled.div`
  width: 730px;
  height: auto;
  box-sizing: border-box;
  float: left;
`;

export const InfoDesc = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 30px #eee;
  padding: 10px;
  padding-left: 20px;
  padding-bottom: 25px;
  box-sizing: border-box;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    p {
      color: #1890ff;
      border-color: #1890ff;
      transition: color 0.3s;
    }
  }
  p {
    width: 80%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    border-bottom: 2px solid #AAA;
    .iconfont {
      margin-right: 5px;
    }
  }
  .content {
    width: 60%;
    height: auto;
    margin-top: 15px;
    font-size: 14px;
    word-wrap: break-word;
    word-break: normal;
  }
`;

export const CompanyArea = styled.div`
  width: 300px;
  height: auto;
  box-sizing: border-box;
  padding-left: 25px;
  padding-top: 15px;
  float: right;
  background: #fff;
  box-shadow: 0 0 30px #eee;
`;

export const CompanyImg = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin-left: 62px;
`;

export const CompanyDetail = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: STXingkai,"华文行楷","华文新魏";
  .iconfont {
    font-size: 22px;
    line-height: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .detail {
    flex: 1;
    font-size: 18px;
    line-height: 30px;
    vertical-align: top;
    max-height: 450px;
    overflow: hidden;
    position: relative;
    &:after {
      content:"...";
      height: 30px;
      width: 18px;
      line-height: 30px;
      position:absolute;
      bottom:0;
      right:0;
      background: #fff;
    }
    &.small {
      font-size: 16px;
    }
  }
`;
