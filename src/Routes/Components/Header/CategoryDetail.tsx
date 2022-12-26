import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  float: left;
  display: block;
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
`;

interface ICategory {
  first: string[];
  second: string[];
  third: string[];
  fourth: string[];
}

function CategoryDetails({ data }: { data: string[] }) {
  const [liMenu, setLiMenu] = useState<ICategory>({
    first: [],
    second: [],
    third: [],
    fourth: [],
  });
  const categoryName = useMemo(
    () => ["first", "second", "third", "fourth"],
    []
  );
  const unit = 5;
  const length = data.length;
  const divide =
    Math.floor(length / unit) + (Math.floor(length % unit) > 0 ? 1 : 0);

  useEffect(() => {
    for (let i = 0; i < divide; i++) {
      setMenu(categoryName[i], [...data.splice(0, unit)]);
    }
  }, [data, divide, categoryName]);

  const setMenu = (name: string, value: string[]) => {
    setLiMenu((prev) => {
      return {
        ...prev,
        [name]: [...value],
      };
    });
  };

  return (
    <List>
      {
        <li>
          {liMenu &&
            liMenu.first &&
            liMenu.first.map((li, idx) => {
              return (
                <Link key={`detailLink${idx}`} to="#">
                  {li}
                </Link>
              );
            })}
        </li>
      }
      {
        <li>
          {liMenu &&
            liMenu.second &&
            liMenu.second.map((li, idx) => {
              return (
                <Link key={`detailLink${idx}`} to="#">
                  {li}
                </Link>
              );
            })}
        </li>
      }
      {
        <li>
          {liMenu &&
            liMenu.third &&
            liMenu.third.map((li, idx) => {
              return (
                <Link key={`detailLink${idx}`} to="#">
                  {li}
                </Link>
              );
            })}
        </li>
      }
      {
        <li>
          {liMenu &&
            liMenu.fourth &&
            liMenu.fourth.map((li, idx) => {
              return (
                <Link key={`detailLink${idx}`} to="#">
                  {li}
                </Link>
              );
            })}
        </li>
      }
    </List>
  );
}

export default CategoryDetails;
