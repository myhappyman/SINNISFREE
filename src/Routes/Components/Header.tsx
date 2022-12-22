import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { MainLogoImg } from "../../utils";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

const Nav = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Row = styled.div<{ bgColor: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

const HeaderToolbar = styled.span`
  display: block;
  min-width: 80rem;
  padding: 13px 0;
  text-align: center;
`;

const HeaderArea = styled.div<{ padding: string }>`
  min-width: 128rem;
  padding: ${(props) => props.padding};
`;

const UtilBar = styled.div`
  padding: 13px 0;
  text-align: right;
  color: #777;
`;

const UtilMenu = styled.ul`
  display: inline-block;
  font-size: 1.4rem;
  li {
    float: left;
    em {
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      text-align: center;
      border-radius: 50%;
      background: rgb(22, 122, 104);
      color: #fff;
    }
  }
  li ~ li {
    margin-left: 2.1rem;
  }
  li.end {
    position: relative;
    padding-right: 2.1rem;
  }
  li.end::before {
    content: "";
    position: absolute;
    width: 0.1rem;
    height: 1.1rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #777;
  }
`;

const SearchHeader = styled(HeaderArea)`
  display: flex;
  align-items: center;
  height: 7.3rem;
  line-height: 2.4rem;
`;

const LHeader = styled.div`
  width: calc(100% - 60.8rem);
  display: flex;
`;

const LogoArea = styled.div``;
const SearchArea = styled.div`
  position: relative;
  width: 40rem;
  margin-left: 8.2rem;
  input {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.4rem;
    border: 2px solid #d9d9d9;
    border-radius: 2.1rem;
    font-size: 1.4rem;
    line-height: 3.4rem;
    padding: 0 4rem 0 2rem;
    color: #222;
    outline: none;
  }
  .searchIcon {
    position: absolute;
    top: 0.7rem;
    right: 1.1rem;
    width: 3rem;
    height: 3rem;
  }
`;
const KeywordRolling = styled.div`
  position: absolute;
  bottom: 0;
  height: 3.4rem;
  /* overflow: hidden; */
  ul {
    li {
    }
  }
`;

const RollingList = styled(motion.li)`
  position: relative;
`;

const RollingSpan = styled(motion.span)`
  display: block;
  padding: 0 4rem 0 2rem;
  color: #d5d4d4;
  line-height: 3.5rem;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RHeader = styled.div`
  width: 60.8rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: end;
    li {
      float: left;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.8rem;
      color: #222;
    }
    li ~ li {
      margin-left: 2.4rem;
    }
  }
`;
const CategoryRow = styled(Row)`
  border-bottom: 1px solid #a6a6a6;
`;
const CategoryArea = styled(HeaderArea)`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    height: 5.4rem;
    li {
      position: relative;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    li ~ li {
      margin-left: 0.75rem;
      padding-left: 0.75rem;
    }
  }
  ul:last-child {
    li:not(:last-child):after {
      content: "/";
      position: absolute;
      right: -1rem;
      font-size: 1.6rem;
    }
  }
`;

const rollingVariants = {
  base: {
    top: 0,
  },
  animate: (top: number) => {
    return {
      top: top,
    };
  },
};

function Header() {
  const [rollingTop, setRollingTop] = useState(0);
  useEffect(() => {
    setInterval(function () {
      setRollingTop((prev) => {
        if (prev >= 102) {
          return 0;
        } else {
          return prev + 34;
        }
      });
    }, 2000);
  }, [setRollingTop]);
  console.log(rollingTop);

  return (
    <Nav>
      <Row bgColor={"#000"} color={"#fff"}>
        <HeaderToolbar>크리스마스 12종 쿠폰팩 다운&gt;</HeaderToolbar>
      </Row>
      <Row bgColor={"#f3f1f2"} color={"#000"}>
        <HeaderArea padding={"0"}>
          <UtilBar>
            <UtilMenu>
              <li>고객센터</li>
              <li className="end">About US</li>
              <li>로그인</li>
              <li>회원가입</li>
              <li>마이페이지</li>
              <li>
                장바구니 <em>0</em>
              </li>
            </UtilMenu>
          </UtilBar>
        </HeaderArea>
      </Row>
      <Row bgColor={"#fff"} color={"#000"}>
        <SearchHeader padding={"2.3rem 0 0 0"}>
          <LHeader>
            <LogoArea>
              <img src={MainLogoImg()} alt="mainlogo"></img>
            </LogoArea>
            <SearchArea>
              <input type="text"></input>
              <AiOutlineSearch className="searchIcon" />
              <KeywordRolling>
                <AnimatePresence mode="wait" custom={rollingTop}>
                  <ul>
                    <RollingList
                      custom={rollingTop}
                      variants={rollingVariants}
                      initial="base"
                      animate="top"
                    >
                      <RollingSpan>
                        BC카드 마이태그하면 5천원 결제일 할인!
                      </RollingSpan>
                    </RollingList>
                    <RollingList
                      custom={rollingTop}
                      variants={rollingVariants}
                      initial="base"
                      animate="top"
                    >
                      <RollingSpan>
                        메리 BIG 크리스마스~스페셜 쿠폰팩
                      </RollingSpan>
                    </RollingList>
                    <RollingList
                      custom={rollingTop}
                      variants={rollingVariants}
                      initial="base"
                      animate="top"
                    >
                      <RollingSpan>함께여서 따뜻한 그린 홀리데이!</RollingSpan>
                    </RollingList>
                  </ul>
                </AnimatePresence>
              </KeywordRolling>
            </SearchArea>
          </LHeader>
          <RHeader>
            <ul>
              <li>특가</li>
              <li>이벤트</li>
              <li>베스트</li>
              <li>신제품</li>
              <li>라이브</li>
              <li>FOR U</li>
            </ul>
          </RHeader>
        </SearchHeader>
      </Row>
      <CategoryRow bgColor={"#fff"} color={"#000"}>
        <CategoryArea padding={"0"}>
          <ul>
            <li>스킨케어</li>
            <li>선케어</li>
            <li>팩/마스크</li>
            <li>페이스메이크업</li>
            <li>컬러메이크업</li>
            <li>클렌징</li>
            <li>남성</li>
            <li>바디</li>
            <li>헤어</li>
            <li>기획 세트</li>
            <li>네일</li>
            <li>방향</li>
            <li>미용소품</li>
          </ul>
          <ul>
            <li>라인별</li>
            <li>고민별</li>
          </ul>
        </CategoryArea>
      </CategoryRow>
    </Nav>
  );
}

export default Header;
