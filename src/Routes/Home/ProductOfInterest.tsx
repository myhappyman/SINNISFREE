import { Link } from "react-router-dom";
import styled from "styled-components";
import { PdiImg } from "../../utils";
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

const SlideWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 192rem;
  margin-top: 3.6rem;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: calc(50% - 64.2rem);
    background: rgba(250, 250, 250, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: calc(50% - 64.2rem);
    background: rgba(250, 250, 250, 0.5);
  }
`;

const ProductList = styled.ul`
  .swiper_wrapper {
    position: relative;
    width: 128rem;
    margin: 0 auto;
    overflow: unset;
    .swiper-slide {
      width: 41.6rem;
    }
  }
`;

const Product = styled.li`
  width: 41.6rem;
  margin-right: 1.6rem;
`;

const Slide = styled(SwiperSlide)``;

const PdImg = styled.img`
  display: block;
  width: 100%;
`;

const PdInfo = styled.div``;
const PdName = styled.span``;
const PdPrice = styled.div``;

const Price = styled.span``;

const SlideControls = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 158rem;
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
              slidesPerView={5}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              style={{
                position: "relative",
                display: "flex",
              }}
            >
              {datas() &&
                datas().length > 0 &&
                datas().map((data) => (
                  <Product key={data.id}>
                    <Slide>
                      <PdImg src={PdiImg(data.frontImg)} alt={data.name} />
                      <PdInfo>
                        <PdName>{data.name}</PdName>
                        <PdPrice>
                          <Price className="nowPrice">
                            {data.price.nowPrice}
                          </Price>
                        </PdPrice>
                      </PdInfo>
                    </Slide>
                  </Product>
                ))}
            </Swiper>
          </ProductList>
        </SlideWrap>
      </Inner>
    </Wrapper>
  );
}

export default ProductOfInterest;
