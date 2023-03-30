import styled from "styled-components";
import { AiFillAppstore } from "react-icons/ai";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AwardFooterImg, FooterLogoImg } from "../../utils";

function Footer() {
  return (
    <FooterArea>
      <Row>
        <FooterMenu>
          <ul>
            <li>서비스 이용약관</li>
            <li>
              <strong>개인정보처리방침</strong>
            </li>
            <li>영상정보처리기기</li>
            <li>운영/관리 방침</li>
            <li>공지사항</li>
            <li>임직원서비스</li>
          </ul>
          <ul>
            <li>
              <BsYoutube fontSize={30} color={"#777"} />
            </li>
            <li>
              <BsInstagram fontSize={30} color={"#777"} />
            </li>
            <li>
              <FaFacebookF fontSize={30} color={"#777"} />
            </li>
            <li>
              <BsTwitter fontSize={30} color={"#777"} />
            </li>
            <li>
              <AiFillAppstore fontSize={30} color={"#777"} />
            </li>
          </ul>
        </FooterMenu>
      </Row>
      <InfoRow>
        <FooterBox>
          <div>
            <img src={FooterLogoImg()} alt="footerLogo" />
          </div>
          <Info>
            <Left>
              <p>
                <span>
                  주&#41;이니스프리 서울특별시 용산구 한강대로 100(한강로2가)
                  7층 이니스프리
                </span>
                <span>대표이사 최민정</span>
              </p>
              <p className="separator">
                <span>사업자 등록번호 106-86-68127 </span>
                <span>통신판매신고번호 2018-서울용산-0014</span>
                <span>
                  제품 문의 : 080-380-0114 &nbsp;&nbsp;&nbsp;FAX 02-6040-7108
                </span>
              </p>
              <p className="separator">
                <span>이메일 주소 innisfree@innisfree.com</span>
                <span>비즈니스제휴/입점문의 partner.biz@innisfree.com</span>
              </p>
              <p className="separator">
                <span>이메일 주소 무단 수집 거부</span>
                <span>개인정보 보호책임자 정구화</span>
                <span>호스팅 서비스 제공자 ㈜이니스프리</span>
              </p>
              <p>
                <strong>㈜토스페이먼츠의 에스크로 서비스 가입</strong>{" "}
                <em>
                  저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금 거래에
                  대해 구매안전서비스를 적용하고 있습니다.
                </em>
                <br />
                <ins>토스페이먼츠 구매안전 서비스 가입확인</ins>
              </p>
              <p>Copyright © 2019 Innisfree. All Rights Reserved.</p>
              <p className="awards">
                스마트앱어워드 2022
                <br />
                브랜드부문 통합대상
              </p>
            </Left>
            <Right>
              <ul>
                <li className="title">고객 서비스 센터 이용안내</li>
                <li className="tel">
                  <strong>080-380-0114</strong> (수신자 요금 부담)
                </li>
                <li>운영시간 AM 09:00~PM 18:00(주말 및 공휴일 휴무)</li>
                <li>점심시간 PM 12:00~PM13:00</li>
                <li className="callWrite">
                  <span>1:1상담작성&gt;</span>
                </li>
              </ul>
            </Right>
          </Info>
        </FooterBox>
      </InfoRow>
    </FooterArea>
  );
}

export default Footer;

const FooterArea = styled.footer`
  border-top: 1px solid #dbdbdb;
  padding-bottom: 8rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 128rem;
  height: 6.4rem;
  ul {
    display: flex;
    align-items: center;
    li {
      color: #222;
      font-size: 1.5rem;
      strong {
        font-weight: 700;
        color: #000;
      }
    }
    li ~ li {
      margin-left: 1.6rem;
    }
  }
`;

const InfoRow = styled(Row)`
  border-top: 1px solid #dbdbdb;
  width: 100%;
`;

const FooterBox = styled.div`
  padding-top: 5.4rem;
  min-width: 128rem;
  font-size: 1.3rem;
  line-height: 2.4rem;
  color: #777;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin-top: 9px;
    strong {
      color: #222;
      font-weight: 700;
      line-height: 2.4rem;
    }
    em {
      line-height: 1.8rem;
    }
    ins {
      color: #222;
    }
    span ~ span {
      margin-left: 1.2rem;
    }
  }
  p.separator {
    margin: 0%;
    span {
      position: relative;
    }
    span ~ span {
      margin-left: 0.6rem;
      padding-left: 0.6rem;
    }
    span ~ span:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0.08rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #7e7e7e;
    }
  }
  p.awards {
    padding-left: 4.2rem;
    background: url(${AwardFooterImg()}) no-repeat left top;
  }
`;

const Left = styled.div``;
const Right = styled.div`
  width: 38rem;
  height: 21.2rem;
  padding: 31px 31px;
  background-color: #f3f3f3;

  ul {
    display: flex;
    flex-direction: column;
    li {
      display: block;
      color: #777;
      font-size: 1.3rem;
      line-height: 2.4rem;
    }
    li.title {
      margin-bottom: 0.4rem;
      font-size: 1.5rem;
      color: #555;
    }
    li.tel {
      font-size: 1.3rem;
      strong {
        margin-bottom: 0.4rem;
        font-size: 3rem;
        font-weight: 700;
        color: #555;
      }
    }
    li.callWrite {
      display: block;
      margin-top: 1rem;
      color: #222;
      span {
        border: 1px solid #222;
        padding: 1rem 1rem 1rem 1.8rem;
      }
    }
  }
`;
