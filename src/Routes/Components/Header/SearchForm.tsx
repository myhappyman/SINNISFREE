import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { MainLogoImg } from "../../../utils";
import { useForm } from "react-hook-form";

const HeaderArea = styled.div<{ padding: string }>`
  min-width: 128rem;
  padding: ${(props) => props.padding};
`;

const SearchHeader = styled(HeaderArea)`
  display: flex;
  align-items: center;
  height: 7.3rem;
  margin-bottom: 2.3rem;
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
    z-index: 9;
  }
  .searchIcon {
    position: absolute;
    top: 0.7rem;
    right: 1.1rem;
    width: 3rem;
    height: 3rem;
    z-index: 11;
  }
`;
const KeywordRolling = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 0;
  display: ${(props) => (props.visible === true ? "none" : "block")};
  height: 3.4rem;
  overflow: hidden;
  z-index: 10;
  ul {
    li {
    }
  }
`;

const RollingList = styled(motion.li)`
  position: relative;
  display: block;
  padding: 0 4rem 0 2rem;
  color: #d5d4d4;
  line-height: 3.5rem;
  font-size: 1.4rem;
  height: 3.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RHeader = styled.div`
  width: 60.8rem;
  ul {
    display: flex;
    justify-content: end;
    width: 100%;
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

const rollingVariants = {
  base: {
    y: 34,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: -34,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function SearchForm() {
  const searchKeywordList = [
    "BC카드 마이태그하면 5천원 결제일 할인!",
    "메리 BIG 크리스마스~스페셜 쿠폰팩",
    "함께여서 따뜻한 그린 홀리데이!",
  ];
  const [rolling, setRolling] = useState(0);
  useEffect(() => {
    const interval = setInterval(function () {
      setRolling((prev) =>
        prev + 1 === searchKeywordList.length ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [setRolling, searchKeywordList.length]);

  const [searchMode, setSearchMode] = useState(false);
  const { register } = useForm();

  return (
    <SearchHeader padding={"2.3rem 0 0 0"}>
      <LHeader>
        <LogoArea>
          <img src={MainLogoImg()} alt="mainlogo"></img>
        </LogoArea>
        <SearchArea>
          <input
            {...(register("searchInput"),
            {
              onFocus: () => {
                setSearchMode(true);
              },
              onBlur: () => {
                setSearchMode(false);
              },
            })}
          />
          <AiOutlineSearch className="searchIcon" />
          <KeywordRolling visible={searchMode}>
            <ul>
              <AnimatePresence mode="wait">
                <RollingList
                  variants={rollingVariants}
                  initial="base"
                  animate="center"
                  exit="exit"
                  key={rolling}
                >
                  {searchKeywordList[rolling]}
                </RollingList>
              </AnimatePresence>
            </ul>
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
  );
}
export default SearchForm;
