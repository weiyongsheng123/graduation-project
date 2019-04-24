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

export const AdminWrapper = styled.div`
  overflow: hidden;
`;

export const HeaderArea = styled.div`
  font-size: 14px;
  color: #999;
  background: #f4f6f9;
  letter-spacing: .71px;
  margin: 15px auto;
  zoom: 1;
  width: 1200px;
  height: 52px;
`;

export const Header = styled.span`
  width: 15%;
  height: 52px;
  margin-left: 4%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 50px;
  padding: 0 1em;
  cursor: pointer;
  float: left;
  box-sizing: border-box;
  font-size: 16px;
  letter-spacing: .71px;
  user-select: none;
  &.active {
    color: #2788f3;
    border-bottom: 2px solid #2788f3;
  }
`;

export const TableArea = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 70px;
  overflow: hidden;
  border: 1px solid #f4f6f9;
  .ant-table-wrapper {
    padding-bottom: 70px;
    overflow: hidden;
    position: relative;
    .ant-spin-nested-loading {
      overflow: hidden;
      position: static;
      .ant-spin-container {
        position: static;
        .ant-table {
          .ant-table-thead {
            th {
              text-align: center;
            }
          }
          .ant-table-tbody {
            td {
              max-width: 130px;
              max-height: 200px !important;
              text-align: center;
              word-break: break-word;
              overflow: hidden;
              cursor: pointer;
            }
          }
          .ant-table-placeholder {
            height: 540px;
          }
        }
        .ant-pagination {
          position: absolute;
          bottom: 0px;
          right: 10px;
        }
      }
    }
  }
`;
