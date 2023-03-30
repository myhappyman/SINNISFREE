import { useState } from "react";
import styled from "styled-components";

function RealTimeFavorKeyword() {
  const date = new Date();
  const [keyword] = useState<string[]>([
    "썬크림",
    "블랙",
    "스킨",
    "그린티",
    "그린티씨드",
    "아이",
    "필링",
    "수분크림",
    "오일",
    "소용량",
  ]);
  return (
    <Wrapper>
      <Inner>
        <Title>
          <h1>실시간 인기 #키워드</h1>
          <h3>{date.toDateString()}</h3>
        </Title>
        <Keywords>
          <ul>
            {keyword &&
              keyword.map((k, idx) => (
                <li key={idx}>
                  <Keyword>{k}</Keyword>
                </li>
              ))}
          </ul>
        </Keywords>
      </Inner>
    </Wrapper>
  );
}

export default RealTimeFavorKeyword;

const Wrapper = styled.div`
  border-bottom: 1px solid #a6a6a6;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 128rem;
  margin: 0 auto;
`;

const Title = styled.div`
  padding: 3.2rem 0;
  width: 22.8rem;
  border-right: 1px solid #ddd;

  h1 {
    font-size: 2rem;
    color: #222;
    font-weight: bold;
  }
  h3 {
    font-size: 1.3rem;
    color: #999;
  }
`;

const Keywords = styled.div`
  width: calc(100% - 22.8rem);
  ul {
    padding-left: 4rem;
    li {
      float: left;
    }
    li ~ li {
      margin-left: 1rem;
    }
  }
`;

const Keyword = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 1.6rem;
  height: 3.6rem;
  line-height: 3.6rem;
  border: 1px solid #ccc;
  border-radius: 1.8rem;
  background-color: #fff;
  color: #777;
  font-weight: bold;

  &:hover {
    border: 1px solid #3eac93;
    background-color: #f7fffd;
    color: #118168;
  }
  &::before {
    content: "#";
  }
`;
