import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DepthArrow } from "../../../utils";
import CategoryDetails from "./CategoryDetail";
import { CategoryItems } from "./CategoryItems";

const CategoryRow = styled.div<{ bgColor: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-bottom: 1px solid #a6a6a6;
`;

const CategoryArea = styled.div<{ padding: string }>`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding};
  min-width: 128rem;
`;

const CategoryUl = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  height: 5.4rem;
  &:last-child > li {
    position: relative;
  }
  &:last-child > li:not(:last-child):after {
    content: "/";
    position: absolute;
    right: -1rem;
    font-size: 1.6rem;
  }
`;

const DetailArea = styled(motion.div)`
  display: none;
  position: absolute;
  top: 5.4rem;
  left: 0;
  min-width: 128rem;
  height: 24rem;
  padding: 3.1rem 4.1rem 2rem 4.1rem;
  border: 1px solid #b6b6b6;
  background-color: #fff;
  transition: all 1s ease-in-out;
  z-index: 10;
`;

const CategoryLi = styled(motion.li)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: bold;
  & ~ & {
    margin-left: 0.75rem;
    padding-left: 0.75rem;
  }
  &:hover .lnk {
    color: #167a68;
  }
  .lnk {
    position: relative;
  }
  &:hover .lnk:after {
    content: "";
    width: 1rem;
    height: 0.9rem;
    position: absolute;
    top: 3rem;
    left: 43%;
    background: url(${DepthArrow()}) no-repeat;
    z-index: 11;
  }
`;

const CategoryDetailVariants = {
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

function Category() {
  const categoryData = CategoryItems;
  const [onMouseIn, setMouseIn] = useState<boolean[]>();
  useEffect(() => {
    categoryData.forEach((c) => {
      setMouseIn((prev) => [...(prev || []), false]);
    });
  }, [categoryData]);

  const mouseEnter = (index: number) => {
    setMouseIn((prev) => {
      return [
        ...(prev || []).slice(0, index),
        true,
        ...(prev || []).slice(index + 1),
      ];
    });
  };
  const mouseLeave = (index: number) => {
    setMouseIn((prev) => {
      return [
        ...(prev || []).slice(0, index),
        false,
        ...(prev || []).slice(index + 1),
      ];
    });
  };

  return (
    <CategoryRow bgColor={"#fff"} color={"#000"}>
      <CategoryArea padding={"0"}>
        <CategoryUl>
          {categoryData &&
            categoryData.map((category, idx) => (
              <CategoryLi
                key={idx}
                onHoverStart={() => mouseEnter(idx)}
                onHoverEnd={() => mouseLeave(idx)}
                // onMouseEnter={() => mouseEnter(idx)}
                // onMouseLeave={() => mouseLeave(idx)}
              >
                <Link className="lnk" to="#">
                  {category.category}
                </Link>
                <DetailArea
                  initial="exit"
                  animate={onMouseIn && onMouseIn[idx] ? "enter" : "exit"}
                  variants={CategoryDetailVariants}
                >
                  <CategoryDetails data={category.detail} />
                </DetailArea>
              </CategoryLi>
            ))}
        </CategoryUl>
        <CategoryUl>
          <CategoryLi>라인별</CategoryLi>
          <CategoryLi>고민별</CategoryLi>
        </CategoryUl>
      </CategoryArea>
    </CategoryRow>
  );
}

export default Category;
