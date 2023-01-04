import styled from "styled-components";
import { DropOpen, RecommendImages } from "../../utils";
import RecommendDatas from "../Datas/RecommendDatas";

const Wrapper = styled.div`
  position: relative;
  min-width: 128rem;
  max-width: 192rem;
  background-color: #fff;
`;

const Inner = styled.div`
  width: 128rem;
  margin: 0 auto;
`;

const Top = styled.div`
  padding-top: 64px;
  height: 336px;
  background-image: linear-gradient(109deg, #7e45ea 17%, #2fc39b 88%);
`;

const TitleArea = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 3.8rem;
  outline: 1px solid red;
`;

const ForU = styled.span`
  margin: 0 1rem 1rem 0;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #6a79da;
`;

const Title = styled.h1``;

const RecommendSelector = styled.div`
  background: #fff;
  margin-top: 2.5rem;
  padding: 1rem;
  border-radius: 1rem;
  color: #999;
  font-size: 2.4rem;
  line-height: 2.4;
  text-align: center;

  &::after {
    clear: both;
  }
`;

const SelectorBtn = styled.button<{ afterImg: string }>`
  position: relative;
  padding-right: 2rem;
  font-size: 2.4rem;
  line-height: 2.4;
  border: none;
  background: transparent;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: url(${(props) => props.afterImg});
  }
`;

const Items = styled.div`
  float: left;
  width: 39.4rem;
  & ~ & {
    margin-left: 1.6rem;
  }
`;

const ImageArea = styled.div``;

const Contents = styled.div``;

const Name = styled.div``;
const TagArea = styled.div``;
const HashTag = styled.div``;

function RecommendCustomers() {
  return (
    <Wrapper>
      <Top>
        <Inner>
          <TitleArea>
            <Title>
              <ForU>for U</ForU>고객님에게 딱이에요!
            </Title>
          </TitleArea>
          <RecommendSelector>
            <SelectorBtn afterImg={DropOpen()}>건성</SelectorBtn> 피부와
            <SelectorBtn afterImg={DropOpen()}>모공 주름 탄력</SelectorBtn>
            고민에 추천드려요
          </RecommendSelector>
        </Inner>
      </Top>
      <Inner>
        {RecommendDatas() &&
          RecommendDatas().map((data) => (
            <Items key={data.id}>
              <ImageArea>
                <img src={RecommendImages(data.frontImg)} alt={data.name}></img>
              </ImageArea>
              <Contents>
                <Name>{data.name}</Name>
                <TagArea>
                  {data.hashTag.map((hashTag) => (
                    <HashTag>#{hashTag}</HashTag>
                  ))}
                </TagArea>
              </Contents>
            </Items>
          ))}
      </Inner>
    </Wrapper>
  );
}

export default RecommendCustomers;
