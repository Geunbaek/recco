import styled, { keyframes } from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import Image from 'next/image';
import { theme } from '../../../styles/theme';
import {
  removeProductCompareInfoAction,
  checkProductCompareInfoAction,
} from '../../stores/modules/productCompareInfo';
import { useEffect } from 'react';
import { hashtagSplit } from '../../utils/util';
import {
  safeScoreCount,
  normalScoreCount,
  dangerScoreCount,
} from '../../utils/colorByLevel';

const CompareBox = ({ comparBoxOpenHandle }) => {
  const { data, error } = useSelector((state) => state.productCompareInfo);
  const dispatch = useDispatch();

  const productRemoveHandle = (id) => {
    dispatch(removeProductCompareInfoAction(id));
  };

  useEffect(() => {
    dispatch(checkProductCompareInfoAction());
    return () => dispatch(checkProductCompareInfoAction());
  }, []);

  return (
    <CompareBoxBlock>
      <StyledMdOutlineClose size={24} onClick={comparBoxOpenHandle} />
      <Header>
        <MdOutlineShoppingBasket size={30} />
        <span>보관함</span>
      </Header>
      {!data.length ? (
        <TextBlock>보관함에 넣기를 통해 상품을 넣어주세요</TextBlock>
      ) : (
        <ItemTable>
          <thead>
            <tr>
              <th></th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? (
                  <td key={index}>
                    <RemoveButton
                      onClick={() => productRemoveHandle(item.product_num)}
                    >
                      삭제
                    </RemoveButton>
                    <ImageWrapper>
                      <Image
                        src={item.img_url}
                        width={123}
                        height={123}
                        layout="responsive"
                      />
                    </ImageWrapper>
                  </td>
                ) : (
                  <td></td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>브랜드</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? <td key={index}>{item.brand}</td> : <td></td>;
              })}
            </tr>
            <tr>
              <th>제품명</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? <td key={index}>{item.name}</td> : <td></td>;
              })}
            </tr>
            <tr>
              <th>가격</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? <td key={index}>{item.price}</td> : <td></td>;
              })}
            </tr>
            <tr>
              <th>용량</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? <td key={index}>{item.capacity}</td> : <td></td>;
              })}
            </tr>
            <tr>
              <th>#</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? (
                  <td key={index}>{hashtagSplit(item.hashtag).join('\n')}</td>
                ) : (
                  <td></td>
                );
              })}
            </tr>
            <tr>
              <th>안전성분</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? (
                  <td key={index}>{safeScoreCount(item.ingredientList)}</td>
                ) : (
                  <td></td>
                );
              })}
            </tr>
            <tr>
              <th>안전성분</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? (
                  <td key={index}>{normalScoreCount(item.ingredientList)}</td>
                ) : (
                  <td></td>
                );
              })}
            </tr>
            <tr>
              <th>위험성분</th>
              {new Array(3).fill(0).map((_, index) => {
                const item = data[index];
                return item ? (
                  <td key={index}>{dangerScoreCount(item.ingredientList)}</td>
                ) : (
                  <td></td>
                );
              })}
            </tr>
          </tbody>
        </ItemTable>
      )}
    </CompareBoxBlock>
  );
};

const CompareBoxAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const CompareBoxBlock = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 370px;
  height: 680px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.color.yellow2};
  border-radius: 30px;
  padding: 17px 22px 0;
  transform-origin: 100% 100%;
  animation: ${CompareBoxAnimation} 0.5s ease;
  z-index: 3;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const StyledMdOutlineClose = styled(MdOutlineClose)`
  position: absolute;
  top: 20px;
  right: 30px;
  &:hover {
    color: ${({ theme }) => theme.color.orange2};
    cursor: pointer;
  }
`;

const Header = styled.div`
  span {
    margin-left: 8px;
  }
  height: 30px;
  text-align: left;
  line-height: 30px;
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const TextBlock = styled.div`
  height: calc(100% - 61px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemTable = styled.table`
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  border-spacing: 1px;
  background-color: white;
  padding-top: 10px;
  thead td,
  thead th {
    border-top: none;
    background-color: ${({ theme }) => theme.color.yellow2};
  }
  thead td {
    padding: 0 1px;
  }

  td,
  th {
    position: relative;
    width: 22%;
    text-align: center;
    vertical-align: middle;
    white-space: pre-wrap;
    border-bottom: 2px solid #dee2e6;
    border-top: 2px solid #dee2e6;
    color: ${({ theme }) => theme.color.gray1};
  }

  th {
    background-color: #e9ecef;
  }

  tbody td {
    padding: 20px 2px;
  }

  tbody tr:first-child th,
  tbody tr:first-child td {
    margin: 40px 0 20px;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  right: 1px;
  bottom: 0;
  width: calc(100% - 2px);
  height: 15px;
  font-size: 12px;
  z-index: 99;
  font-weight: 900;
  background-color: rgba(252, 196, 25, 0.4);
  transition: all 0.5s ease;
  border-radius: 10px;
  &:hover {
    height: 100%;
    font-size: 18px;
  }
`;

const ImageWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  overflow: hidden;
`;
export default CompareBox;
