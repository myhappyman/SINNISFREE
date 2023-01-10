import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { EventPageImages } from "../utils";

const Wrapper = styled.div`
  position: relative;
  min-width: 128rem;
  max-width: 192rem;
  padding-top: 1rem;
  background-color: #fff;
`;

const Inner = styled.div`
  position: relative;
  width: 128rem;
  margin: 0 auto;
`;

const TopCategory = styled.span`
  position: relative;
  padding: 1.5rem 0 1.7rem;
  font-size: 1.4rem;
`;

const Event = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 25px;
    height: 15px;
    background: url(${require("../assets/imgs/arw_loc_btn.png")}) no-repeat 99%
      50%;
  }
`;

const EvnetList = styled(motion.ul)`
  display: none;
  flex-direction: column;
  position: absolute;
  max-height: 350px;
  overflow: hidden;
  top: 3.2rem;
  left: 0rem;
  padding: 1.8rem 2.4rem;
  background: #fff;
  border: 1px solid #a7a7a7;
  z-index: 9;
  li {
    margin: 1rem 0;
    width: 9.2rem;
    font-size: 1.2rem;
    color: #777;
    cursor: pointer;
    &:hover {
      font-weight: 700;
      color: #222;
    }
  }
`;

const Title = styled.div`
  margin: 9rem 0 2.8rem;
  text-align: left;
  color: #222;
  font-size: 3.6rem;
  font-weight: bold;
`;

const WriteDate = styled.div`
  display: block;
  font-size: 1.4rem;
  color: #888;
`;

const Contents = styled.div`
  padding-top: 7.5rem;
  width: 100%;
`;

const ContImg = styled.div<{ imgSrc: string; height: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
`;

const Gif = styled.div<{ gif: string }>`
  position: absolute;
  background: url(${(props) => props.gif}) no-repeat center top / auto 100%;
  left: 50%;
  margin-top: 79.5rem;
  width: 74.9rem;
  height: 75rem;
  margin-left: -37.7rem;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  font-size: 0;
  color: transparent;
  position: absolute;
  left: 50%;
  &.btn1 {
    top: 1473px;
    width: 172px;
    height: 72px;
    margin-left: 12px;
  }
  &.btn2 {
    top: 1473px;
    width: 172px;
    height: 72px;
    margin-left: 194px;
  }
  &.btn3 {
    top: 1512px;
    width: 170px;
    height: 72px;
    margin-left: 17px;
  }
  &.btn4 {
    top: 1512px;
    width: 170px;
    height: 72px;
    margin-left: 194px;
  }
  &.btn5 {
    top: 1599px;
    width: 172px;
    height: 72px;
    margin-left: 12px;
  }
  &.btn6 {
    top: 1599px;
    width: 172px;
    height: 72px;
    margin-left: 194px;
  }
  &.btn7 {
    top: 1983px;
    width: 172px;
    height: 72px;
    margin-left: 12px;
  }
  &.btn8 {
    top: 1983px;
    width: 172px;
    height: 72px;
    margin-left: 194px;
  }
`;

const Footer = styled.div`
  text-align: left;
  background: #f0f0f0;

  p {
    font-size: 1.7rem;
    line-height: 3rem;
    color: #777;
  }
  p:last-child {
    padding-bottom: 4rem;
  }
`;

const FButton = styled.button<{ open: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  line-height: 10.4rem;
  border: none;
  font-size: 22px;
  color: #222;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 3.2rem;
    height: 1.8rem;
    margin-top: -9px;
    background: url(${require("../assets/imgs/arr_down.png")}) no-repeat right
      center / auto 100%;
    transition: all 0.3s;
    transform: ${(props) => (props.open ? `rotate(180deg)` : `rotate(0deg)`)};
  }
`;

const FTitle = styled.p`
  font-weight: 700;
`;

const Black = styled.span`
  color: #000;
  font-weight: 500;
