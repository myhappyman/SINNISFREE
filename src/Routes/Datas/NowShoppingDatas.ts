export interface INowShoppingChanceDatas {
  id: string;
  name: string;
  price: {
    nowPrice: number;
    oriPrice: number | null;
    disCountRate: number | null;
  };
  star: number;
  starPointNumberOfPeople: number;
  frontImg: string;
  backImg: string;
  newItem?: boolean;
}

export default function nowShoppingChanceDatas() {
  return [
    {
      id: "ns001",
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
      id: "ns002",
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
      id: "ns003",
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
      id: "ns004",
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
      id: "ns005",
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
      id: "ns006",
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
      id: "ns007",
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
      id: "ns008",
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
    {
      id: "ns009",
      name: "(홀리데이)퍼퓸드 핸드크림 3종 세트",
      price: {
        nowPrice: 17000,
        oriPrice: 20000,
        disCountRate: 15,
      },
      star: 4.8,
      starPointNumberOfPeople: 9522,
      frontImg: "nsdIF_9.jpg",
      backImg: "nsdIB_3.jpg",
    },
    {
      id: "ns010",
      name: "(홀리데이)레티놀 시카 흔적 앰플 [대용량]",
      price: {
        nowPrice: 42750,
        oriPrice: 57000,
        disCountRate: 25,
      },
      star: 4.8,
      starPointNumberOfPeople: 32003,
      frontImg: "nsdIF_10.jpg",
      backImg: "nsdIF_10.jpg",
    },
    {
      id: "ns011",
      name: "(홀리데이)그린티 씨드 크림 [대용량]",
      price: {
        nowPrice: 30750,
        oriPrice: 41000,
        disCountRate: 25,
      },
      star: 4.9,
      starPointNumberOfPeople: 13562,
      frontImg: "nsdIF_11.jpg",
      backImg: "nsdIB_11.jpg",
    },
    {
      id: "ns012",
      name: "트윙클 글리터 [홀로그램]",
      price: {
        nowPrice: 6000,
        oriPrice: 9000,
        disCountRate: 33,
      },
      star: 4.7,
      starPointNumberOfPeople: 1045,
      frontImg: "nsdIF_12.jpg",
      backImg: "nsdIF_12.jpg",
    },
    {
      id: "ns013",
      name: "트루 마일드 시카 무기자차 선크림 35mL + 트루 히알루론 수분 선크림 35mL",
      price: {
        nowPrice: 18000,
        oriPrice: 36000,
        disCountRate: 50,
      },
      star: 4.8,
      starPointNumberOfPeople: 14968,
      frontImg: "nsdIF_13.jpg",
      backImg: "nsdIF_13.jpg",
    },
    {
      id: "ns014",
      name: "콜라겐 펩타이드 탄력 앰플 크림",
      price: {
        nowPrice: 29250,
        oriPrice: 39000,
        disCountRate: 25,
      },
      star: 4.9,
      starPointNumberOfPeople: 9994,
      frontImg: "nsdIF_14.jpg",
      backImg: "nsdIB_14.jpg",
      newItem: true,
    },
    {
      id: "ns015",
      name: "그린티 씨드 크림 50mL * 2개",
      price: {
        nowPrice: 37500,
        oriPrice: 50000,
        disCountRate: 25,
      },
      star: 4.9,
      starPointNumberOfPeople: 13562,
      frontImg: "nsdIF_15.jpg",
      backImg: "nsdIB_15.jpg",
    },
    {
      id: "ns016",
      name: "그린티 씨드 세럼 80mL * 2개",
      price: {
        nowPrice: 43500,
        oriPrice: 58000,
        disCountRate: 25,
      },
      star: 4.9,
      starPointNumberOfPeople: 33995,
      frontImg: "nsdIF_16.jpg",
      backImg: "nsdIF_16.jpg",
    },
  ];
}
