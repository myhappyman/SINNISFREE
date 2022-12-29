export interface INowShoppingChanceDatas {
  name: string;
  price: {
    nowPrice: number;
    oriPrice: number | null;
    disCountRate: number | null;
  };
  start: number;
  starPointNumberOfPeople: number;
  frontImg: string;
  backImg: string;
}

export function nowShoppingChanceDatas() {
  return [
    {
      name: "음영 정석 팔레트",
      price: {
        nowPrice: 23000,
        oriPrice: 32000,
        disCountRate: 28,
      },
      star: 4.7,
      starPointNumberOfPeople: 3,
      frontImg: "nsdIF_1.jpg",
      backImg: "nsdIF_1.jpg",
    },
    {
      name: "모이스처 실크 베이스",
      price: {
        nowPrice: 16000,
        oriPrice: 22000,
        disCountRate: 27,
      },
      star: 4.0,
      starPointNumberOfPeople: 1,
      frontImg: "nsdIF_2.jpg",
      backImg: "nsdIF_2.jpg",
    },
    {
      name: "(홀리데이)퍼퓸드 핸드크림 3종 + 2023 포스터 캘린더",
      price: {
        nowPrice: 32000,
        oriPrice: 40000,
        disCountRate: 20,
      },
      star: 4.8,
      starPointNumberOfPeople: 9510,
      frontImg: "nsdIF_3.jpg",
      backImg: "nsdIB_3.jpg",
    },
    {
      name: "(홀리데이)레티놀 시카 앰플 [대용량] 50ml + 2023 포스터 캘린더",
      price: {
        nowPrice: 57750,
        oriPrice: 77000,
        disCountRate: 25,
      },
      star: 4.8,
      starPointNumberOfPeople: 31989,
      frontImg: "nsdIF_4.jpg",
      backImg: "nsdIF_4.jpg",
    },
    {
      name: "(홀리데이)그린티씨드크림[대용량] 100ml + 2023 포스터 캘린더",
      price: {
        nowPrice: 45750,
        oriPrice: 61000,
        disCountRate: 25,
      },
      star: 4.9,
      starPointNumberOfPeople: 13550,
      frontImg: "nsdIF_5.jpg",
      backImg: "nsdIF_5.jpg",
    },
    {
      name: "(홀리데이)블랙티 앰플[대용량] 50ml + 2023 포스터 캘린더",
      price: {
        nowPrice: 53690,
        oriPrice: 73000,
        disCountRate: 26,
      },
      star: 4.9,
      starPointNumberOfPeople: 40547,
      frontImg: "nsdIF_6.jpg",
      backImg: "nsdIF_6.jpg",
    },
    {
      name: "(홀리데이) 2023 포스터 캘린더",
      price: {
        nowPrice: 20000,
        oriPrice: null,
        disCountRate: null,
      },
      star: 5.0,
      starPointNumberOfPeople: 1,
      frontImg: "nsdIF_7.jpg",
      backImg: "nsdIB_7.jpg",
    },
    {
      name: "(홀리데이) 블랙티 유스 인핸싱 앰플 대용량",
      price: {
        nowPrice: 38690,
        oriPrice: 53000,
        disCountRate: 27,
      },
      star: 4.9,
      starPointNumberOfPeople: 40547,
      frontImg: "nsdIF_8.jpg",
      backImg: "nsdIF_8.jpg",
    },
  ];
}
