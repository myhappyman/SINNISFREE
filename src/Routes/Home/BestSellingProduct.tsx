import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddMoreIcon } from "../../utils";

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

function BestSellingProduct() {
  const [rank, setRank] = useState(0);
  const changeRank = (rank: number) => {
    setRank(rank);
  };
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
      </Inner>
    </Wrapper>
  );
}

export default BestSellingProduct;
