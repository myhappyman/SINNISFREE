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

function CustomerReview() {
  return (
    <Wrapper>
      <Inner>
        <h1>고객님들의 솔직한 리뷰</h1>
      </Inner>
    </Wrapper>
  );
}

export default CustomerReview;
