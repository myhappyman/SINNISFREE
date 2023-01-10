import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CheckBox } from "../utils";

const Wrapper = styled.div`
  width: 100%;
  font-size: 1.6rem;
  border-bottom: 1px solid #a6a6a6;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 52rem;
  margin: 6rem auto;
`;

const Header = styled.div`
  text-align: center;
  margin: 1rem 0;
  span {
    width: 37rem;
    height: 5rem;
    margin: 2rem auto 2rem;
    font-size: 2.3rem;
    line-height: 1.4;
    letter-spacing: -1px;
    text-align: center;
    color: #000;
    font-weight: 700;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 3rem;
  input[type="text"],
  input[type="password"] {
    padding: 0 1.2rem;
    margin-bottom: 1.3rem;
    width: 100%;
    height: 5rem;
    line-height: 4.8rem;
    color: #252525;
    font-size: 1.6rem;
    border: 1px solid #e6e6e6;
    border-radius: 0.6rem;
    border-color: #ccc;
  }
  input[type="checkbox"] {
    display: inline-block;
    margin-top: 2rem;
  }
  button {
    margin-top: 1.4rem;
    width: 100%;
    height: 5.4rem;
    border: none;
    color: #252525;
    font-size: 1.8rem;
    border-radius: 0.6rem;
    border: solid 1px #5c95f0;
    background-color: #5c95f0;
    color: #fff;
    cursor: pointer;
    &:disabled {
      background-color: #f0f0f0;
      border-color: #f0f0f0;
      color: #c6c6c6;
      cursor: default;
    }
  }
`;

const CheckBoxArea = styled.span<{ checkbox: string }>`
  display: inline-block;
  cursor: pointer;
  label {
    position: relative;
    display: inline-block;
    padding-left: 2.7rem;
    width: 21px;
    height: 21px;
    vertical-align: top;
    line-height: 2.1rem;
    color: #252525;
    z-index: 2;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 21px;
      height: 21px;
      vertical-align: middle;
      background: url(${(props) => props.checkbox}) no-repeat 0 0;
      -webkit-background-size: 100% auto;
      background-size: 100% auto;
    }
  }
  input[type="checkbox"] {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

const OtherLogin = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3rem 0;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  li {
  }
`;

const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  span {
    margin-top: 1rem;
    line-height: 1;
  }
  img {
    width: 4.5rem;
  }
`;

const HelpArea = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  color: #898989;
  cursor: pointer;
`;

const JoinBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 2rem;
  width: 100%;
  border-radius: 0.6rem;
  border: solid 1px #d3d3d3;
  background-color: #fff;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #252525;
  cursor: pointer;
`;

function Login() {
  const { register, handleSubmit } = useForm();

  const LoginSuccess = () => {};

  const [checked, setChecked] = useState(false);
  const onChangeCheckBox = () => setChecked((prev) => !prev);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [idOk, setIdOk] = useState(false);
  const [pwOk, setPwOk] = useState(false);
  const userIdOk = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIdOk(value.length > 1 ? true : false);
    if (idOk && pwOk) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };

  const userPwdOk = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPwOk(value.length > 1 ? true : false);
    if (idOk && pwOk) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };
  return (
    <Wrapper>
      <Inner>
        <Header>
          <span>아모레퍼시픽 뷰티포인트 통합회원</span>
          <br />
          <span>아이디로 로그인해주세요.</span>
        </Header>
        <LoginForm onSubmit={LoginSuccess}>
          <input
            type="text"
            placeholder="아이디 입력"
            {...(register("userId"),
            {
              onChange: userIdOk,
            })}
          />
          <input
            type="password"
            placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)"
            {...(register("userPwd"),
            {
              onChange: userPwdOk,
            })}
          />
          <CheckBoxArea checkbox={CheckBox(checked)} onClick={onChangeCheckBox}>
            <label htmlFor="chkbox" onClick={onChangeCheckBox}></label>
            <input id="chkbox" type="checkbox" />
            아이디 저장
          </CheckBoxArea>

          <button disabled={loginDisabled}>로그인</button>
        </LoginForm>
        <OtherLogin>
          <li>
            <LoginButton>
              <img
                src={require("../assets/imgs/login_mobile.png")}
                alt="휴대폰"
              />
              <span>
                휴대폰
                <br />
                로그인
              </span>
            </LoginButton>
          </li>
          <li>
            <LoginButton>
              <img
                src={require("../assets/imgs/login_kakao.png")}
                alt="휴대폰"
              />
              <span>
                카카오
                <br />
                로그인
              </span>
            </LoginButton>
          </li>
          <li>
            <LoginButton>
              <img
                src={require("../assets/imgs/login_naver.png")}
                alt="휴대폰"
              />
              <span>
                네이버
                <br />
                로그인
              </span>
            </LoginButton>
          </li>
          <li>
            <LoginButton>
              <img
                src={require("../assets/imgs/login_more.png")}
                alt="휴대폰"
              />
              <span>더보기</span>
            </LoginButton>
          </li>
        </OtherLogin>
        <HelpArea>
          <span>
            <span>아이디 찾기 | </span>
            <span>비밀번호 찾기 | </span>
            <span>비회원 주문/조회</span>
          </span>
        </HelpArea>
        <JoinBtn>
          <span>아직 회원이 아니세요?</span> <span>회원가입</span>
        </JoinBtn>
      </Inner>
    </Wrapper>
  );
}

export default Login;
