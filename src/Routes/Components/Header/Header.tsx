import { motion } from "framer-motion";
import styled from "styled-components";

import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Category from "./Category";

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
              <li>
                <Link to="#">고객센터</Link>
              </li>
              <li className="end">
                <Link to="#">About US</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="#">회원가입</Link>
              </li>
              <li>
                <Link to="#">마이페이지</Link>
              </li>
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
      <Category />
    </Nav>
  );
}

export default Header;
