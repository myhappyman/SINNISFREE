import { Link } from "react-router-dom";
import styled from "styled-components";
import { moneyUnit, PdiImg } from "../../utils";
import datas from "../Datas/ProductOfInterestDatas";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 3.2rem;
  }
  a {
    font-size: 1.6rem;
  }
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
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: calc(12.5% - 1.6rem);
    background: rgba(250, 250, 250, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: calc(12.5% - 1.6rem);
    background: rgba(250, 250, 250, 0.5);
  }
`;

const ProductList = styled.ul`
  .swiper_wrapper {
    position: relative;
    width: 128rem;
    margin: 0 auto;
    overflow: unset;
  }
`;

const Slide = styled(SwiperSlide)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

const Product = styled.li``;

const PdImg = styled.img`
  display: block;
  width: 100%;
`;

const PdInfo = styled.div``;
const PdName = styled.span`
  font-size: 1.6rem;
  color: #333;
`;
const PdPrice = styled.div`
  .nowPrice {
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 1.6;
    color: #222;
  }
  .oriPrice {
    font-size: 1.9rem;
    text-decoration: line-through;
    color: #999;
  }
  .discoute {
    font-size: 2.6rem;
    color: #d62136;
  }
`;

const Price = styled.span`
  & ~ & {
    margin-left: 0.4rem;
  }
`;

SwiperCore.use([Navigation]);

function ProductOfInterest() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <Inner>
        <Title>
          <h1>이 상품 관심있지 않으세요?</h1>
          <Link to="#">FOR U 바로가기</Link>
        </Title>
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
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={10}
              grabCursor={true}
              loop={true}
              style={{
                position: "relative",
                display: "flex",
              }}
            >
              {datas() &&
                datas().length > 0 &&
                datas().map((data) => (
                  <Slide key={data.id}>
                    <Product>
                      <PdImg src={PdiImg(data.frontImg)} alt={data.name} />
                      <PdInfo>
                        <PdName>{data.name}</PdName>
                        <PdPrice>
                          <Price className="nowPrice">
                            {moneyUnit(data.price.nowPrice)}
                          </Price>
                          {data.price.oriPrice && (
                            <Price className="oriPrice">
                              {moneyUnit(data.price.oriPrice)}
                            </Price>
                          )}
                          {data.price.disCountRate && (
                            <Price className="discoute">
                              {moneyUnit(data.price.disCountRate)}%
                            </Price>
                          )}
                        </PdPrice>
                      </PdInfo>
                    </Product>
                  </Slide>
                ))}
            </Swiper>
          </ProductList>
        </SlideWrap>
      </Inner>
    </Wrapper>
  );
}

export default ProductOfInterest;
