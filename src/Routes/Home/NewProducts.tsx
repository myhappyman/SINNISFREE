import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddMoreIcon, NewItemsImg } from "../../utils";
import NewItemDatas from "../Datas/NewItems";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

SwiperCore.use([Navigation]);

function NewProducts() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [activePage, setActivePage] = useState(1);
  const slideChange = (e: SwiperCore) => {
    setActivePage(e.activeIndex);
  };

  const [cover, setCover] = useState([""]);
  useEffect(() => {
    const coverLen = Math.ceil(NewItemDatas().length / 4);
    setCover([]);
    for (let i = 0; i < coverLen; i++) {
      setCover((prev) => [...(prev || []), "newCover"]);
    }
  }, []);

  return (
    <Wrapper>
      <Title>
        <h1>주목해야 할 신제품 추천</h1>
        <AddView to="#">신제품 바로가기</AddView>
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
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.activeIndex = activePage;
            swiper.navigation.update();
          }}
          onSlideChange={slideChange}
          style={{
            position: "relative",
            display: "flex",
          }}
        >
          {cover.map((c, idx) => (
            <Slide key={`cover${idx}`}>
              <Products>
                {NewItemDatas() &&
                  NewItemDatas()
                    .splice(idx * 4, 4)
                    .map((item) => (
                      <Product key={item.id}>
                        <Img src={NewItemsImg(item.frontImg)} />
                        <Contents>
                          <Name>{item.name}</Name>
                          <Comments>{item.comment}</Comments>
                        </Contents>
                      </Product>
                    ))}
              </Products>
            </Slide>
          ))}
        </Swiper>
      </SlideWrap>
    </Wrapper>
  );
}

export default NewProducts;

const Wrapper = styled.div`
  position: relative;
  padding-top: 7.5rem;
  background-color: #fff;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 128rem;
  margin: 0 auto;
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
  width: 128rem;
  margin: 0 auto;
  position: relative;
  display: block;
  margin-top: 3rem;
  .swiper_wrapper {
    padding: 1rem;
  }
`;

const Products = styled.ul`
  display: block;
  width: 100%;
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Product = styled.li`
  display: block;
  float: left;
  width: calc(50% - 8px);
  padding: 0 8px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Contents = styled.div`
  height: 15.4rem;
  padding: 2rem 2.4rem 0 2.4rem;
`;

const Name = styled.h1`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
`;

const Comments = styled.p`
  margin-top: 0.7rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #999;
`;
