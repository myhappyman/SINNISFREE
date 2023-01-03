import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  min-width: 128rem;
  max-width: 192rem;
  padding-top: 7.5rem;
  height: 79rem;
  background-color: #fafafa;
`;

const Inner = styled.div`
  width: 128rem;
  margin: 0 auto;
`;

function NewProducts() {
  return (
    <Wrapper>
      <Inner>
        <h1>주목해야 할 신제품 추천</h1>
      </Inner>
    </Wrapper>
  );
}

export default NewProducts;
