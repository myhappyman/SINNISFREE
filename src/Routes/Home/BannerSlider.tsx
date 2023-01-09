import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import { BannerImage } from "../../utils";
import { useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const SliderArea = styled.div`
  min-width: 128rem;
  max-width: 192rem;
  background-color: #fff;
`;

const Slide = styled(SwiperSlide)`
  position: relative;
  min-width: 128rem;
  height: 64rem;
`;

const SlideControls = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 148rem;
  z-index: 10;
`;

const SlideBtn = styled.div<{ mouseHover: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.mouseHover ? "8rem" : "4rem")};
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

const SlidePageInfo = styled.div`
  padding-bottom: 0.3rem;
  font-weight: bold;
`;

const SliderImg = styled.div`
  position: absolute;
`;

const SliderInner = styled.div`
  position: relative;
  top: 43%;
  transform: translateY(-50%);
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-left: 20rem;
  width: 128rem;
  margin: 0 auto;
`;

const InnerArea = styled.div`
  & ~ & {
    margin-top: 1rem;
  }
`;

const Keyword = styled.span<{ bgcolor: string }>`
  display: inline-block;
  padding: 0.1rem 0.8rem;
  min-width: 4.9rem;
  background-color: ${(props) => props.bgcolor};
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  & ~ & {
    margin-left: 1rem;
  }
`;

const BannerText = styled.span`
  display: block;
  font-size: 4rem;
  color: #222;
`;

const BannerBoldText = styled(BannerText)`
  font-weight: 700;
`;

const Price = styled.span`
  color: #222;
  font-size: 2.8rem;
  font-weight: 700;
  & ~ & {
    margin-left: 0.8rem;
  }
`;

const LinePrice = styled(Price)`
  text-decoration: line-through;
  font-weight: 400;
`;

SwiperCore.use([Navigation, Autoplay]);

function BannerSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const SliderLen = 10;
  const slideChange = (e: SwiperCore) => {
    setActiveSlide(e.realIndex + 1); // activeIndex는 제대로 동작이 안됨. realIndex로 처리
  };

  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  return (
    <SliderArea>
      <SlideControls>
        <SlideBtn
          onMouseEnter={() => setPrevHover(true)}
          onMouseLeave={() => setPrevHover(false)}
          ref={prevRef}
          mouseHover={prevHover}
        >
          <AiOutlineLeft className="icon" />
          {prevHover && (
            <SlidePageInfo>
              {activeSlide}/{SliderLen}
            </SlidePageInfo>
          )}
        </SlideBtn>
        <SlideBtn
          onMouseEnter={() => setNextHover(true)}
          onMouseLeave={() => setNextHover(false)}
          ref={nextRef}
          mouseHover={nextHover}
        >
          {nextHover && (
            <SlidePageInfo>
              {activeSlide}/{SliderLen}
            </SlidePageInfo>
          )}
          <AiOutlineRight className="icon" />
        </SlideBtn>
      </SlideControls>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        autoplay={{ delay: 5000 }}
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
        // onSlideChange={slideChange}
        onSlideChange={slideChange}
      >
        <Slide>
          <Link to="/EventView/e1">
            <SliderImg>
              <img src={BannerImage(1)} alt="bannerImage" />
            </SliderImg>
            <SliderInner>
              <InnerArea>
                <Keyword bgcolor="#d62136">27%</Keyword>
                <Keyword bgcolor="#000">사은품</Keyword>
              </InnerArea>
              <InnerArea>
                <BannerText>이니어워즈 올해의 판매 1위</BannerText>
                <BannerBoldText>확신의 안티에이징 앰플</BannerBoldText>
              </InnerArea>
              <InnerArea>
                <LinePrice>53,000</LinePrice>
                <Price>38,690</Price>
              </InnerArea>
            </SliderInner>
          </Link>
        </Slide>
        <Slide>
          <Link to="/EventView/e2">
            <SliderImg>
              <img src={BannerImage(2)} alt="bannerImage" />
            </SliderImg>
            <SliderInner>
              <InnerArea>
                <Keyword bgcolor="#d62136">25%</Keyword>
                <Keyword bgcolor="#000">사은품</Keyword>
              </InnerArea>
              <InnerArea>
                <BannerText>자고 일어나면 촉촉쫀득!</BannerText>
                <BannerBoldText>속탄력 콜라겐 앰플크림</BannerBoldText>
              </InnerArea>
              <InnerArea>
                <LinePrice>39,000</LinePrice>
                <Price>29,250</Price>
              </InnerArea>
            </SliderInner>
          </Link>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(3)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#d62136">25%</Keyword>
              <Keyword bgcolor="#000">사은품</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>매끈결 겨울 각질 케어</BannerText>
              <BannerBoldText>깐달걀 레티놀 시카 앰플</BannerBoldText>
            </InnerArea>
            <InnerArea>
              <LinePrice>57,000</LinePrice>
              <Price>42,750</Price>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(4)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#d62136">25%</Keyword>
              <Keyword bgcolor="#000">사은품</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>월클 수분 에센스</BannerText>
              <BannerBoldText>씨드세럼과 수분 가득한 연말</BannerBoldText>
            </InnerArea>
            <InnerArea>
              <LinePrice>29,000</LinePrice>
              <Price>21,750</Price>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(5)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#d62136">25%</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>씨드크림으로 오랫동안</BannerText>
              <BannerBoldText>촉촉한 피부 수분 장벽 완성</BannerBoldText>
            </InnerArea>
            <InnerArea>
              <LinePrice>25,000</LinePrice>
              <Price>18,750</Price>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(6)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <BannerText>올해를 빛낸 남성 제품은?</BannerText>
              <BannerBoldText>이니 어워즈 남성 TOP3 </BannerBoldText>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(7)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#000">그린홀리데이</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>그린홀리데이와 함께</BannerText>
              <BannerBoldText>따뜻한 연말 분위기 완성!</BannerBoldText>
            </InnerArea>
            <InnerArea>
              <LinePrice>25,000</LinePrice>
              <Price>18,750</Price>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(8)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#000">최대30%</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>2022 연말결산 이니어워즈</BannerText>
              <BannerBoldText>올해의 제품을 특가로!</BannerBoldText>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(9)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#000">앱전용</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>지금 앱키면</BannerText>
              <BannerBoldText>공식몰.매장 쿠폰이 한가득</BannerBoldText>
            </InnerArea>
          </SliderInner>
        </Slide>
        <Slide>
          <SliderImg>
            <img src={BannerImage(10)} alt="bannerImage" />
          </SliderImg>
          <SliderInner>
            <InnerArea>
              <Keyword bgcolor="#000">앱전용</Keyword>
              <Keyword bgcolor="#000">추가할인</Keyword>
            </InnerArea>
            <InnerArea>
              <BannerText>12월에는 APP으로</BannerText>
              <BannerBoldText>할인+무료배송 혜택 Get</BannerBoldText>
            </InnerArea>
          </SliderInner>
        </Slide>
      </Swiper>
    </SliderArea>
  );
}

export default BannerSlider;
