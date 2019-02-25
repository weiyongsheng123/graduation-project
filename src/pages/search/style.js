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

export const SearchWrapper = styled.div`
  overflow: hidden;
  background: #f4f6f9;
`;

export const InputArea = styled.div`
  width: 1050px;
  height: 56px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  .ant-input-group-compact {
    width: 600px;
    height: 56px;
    margin-left: 30px;
    display: inline-block !important;
    vertical-align: top;
    box-shadow: 0 0 30px #eee;
    &:hover {
      box-shadow: 0 0 30px #333;
      transition: color 0.3s;
    }
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
    width: 430px !important;
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    border-radius: 10px;
  }
  .ant-btn-primary {
    width: 96px;
    height: 55px;
    line-height: 55px;
    .anticon-search {
      font-size: 24px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 56px;
  display: inline-block;
  margin-left: 160px;
`;

export const ChooiceArea = styled.div`
  width: 1050px;
  height: auto;
  overflow: hidden;
  margin: auto;
`;

export const RadioArea = styled.div`
  width: 1050px;
  height: auto;
  overflow: hidden;
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 0 30px #eee;
  .label {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    margin-left: 15px;
    margin-right: 20px;
    display: inline-block;
    vertical-align: top;
    color: #333;
    font-weight: 550;
  }
  .ant-radio-group {
    display: inline-block;
    width: 900px;
    height: auto;
    .ant-radio-wrapper {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #666;
      &.area {
        width: 80px;
      }
    }
  }
`;

export const DetailArea = styled.div`
  width: 1050px;
  height: auto;
  overflow: hidden;
  margin: auto;
  background: #fff;
`;

export const DetailTitle = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 16px;
  line-height: 50px;
  border-bottom: 5px solid #f4f6f9;
  .tip {
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    font-weight: 550;
    display: inline-block;
    border-right: 2px solid #f0f0f0;
    box-sizing: border-box;
    padding-right: 20px;
  }
  .click {
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    display: inline-block;
    border-right: 2px solid #f0f0f0;
    cursor: pointer;
    &:hover {
      color: #1890ff;
      transition: color 0.3s;
    }
  }
`;

export const DetailList = styled.ul`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 0;
`;

export const DetailEmpty =styled.div`
  width: 100%;
  height: 200px;
  background: url(${(props)=>props.imgUrl});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const DetailItem = styled.li`
  width: 100%;
  height: 120px;
  border-bottom: 5px solid #f4f6f9;
  box-sizing: border-box;
  padding: 10px 20px 5px 25px;
  position: relative;
  cursor: pointer;
  &:hover {
    .hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
    .ant-btn-primary {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  .hover {
    color: #1890ff;
    display: block;
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    font-size: 35px;
  }
  h4 {
    display: block;
    float: left;
    height: 35px;
    max-width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 35px;
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 0px;
  }
  .companyName {
    display: block;
    float: right;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
    .iconfont {
      color: skyblue;
      margin-right: 5px;
    }
  }
  .need {
    clear: both;
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 0px;
    span {
      border-left: 1px solid #666;
      padding-right: 15px;
      padding-left: 15px;
      &:first-of-type {
        padding-left: 0px;
        border-left: 0;
      }
      &.right {
        border-left: none;
        padding-right: 0;
        padding-left: 0;
        float: right;
        font-size: 12px;
      }
    }
  }
  .salary {
    clear: both;
    display: inline-block;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    font-weight: 550;
    color: #ff5959;
    margin-bottom: 0px;
    .iconfont {
      color: #ff5959;
    }
  }
  .continue {
    display: inline-block;
    float: right;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #666;
    vertical-align: bottom;
    margin-bottom: 0px;
  }
  .ant-btn-primary {
    display: inline-block;
    opacity: 0;
    float: right;
    margin-right: 50px;
    vertical-align: bottom;
    margin-top: -7px;
  }
`;

export const PageArea = styled.div`
  width: 1050px;
  height: 50px;
  margin: auto;
  background: #fff;
`;

export const Pages = styled.div`
  width: auto;
  height: 50px;
  display: table;
  margin: auto;
  padding-top: 10px;
  box-sizing: border-box;
`;

export const PageLast = styled.span`
  width: 64px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #e8e8e8;
  display: inline-block;
  background-color: #fff;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #1890ff;
    border-color: #1890ff;
    transition: color 0.2s;
  }
`;

export const PageItem = styled.span`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #e8e8e8;
  display: inline-block;
  background-color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #1890ff;
    border-color: #1890ff;
    transition: color 0.2s;
  }
  &.active {
    color: #1890ff;
    border-color: #1890ff;
  }
`;

export const PageNext = styled.span`
  width: 64px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #e8e8e8;
  display: inline-block;
  background-color: #fff;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #1890ff;
    border-color: #1890ff;
    transition: color 0.2s;
  }
`;

export const PageTotal = styled.span`
  height: 32px;
  line-height: 32px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

export const PageInput = styled.input`
  width: 52px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #e8e8e8;
  display: inline-block;
  background-color: #fff;
`;

export const PageEnd = styled.span`
  height: 32px;
  line-height: 32px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

export const PageSumbit = styled.button`
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #e8e8e8;
  display: inline-block;
  background-color: #fff;
  cursor: pointer;
`;
