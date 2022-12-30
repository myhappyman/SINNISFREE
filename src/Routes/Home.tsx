import styled from "styled-components";
import BannerSlider from "./Home/BannerSlider";
import NowShopping from "./Home/NowShopping";
import ProductOfInterest from "./Home/ProductOfInterest";
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
        <ProductOfInterest />
      </section>
    </Main>
  );
}

export default Home;
