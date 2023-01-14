import { useState } from "react";
import {
  AiOutlineCreditCard,
  AiOutlineFileAdd,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { SkinConcerns, SkinModalState, SkinTypes } from "../../atoms";
import { DropOpen, RecommendImages, RefreshIcon } from "../../utils";
import RecommendDatas from "../Datas/RecommendDatas";
import RecommendModal from "./RecommendModal";

const Wrapper = styled.div`
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
`;

const ForU = styled.span`
  display: inline-block;
  margin: 0 1rem 1rem 0;
  padding: 0.6rem 1rem;
  vertical-align: top;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.3);
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
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
  text-decoration: underline;
  border: none;
  background: transparent;
  cursor: pointer;
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
  & ~ & {
    margin-left: 1rem;
  }
`;

const ItemArea = styled.div`
  display: inline-block;
  margin: -5rem 0 0 0;
`;

const Items = styled.div`
  float: left;
  width: calc(100% / 3 - 1.6rem);
  margin: 0 0.8rem 5rem 0.8rem;
  border-radius: 0.5rem;
  &:hover {
    outline: 1px solid #118168;
  }
`;

const Imgs = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  z-index: 2;
  &.front {
    opacity: 1;
  }
  &.back {
    opacity: 0;
  }
`;

const ImgUtil = styled.div`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0.6rem;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.1rem;
  width: 100%;
  z-index: 2;
  cursor: pointer;
  .icon {
    width: 100%;
    height: 4.4rem;
    color: #fff;
    padding: 0.6rem 0;
    margin: 0 auto;
    background: rgba(34, 34, 34, 0.5);
  }
`;

const ImageArea = styled.div`
  position: relative;
  height: 41.6rem;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fafafa;
    border-radius: 0.5rem 0.5rem 0 0;
    z-index: 5;
    mix-blend-mode: multiply;
  }

  &:hover > ${ImgUtil} {
    display: flex;
  }

  &:hover {
    .front {
      opacity: 0;
    }
    .back {
      opacity: 1;
      animation: transformAnimation 0.3s;
    }
  }

  /**
   * 처음에 뒷 배경 이미지 자체를 180 반전시킨 이미지로 시작해서
   * 원래 이미지 모양인 0deg로 돌려준다. 
   */
  @keyframes transformAnimation {
    0% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;

const Contents = styled.div`
  margin: 1rem 1rem 5rem 1rem;
  font-size: 1.6rem;
  color: #333;
`;

const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TagArea = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;
const HashTag = styled.span`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10rem;
  padding: 0.1rem 1rem;
  & ~ & {
    margin-left: 0.6rem;
  }
`;

const Footer = styled(Inner)`
  text-align: center;
  margin-bottom: 5rem;
`;

const NextBtn = styled.button`
  position: relative;
  padding-left: 3rem;
  width: 29rem;
  height: 4.8rem;
  line-height: 4.8rem;
  border: 1px solid #ccc;
  font-size: 1.4rem;
  color: #222;
  text-align: center;
  background-color: #fff;
  border-radius: 2.4rem;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: url(${RefreshIcon()});
  }
  span {
    margin-left: 1rem;
    strong {
      font-weight: 700;
    }
  }
`;

function RecommendCustomers() {
  const type = useRecoilValue(SkinTypes);
  const concerns = useRecoilValue(SkinConcerns);
  const [modalOpen, setModalOpen] = useRecoilState(SkinModalState);
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  const length = RecommendDatas().length;
  const offset = 6;
  const [page, setPage] = useState(0);
  const nextPage = () =>
    setPage((prev) => (prev + 1 >= length / offset ? 0 : prev + 1));
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
            <SelectorBtn onClick={toggleModal} afterImg={DropOpen()}>
              {type}
            </SelectorBtn>{" "}
            피부와
            <SelectorBtn onClick={toggleModal} afterImg={DropOpen()}>
              {concerns.map((c, idx) =>
                idx + 1 === concerns.length ? c : `${c} / `
              )}
            </SelectorBtn>
            고민에 추천드려요
          </RecommendSelector>
        </Inner>
      </Top>
      <Inner>
        <ItemArea>
          {RecommendDatas() &&
            RecommendDatas()
              .splice(page * offset, page * offset + offset)
              .map((data, idx) => (
                <Items key={data.id + idx}>
                  <ImageArea>
                    <Imgs>
                      <Img
                        className="front"
                        src={RecommendImages(data.frontImg || "")}
                        alt={data.name}
                      />
                      <Img
                        className="back"
                        src={RecommendImages(data.backImg || "")}
                        alt={data.name}
                      />
                    </Imgs>
                    <ImgUtil>
                      <AiOutlineFileAdd className="icon" />
                      <AiOutlineHeart className="icon" />
                      <AiOutlineShoppingCart className="icon" />
                      <AiOutlineCreditCard className="icon" />
                    </ImgUtil>
                  </ImageArea>
                  <Contents>
                    <Name>{data.name}</Name>
                    <TagArea>
                      {data.hashTag.map((hashTag, idx) => (
                        <HashTag key={`hashTag${idx}`}>#{hashTag}</HashTag>
                      ))}
                    </TagArea>
                  </Contents>
                </Items>
              ))}
        </ItemArea>
      </Inner>
      <Footer>
        <NextBtn onClick={nextPage}>
          새로운 추천을 받고싶어요
          <span>
            <strong>{page + 1}</strong> / {length / offset}
          </span>
        </NextBtn>
      </Footer>

      {modalOpen ? <RecommendModal /> : null}
    </Wrapper>
  );
}

export default RecommendCustomers;
