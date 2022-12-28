import styled from "styled-components";
import BannerSlider from "./Home/BannerSlider";
import NowShopping from "./Home/NowShopping";
import RealTimeFavorKeyword from "./Home/RealTimeFavorKeyword";

const Main = styled.div`
  min-height: 50rem;
`;

function Home() {
  return (
    <Main>
      <section>
        <BannerSlider />
        <RealTimeFavorKeyword />
        <NowShopping />
      </section>
    </Main>
  );
}

export default Home;
