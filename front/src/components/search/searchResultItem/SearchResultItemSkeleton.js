import {
  SearchResultItemBlock,
  ImageWrap,
  Description,
  Name,
  HashtagLIst,
  SubSection,
} from './SearchResultItem';
import styled, { keyframes } from 'styled-components';

const SearchResultItemSkeleton = () => {
  return (
    <SearchResultItemBlock>
      <ImageWrap>
        <SkeletonDiv width={60} height={60} />
      </ImageWrap>
      <div>
        <HashtagLIst>
          <SkeletonDiv width={200} height={24} />
        </HashtagLIst>
        <Description>
          <SkeletonDiv width={100} height={16} />
        </Description>
        <Name>
          <SkeletonDiv width={150} height={16} />
        </Name>
        <SkeletonDiv width={120} height={16} />
        <SubSection>
          <SkeletonDiv width={120} height={16} />
        </SubSection>
      </div>
    </SearchResultItemBlock>
  );
};

const skeletonGradient = keyframes`
   0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

const SkeletonDiv = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
`;

export default SearchResultItemSkeleton;
