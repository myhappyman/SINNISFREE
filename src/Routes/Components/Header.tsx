import { motion } from "framer-motion";
import styled from "styled-components";
import { MainLogoImg } from "../../utils";

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

const AlarmHeader = styled.span`
  display: block;
  min-width: 80rem;
  padding: 13px 0;
  text-align: center;
`;

const UtilBar = styled.div`
  min-width: 128rem;
  padding: 13px 0;
  text-align: right;
  color: #777;
`;

const UtilMenu = styled.ul`
  display: inline-block;
  font-size: 1.4rem;
  li {
    float: left;
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

const Col = styled.span``;

function Header() {
  return (
    <Nav>
      <Row bgColor={"#000"} color={"#fff"}>
        <AlarmHeader>크리스마스 12종 쿠폰팩 다운&gt;</AlarmHeader>
      </Row>
      <Row bgColor={"#f3f1f2"} color={"#000"}>
        <UtilBar>
          <UtilMenu>
            <li>고객센터</li>
            <li className="end">About US</li>
            <li>로그인</li>
            <li>회원가입</li>
            <li>마이페이지</li>
            <li>장바구니</li>
          </UtilMenu>
        </UtilBar>
      </Row>
      <Row bgColor={"#fff"} color={"#000"}>
        <img src={MainLogoImg()} alt="mainlogo"></img>
      </Row>
    </Nav>
  );
}

export default Header;
