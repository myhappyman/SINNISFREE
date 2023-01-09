import styled from "styled-components";
import BannerSlider from "./Home/BannerSlider";
import BestSellingProduct from "./Home/BestSellingProduct";
import MembershipBenefits from "./Home/MembershipBenefits";
import NewProducts from "./Home/NewProducts";
import NowShopping from "./Home/NowShopping";
import ProductOfInterest from "./Home/ProductOfInterest";
import RealTimeFavorKeyword from "./Home/RealTimeFavorKeyword";
import RecommendCustomers from "./Home/RecommendCustomers";

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
        <RecommendCustomers />
        <BestSellingProduct />
        <NewProducts />
        <MembershipBenefits />
      </section>
    </Main>
  );
}

export default Home;
