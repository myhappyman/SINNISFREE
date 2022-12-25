import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

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
    color: #777;
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

const CategoryRow = styled(Row)`
  border-bottom: 1px solid #a6a6a6;
  display: flex;
  flex-direction: column;
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

const CategoryDetail = styled.div`
  position: absolute;
  top: 5.6rem;
  left: 0;
  min-width: 128rem;
  height: 24rem;
  padding: 3.1rem 4.1rem 2rem 4.1rem;
  border: 1px solid #b6b6b6;
  background-color: #fff;
  outline: 1px solid red;
  ul {
    float: left;
    li {
      float: left;
      width: 14.9rem;
      a {
        display: block;
        margin-bottom: 1.1rem;
        font-size: 1.4rem;
        color: #888;
      }
      a:hover {
        color: #333;
        font-weight: bold;
      }
    }
  }
`;

function Header() {
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
        <SearchForm />
      </Row>
      <CategoryRow bgColor={"#fff"} color={"#000"}>
        <CategoryArea padding={"0"}>
          <ul>
            <li>
              <Link to="#">스킨케어</Link>
              <CategoryDetail>
                <ul>
                  <li>
                    <Link to="#">스킨</Link>
                    <Link to="#">로션</Link>
                    <Link to="#">에센스/세럼</Link>
                    <Link to="#">페이스 오일</Link>
                    <Link to="#">마사지</Link>
                  </li>
                  <li>
                    <Link to="#">크림/젤</Link>
                    <Link to="#">립 케어</Link>
                    <Link to="#">아이 케어</Link>
                    <Link to="#">미스트</Link>
                    <Link to="#">기획 세트</Link>
                  </li>
                  <li>
                    <Link to="#">기타</Link>
                    <Link to="#">대용량</Link>
                    <Link to="#">앰플 BEST 3</Link>
                  </li>
                </ul>
              </CategoryDetail>
            </li>
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
