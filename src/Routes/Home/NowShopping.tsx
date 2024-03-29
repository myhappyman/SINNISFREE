import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineFileAdd,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineCreditCard,
  AiFillStar,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import data from "../Datas/NowShoppingDatas";
import { AddMoreIcon, moneyUnit, NowShoppingImg } from "../../utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NowShopping() {
  const SlideCnt = 8;
  const dataLen = Math.floor(data().length / 8);

  const [leaving, setLeaving] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isRight, setIsRight] = useState(1); // left: -1, right: 1

  const slideChange = (num: number) => {
    if (leaving) return;
    setLeaving(true);
    setIsRight(num);
    if (num > 0) {
      setActiveSlide((prev) => (prev + 1 === dataLen ? 0 : prev + 1));
    } else {
      setActiveSlide((prev) => (prev === 0 ? dataLen - 1 : prev - 1));
    }
  };

  return (
    <Wrapper>
      <Inner>
        <Title>
          <h1>지금이 쇼핑찬스</h1>
          <AddView to="#">특가 바로가기</AddView>
        </Title>
        <SlideControls>
          <SlideBtn onClick={() => slideChange(-1)} className="left">
            <AiOutlineLeft className="icon" />
          </SlideBtn>
          <SlideBtn onClick={() => slideChange(1)} className="right">
            <AiOutlineRight className="icon" />
          </SlideBtn>
        </SlideControls>
        <AnimatePresence
          initial={false}
          onExitComplete={() => setLeaving(false)}
          custom={isRight}
        >
          <GridArea
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // transition={{ type: "tween", duration: 0.6 }}
            transition={{
              x: { type: "tween", stiffness: 600, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            key={activeSlide}
          >
            {data() &&
              data().length > 0 &&
              data()
                .slice(
                  activeSlide * SlideCnt,
                  SlideCnt * activeSlide + SlideCnt
                )
                .map((shopping) => {
                  return (
                    <Item key={shopping.id}>
                      <ImgArea>
                        <Imgs>
                          <Img
                            className="front"
                            src={NowShoppingImg(shopping.frontImg || "")}
                            alt={shopping.name}
                          />
                          <Img
                            className="back"
                            src={NowShoppingImg(shopping.backImg || "")}
                            alt={shopping.name}
                          />
                        </Imgs>
                        <ImgUtil>
                          <AiOutlineFileAdd className="icon" />
                          <AiOutlineHeart className="icon" />
                          <AiOutlineShoppingCart className="icon" />
                          <AiOutlineCreditCard className="icon" />
                        </ImgUtil>
                      </ImgArea>
                      <Contents>
                        <Name>{shopping.name}</Name>
                        <Price>
                          <NowPrice>
                            {moneyUnit(shopping.price.nowPrice)}
                          </NowPrice>
                          {shopping.price.oriPrice && (
                            <OriPrice>
                              {moneyUnit(shopping.price.oriPrice)}
                            </OriPrice>
                          )}
                          {shopping.price.disCountRate && (
                            <DisCountRate>
                              {shopping.price.disCountRate}%
                            </DisCountRate>
                          )}
                        </Price>
                        <Grade>
                          <AiFillStar color={"#118168"} />
                          {shopping.star}(
                          {moneyUnit(shopping.starPointNumberOfPeople)})
                        </Grade>
                      </Contents>
                    </Item>
                  );
                })}
          </GridArea>
        </AnimatePresence>
      </Inner>
    </Wrapper>
  );
}

export default NowShopping;

const rowVariants = {
  hidden: (right: number) => {
    return {
      x: right === 1 ? 2000 : -2000,
      opacity: 0,
    };
  },
  visible: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (right: number) => {
    return {
      zIndex: 0,
      x: right === 1 ? 2000 : -2000,
      opacity: 0,
    };
  },
};

const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
`;

const Inner = styled.div`
  position: relative;
  width: 128rem;
  margin: 9rem auto 7.6rem auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 3.2rem;
  }
`;

const AddView = styled(Link)`
  position: absolute;
  top: 1.8rem;
  right: 0;
  padding: 0 3rem 0.2rem 0;
  font-size: 1.6rem;
  background: url(${AddMoreIcon()}) no-repeat 100% 100%;
  color: #333;
  cursor: pointer;
`;

const SlideControls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 138rem;
  z-index: 10;

  @media screen and (max-width: 1500px) {
    width: 128rem;
  }

  @media screen and (max-width: 1380px) {
    width: 114rem;
  }
`;

const SlideBtn = styled.div`
  position: absolute;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  line-height: 4.4rem;
  background: rgba(0, 0, 0, 0.3);
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  &.left {
    left: -5rem;
    right: auto;
  }
  &.right {
    right: -5rem;
    left: auto;
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    font-size: 2rem;
  }
`;

const GridArea = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 2rem;
  margin: 3.2rem 0;
  padding: 0 0.1rem;
`;

const Item = styled.div`
  height: 52rem;
  border-radius: 0.5rem;
  &:hover {
    outline: 1px solid #118168;
  }
`;

const Imgs = styled.div`
  position: relative;
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

const Img = styled.img`
  display: block;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  position: absolute;
  top: 0;
  left: 0;
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
  bottom: 0rem;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.1rem;
  width: 100%;
  .icon {
    width: 100%;
    height: 4.4rem;
    color: #fff;
    padding: 0.6rem 0;
    margin: 0 auto;
    background: rgba(34, 34, 34, 0.5);
    cursor: pointer;
  }
`;

const ImgArea = styled.div`
  position: relative;
  height: 30.6rem;
  background: #fafafa;
  border-radius: 0.5rem 0.5rem 0 0;

  //child hover는 이런식으로 해준다. //대신 child가 먼저 선언되어있어야함.
  &:hover > ${ImgUtil} {
    display: flex;
  }
`;

const Contents = styled.div`
  height: 20.8rem;
  padding: 2rem 2.4rem 0;
`;

const Name = styled.span`
  margin: 0 0 3px;
  font-size: 1.6rem;
  color: #333;
`;

const Price = styled.div``;

const NowPrice = styled.strong`
  font-weight: bold;
  color: #222;
  line-height: 1.6;
  font-size: 2.6rem;
`;

const OriPrice = styled.span`
  margin: 0 3px 0 4px;
  color: #999;
  font-size: 1.9rem;
  text-decoration: line-through;
`;

const DisCountRate = styled.span`
  font-size: 2.6rem;
  color: #d62136;
`;

const Grade = styled.div`
  font-size: 1.4rem;
  color: #777;
`;
