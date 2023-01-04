import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{overflow: auto;}
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 999;
`;

const Modal = styled.div`
  position: fixed;
  top: 12rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50%;
  min-width: 76.8rem;
  height: 75%;
  overflow: auto;
  border-radius: 1.5rem;
  background-color: #fff;
  color: #ccc;
  z-index: 1000;
`;

const Inner = styled.div`
  width: 852px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 5.5rem 2.2rem 1.6rem;
  margin: 0 2.4rem;
  border-bottom: 1px solid #dcdcdc;
`;
const Title = styled.strong`
  font-size: 2.4rem;
  color: #222;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 32px 24px 0px;
  margin-bottom: 2rem;
`;

const GroupName = styled.div`
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 1rem;
`;
const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
const Select = styled.span`
  /* background-color: #104138;
  color: #fff;
  border: 1px solid #104138; */

  display: inline-block;
  width: 11rem;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  color: #222;
  border: 1px solid #ccc;
  border-radius: 1.7rem;
  background: #fff;
  font-size: 1.6rem;
  cursor: pointer;
`;

const Close = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
  color: #222;
`;

const Types = styled.div``;
const Worrys = styled.div``;
const Footer = styled.div`
  color: #444;
  font-size: 1.6rem;
  margin-left: 0.6rem;
  padding: 2.5rem 1.6rem 2.5rem;
  border-top: 1px solid #dcdcdc;
`;

const Message = styled.p`
  font-size: 1.4rem;
  color: #999;
  margin-top: 1.4rem;
`;

const ButtonArea = styled.div`
  margin-top: 3.2rem;
  text-align: center;
`;

const Confirm = styled.button`
  width: 300px;
  height: 46px;
  border-radius: 5px;
  font-size: 16px;
  white-space: nowrap;
  border: 1px solid #104138;
  background-color: #104138;
  margin-left: 8px;
  color: #fff;
  margin: 0 auto;
`;

function RecommendModal() {
  const TYPES_ARR = [
    "건성피부",
    "중성피부",
    "지성피부",
    "민감성피부",
    "복합성피부",
    "약건성피부",
    "트러블성피부",
  ];

  const WORRYS_ARR = [
    "모공",
    "주름",
    "탄력",
    "블랙헤드",
    "트러블",
    "각질",
    "잡티",
    "피지과다",
    "건조함",
    "민감성",
    "색소침착",
    "피부톤",
    "다크써클",
    "피부결",
    "홍조",
  ];

  return (
    <>
      <Overlay></Overlay>
      <Modal>
        <Inner>
          <Header>
            <Title>피부타입/고민 설정</Title>
            <Close>X</Close>
          </Header>
          <Contents>
            <Types>
              <GroupName>피부타입(필수 1개)</GroupName>
              <Group>
                {TYPES_ARR &&
                  TYPES_ARR.map((type, idx) => (
                    <Select key={type + idx}>{type}</Select>
                  ))}
              </Group>
            </Types>
            <Worrys>
              <GroupName>피부고민(필수 3개)</GroupName>
              <Group>
                {WORRYS_ARR &&
                  WORRYS_ARR.map((worry) => <Select>{worry}</Select>)}
              </Group>
            </Worrys>
          </Contents>
          <Footer>
            <div>
              <input type="checkbox" /> 내 프로필에도 업데이트하기
            </div>
            <Message>
              * 프로필 업데이트 선택 후 적용 시 선택한 피부타입/피부고민이 나의
              프로필에 업데이트 됩니다.
            </Message>
            <ButtonArea>
              <Confirm>적용하기</Confirm>
            </ButtonArea>
          </Footer>
        </Inner>
      </Modal>
    </>
  );
}

export default RecommendModal;
