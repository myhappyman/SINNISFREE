import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineFileAdd,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineCreditCard,
  AiFillStar,
} from "react-icons/ai";
import {
  INowShoppingChanceDatas,
  nowShoppingChanceDatas,
} from "../Datas/NowShoppingDatas";
import { NowShoppingImg } from "../../utils";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;
const Inner = styled.div`
  width: 128rem;
  margin: 9rem auto 7.6rem auto;
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

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 2rem;
  margin: 3.2rem 0;
`;

const Item = styled.div`
  height: 52rem;
`;

const Img = styled.div``;
const ImgUtil = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  /* display: grid; */
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
  }
`;

const ImgArea = styled.div`
  position: relative;
  height: 31.2rem;
  background: #ccc;

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

function NowShopping() {
  const data = nowShoppingChanceDatas();
  const moneyUnit = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Wrapper>
      <Inner>
        <Title>
          <h1>지금이 쇼핑찬스</h1>
          <Link to="#">특가 바로가기</Link>
        </Title>
        <GridArea>
          {data &&
            data.map((shopping, idx) => {
              return (
                <Item key={idx}>
                  <ImgArea>
                    <Img>
                      <img
                        src={NowShoppingImg(shopping.frontImg || "")}
                        alt={shopping.name}
                      />
                    </Img>
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
                      <NowPrice>{moneyUnit(shopping.price.nowPrice)}</NowPrice>
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
          {/* <Item>
            <ImgArea>
              <Img></Img>
              <ImgUtil>
                <AiOutlineFileAdd className="icon" />
                <AiOutlineHeart className="icon" />
                <AiOutlineShoppingCart className="icon" />
                <AiOutlineCreditCard className="icon" />
              </ImgUtil>
            </ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>
                <AiOutlineStar /> 4.7(3)
              </Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item>
          <Item>
            <ImgArea>img</ImgArea>
            <Contents>
              <Name>음영 정석 팔레트</Name>
              <Price>
                <NowPrice>23,000</NowPrice>
                <OriPrice>32,000</OriPrice>
                <DisCountRate>28%</DisCountRate>
              </Price>
              <Grade>별 4.7(3)</Grade>
            </Contents>
          </Item> */}
        </GridArea>
      </Inner>
    </Wrapper>
  );
}

export default NowShopping;
