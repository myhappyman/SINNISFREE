import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddMoreIcon, MemberShipIcon } from "../../utils";

const Wrapper = styled.div`
  min-width: 128rem;
  max-width: 192rem;
  padding-top: 7.5rem;
  padding-bottom: 11rem;
  background-color: #fafafa;
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

const Contents = styled.div`
  width: 128rem;
  margin: 0 auto;
`;

const Message = styled.p`
  margin-top: 0.9rem;
  font-size: 2rem;
  color: #222;
`;

const MemberShips = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 4.3rem;
`;

const Item = styled.li``;

const ImgArea = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 50%;
`;

const MConts = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const MTitle = styled.strong`
  display: block;
  font-size: 1.8rem;
  color: #222;
  font-weight: 700;
`;
const MText = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #777;
`;

function MembershipBenefits() {
  return (
    <Wrapper>
      <Title>
        <h1>이니스프리 멤버쉽 혜택 안내</h1>
        <AddView to="#">헤택 더보기</AddView>
      </Title>
      <Contents>
        <Message>
          이니스프리 멤버십 회원이 되시면 이니스프리에서 제공하는 다양한 혜택을
          받으실 수 있습니다.
        </Message>
        <MemberShips>
          <Item>
            <ImgArea>
              <img src={MemberShipIcon(1)} alt="icon" />
            </ImgArea>
            <MConts>
              <MTitle>멤버십데이 혜택</MTitle>
              <MText>등급별 할인혜택</MText>
            </MConts>
          </Item>
          <Item>
            <ImgArea>
              <img src={MemberShipIcon(2)} alt="icon" />
            </ImgArea>
            <MConts>
              <MTitle>시크릿쿠폰</MTitle>
              <MText>월1회 할인쿠폰제공</MText>
            </MConts>
          </Item>
          <Item>
            <ImgArea>
              <img src={MemberShipIcon(3)} alt="icon" />
            </ImgArea>
            <MConts>
              <MTitle>구매 적립</MTitle>
              <MText>구매 금액 1% 적립</MText>
            </MConts>
          </Item>
          <Item>
            <ImgArea>
              <img src={MemberShipIcon(4)} alt="icon" />
            </ImgArea>
            <MConts>
              <MTitle>생일 혜택</MTitle>
              <MText>40% 할인 쿠폰 지급</MText>
            </MConts>
          </Item>
          <Item>
            <ImgArea>
              <img src={MemberShipIcon(5)} alt="icon" />
            </ImgArea>
            <MConts>
              <MTitle>그린티클럽키트</MTitle>
              <MText>연 2회 신청</MText>
            </MConts>
          </Item>
        </MemberShips>
      </Contents>
    </Wrapper>
  );
}

export default MembershipBenefits;
