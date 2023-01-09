import { useRef, useState } from "react";
import {
  AiOutlineCreditCard,
  AiOutlineFileAdd,
  AiOutlineHeart,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddMoreIcon, BestSellingImages, moneyUnit } from "../../utils";
import { RealTimeSale } from "../Datas/BestSellingDatas";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";

const Wrapper = styled.div`
  position: relative;
  min-width: 128rem;
  max-width: 192rem;
  padding-top: 7.5rem;
  height: 79rem;
  background-color: #fafafa;
`;

const Inner = styled.div`
  width: 128rem;
  margin: 0 auto;
`;

const Header = styled.div``;

const Title = styled.h1`
  font-size: 3.2rem;
  color: #222;
`;

const Tabs = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 128rem;
`;

const Rankings = styled.ul`
  display: inline-block;
  margin: 1.3rem 0 4rem 0;
  border-radius: 2.5rem;
  background-color: #f4f4f4;
  overflow: hidden;
`;

const Rank = styled.li`
  position: relative;
  float: left;
  width: 15.4rem;
  height: 4.8rem;
  line-height: 4.8rem;
  color: #999;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  &.selected {
    color: #118168;
    background: #fff;
    border: 2px solid #118168;
    border-radius: 2.4rem;
    line-height: 4.5rem;
  }
`;

const AddView = styled(Link)`
  position: absolute;
  top: 2.5rem;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 18rem;
  z-index: 10;
`;

const SlideBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  background: rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  .icon {
    font-size: 2rem;
  }
`;

const SlideWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin-top: 3.6rem;
  padding: 1rem 0;
  /*  스크롤터짐 방지 */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: calc(100% / 6 - 0.7rem);
    background: rgba(250, 250, 250, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: calc(100% / 6 - 0.7rem);
    background: rgba(250, 250, 250, 0.5);
  }
`;

const ProductList = styled.ul`
  .swiper_wrapper {
    padding: 1rem;
  }
  .swiper {
    overflow: visible;
  }
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  width: 100%;
  height: 42rem;
  border-radius: 0.5rem;
  &:hover {
    outline: 1px solid #118168;
  }
`;

const Imgs = styled.div`
  position: relative;
  height: 100%;
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
  height: 100%;
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
  bottom: 0;
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

const ImgNumber = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 4.4rem;
  height: 4.4rem;
  text-align: center;
  font-size: 2rem;
  line-height: 4.4rem;
  font-weight: 700;
  background-color: #ccc;
  z-index: 3;
  border-radius: 0.5rem 0 0.5rem 0;
  color: #fff;
  &.best {
    background-color: #118168;
  }
`;

const ImgArea = styled.div`
  position: relative;
  height: 31.4rem;
  background: #fafafa;
  border-radius: 0.5rem 0.5rem 0 0;

  //child hover는 이런식으로 해준다. //대신 child가 먼저 선언되어있어야함.
  &:hover > ${ImgUtil} {
    display: flex;
  }
`;

const Contents = styled.div`
  height: 10rem;
  padding: 2rem 2.4rem 0 2.4rem;
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

SwiperCore.use([Navigation, Autoplay]);

function BestSellingProduct() {
  const [rank, setRank] = useState(0);
  const changeRank = (rank: number) => {
    setRank(rank);
  };

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const slideChange = (e: SwiperCore) => {
    setActiveSlide(e.realIndex);
  };

  const TenNumber = (num: number) => (num < 10 ? `0${num}` : num);
  return (
    <Wrapper>
      <Inner>
        <Header>
          <Title>지금 제일 잘나가요</Title>
          <Tabs>
            <Rankings>
              <Rank
                onClick={() => changeRank(0)}
                className={rank === 0 ? "selected" : ""}
              >
                실시간 판매 랭킹
              </Rank>
              <Rank
                onClick={() => changeRank(1)}
                className={rank === 1 ? "selected" : ""}
              >
                실시간 조회 랭킹
              </Rank>
            </Rankings>
            <AddView to="#">베스트 더보기</AddView>
          </Tabs>
        </Header>

        <SlideControls>
          <SlideBtn ref={prevRef}>
            <AiOutlineLeft className="icon" />
          </SlideBtn>
          <SlideBtn ref={nextRef}>
            <AiOutlineRight className="icon" />
          </SlideBtn>
        </SlideControls>

        <SlideWrap>
          <ProductList>
            <Swiper
              slidesPerView={6}
              spaceBetween={8}
              grabCursor={true}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current ? prevRef.current : undefined,
                nextEl: nextRef.current ? nextRef.current : undefined,
              }}
              autoplay={{ delay: 3000 }}
              onBeforeInit={(swiper) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.prevEl = prevRef.current;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.activeIndex = activeSlide;
                swiper.navigation.update();
              }}
              onSlideChange={slideChange}
              style={{
                position: "relative",
                display: "flex",
              }}
            >
              {RealTimeSale() &&
                RealTimeSale().map((sale, idx) => (
                  <Slide key={sale.id}>
                    <Item>
                      <ImgArea>
                        <ImgNumber className={idx < 3 ? "best" : ""}>
                          {TenNumber(idx + 1)}
                        </ImgNumber>
                        <Imgs>
                          <Img
                            className="front"
                            src={BestSellingImages(sale.frontImg || "")}
                            alt={sale.name}
                          />
                          <Img
                            className="back"
                            src={BestSellingImages(sale.backImg || "")}
                            alt={sale.name}
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
                        <Name>{sale.name}</Name>
                        <Price>
                          <NowPrice>{moneyUnit(sale.price.nowPrice)}</NowPrice>
                          {sale.price.oriPrice && (
                            <OriPrice>
                              {moneyUnit(sale.price.oriPrice)}
                            </OriPrice>
                          )}
                          {sale.price.disCountRate && (
                            <DisCountRate>
                              {sale.price.disCountRate}%
                            </DisCountRate>
                          )}
                        </Price>
                      </Contents>
                    </Item>
                  </Slide>
                ))}
            </Swiper>
          </ProductList>
        </SlideWrap>
      </Inner>
    </Wrapper>
  );
}

export default BestSellingProduct;