`;

const eventVariants = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

function EventView() {
  const { eventId } = useParams();
  const [open, setOpen] = useState(false);
  const toggleFooter = () => setOpen((prev) => !prev);
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <TopCategory>
          <span>
            홈 &gt;{" "}
            <Event
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              이벤트
              <EvnetList
                initial="exit"
                animate={hover ? "enter" : "exit"}
                variants={eventVariants}
              >
                <li>카테고리</li>
                <li>FOR U</li>
                <li>특가</li>
                <li>이벤트</li>
                <li>ABOUT US</li>
                <li>고객센터</li>
                <li>마이페이지</li>
                <li>공병수거 캠페인</li>
                <li>멤버십</li>
              </EvnetList>
            </Event>
          </span>
        </TopCategory>
        <Title>23년 새해엔 블랙티앰플로 쫀쫀피부 완성! </Title>
        <WriteDate>2023-01-01 - 2023-01-31</WriteDate>
        <Contents>
          <ContImg
            imgSrc={EventPageImages(`${eventId}_top.jpg`)}
            height={"122rem"}
          />
          <ContImg
            imgSrc={EventPageImages(`${eventId}_con1.jpg`)}
            height={"216.3rem"}
          >
            <Gif gif={require("../assets/imgs/Events/gif.gif")} />
          </ContImg>

          <ContImg
            imgSrc={EventPageImages(`${eventId}_con2.jpg`)}
            height={"180.4rem"}
          >
            <LinkBtn className="btn1" to="#"></LinkBtn>
            <LinkBtn className="btn2" to="#"></LinkBtn>
          </ContImg>
          <ContImg
            imgSrc={EventPageImages(`${eventId}_con3.jpg`)}
            height={"173.9rem"}
          >
            <LinkBtn className="btn3" to="#"></LinkBtn>
            <LinkBtn className="btn4" to="#"></LinkBtn>
          </ContImg>
          <ContImg
            imgSrc={EventPageImages(`${eventId}_con4.jpg`)}
            height={"232rem"}
          >
            <LinkBtn className="btn5" to="#"></LinkBtn>
            <LinkBtn className="btn6" to="#"></LinkBtn>
            <LinkBtn className="btn7" to="#"></LinkBtn>
            <LinkBtn className="btn8" to="#"></LinkBtn>
          </ContImg>
          <ContImg
            imgSrc={EventPageImages(`${eventId}_con5.jpg`)}
            height={"50.1rem"}
          />
        </Contents>
      </Inner>

      <Footer>
        <Inner>
          <FButton onClick={toggleFooter} open={open}>
            ★유의사항을 꼭 확인해 주세요!★
          </FButton>
          {open ? (
            <>
              <FTitle>[블랙티 앰플 이벤트 공통 유의사항]</FTitle>
              <p>
                <Black>1)</Black> 본 이벤트는 아모레퍼시픽 뷰티포인트 통합 회원
                대상으로 진행되며, 비회원은 참여 불가합니다.
              </p>
              <p>
                <Black>2)</Black> 본 이벤트는 <Black>1/1</Black>부터 이니스프리
                공식 온라인몰 및 오프라인 매장에서 동시 진행됩니다.(한정수량
                소진 시 자동종료)
              </p>
              <p>
                <Black>3)</Black> 오프라인 매장별 재고는 상이할 수 있으므로,
                매장 방문 시 미리 확인해주세요.
              </p>
              <p>
                <Black>4)</Black> 여러 <Black>ID</Black> 로 분할 구입 또는 동일
                주소지로 대량 구입할 경우, 사전 연락 없이 주문 취소될 수
                있습니다.(상품별 ID 당 최대 5개 구매 가능)
              </p>
              <p>
                <Black>5)</Black> 이벤트 기간<Black>(1/1~1/5)</Black> 종료 후,
                환불/반품 등으로 인한 재구매 시, 동일 혜택을 적용 받으실 수
                없습니다.
              </p>
              <p>
                <Black>6)</Black> 최종 주문 완료 후, 마이페이지{" "}
                <Black>&gt;</Black> 주문내역 <Black>&gt;</Black> 사은품 목록에
                해당 사은품이 있는지 꼭 확인해주세요.
              </p>
              <p>
                <Black>7)</Black> 사은품 내역에 해당 품목이 없을 경우, 증정
                대상이 아니거나, 한정 수량 종료되어 추후 증정 불가 합니다.(해당
                사유로 무료 반품 불가)
              </p>
              <p>
                <Black>8)</Black> 본 이벤트 혜택을 받아 구매했으나 추후 반품할
                경우, 사은품도 함께 반품되어야 정상 환불 처리 됩니다.
              </p>
              <p>
                <Black>9)</Black> 증정품 정보(한정수량 소진 시 종료)
              </p>
              <p>
                - 블랙티 앰플 <Black>30ml</Black> 구매 시 마스크팩
                <Black>2</Black>매 증정 (구매수량만큼 지급)
              </p>
              <p>
                - 블랙티 앰플 <Black>50ml</Black>, 블랙티 앰플 홀리데이 구매 시
                블랙티 <Black>3</Black>종 키트
              </p>
              <br />
              <p>
                ※ 금요일 오후 시간/토요일/일요일 주문 결제 완료 시, 출고 작업이
                진행될 수 있습니다.
              </p>
              <p>
                &nbsp;&nbsp; 상품 준비중 단계에서도 상세내역 확인 시
                출고확정으로 확인되면 주문 취소가 불가하며, 이 경우 반품
                택배비용이 발생됩니다.{" "}
              </p>
              <p>&nbsp;&nbsp; (해당사유로 무료반품 불가)</p>
            </>
          ) : null}
        </Inner>
      </Footer>
    </Wrapper>
  );
}

export default EventView;
