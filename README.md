# 화장품 웹사이트 INNISFREE 사이트를 컨셉으로 클론 코딩을 진행합니다.

- react언어와 그동안 배워왔던 각종 라이브러리들을 사용하여 슬라이드 쇼, top위치 처리, HTML, CSS등의 styled-component, 모바일 지원을 위한 반응형 개발을 진행합니다.

프로젝트 기간 도중 웹 페이지 컨셉이 바뀔수 있기때문에 최대한 관련 정보들을 받아와서(캡처, 이미지 저장 등)을 통해 페이지를 구성하고 클론 코딩을 진행합니다.

해당 README페이지는 개발하면서 겪은 이슈나, 체크용, 앞으로의 목표등을 정리할 예정입니다.

# 이슈 리스트

1. 폰트 이슈

- 이니스프리의 사이트의 경우 유료폰트인 산돌구름을 사용하는것으로 파악되어, 노토산스로 대체합니다. 애플에서 별도로 구매한 애플산돌고딕 등을 적용해보려 했으나, 개발 구성에 있어 애플제품을 통한 개발이 아니라서 폰트는 최대한 비슷하게 구성하고 사이즈를 변경할 예정입니다.

2. 데이터 이슈
   화장품 사이트다보니 굉장히 많은 라인업의 화장품들이 있고 없어지거나 새로 생기거나 등등 이슈가 있습니다. 먼저 json파일 형태로 저장해서 가볍게 사용하다가 나중에 firebase등 nosql의 다양한 플랫폼을 통해서 데이터를 fetch등을 받아와서 useQuery함수까지 적용해볼 예정입니다.

# Header

-헤더 검색창 슬라이더
헤더부분의 검색창 부분의 슬라이더 이벤트 처리를 위해 framer-motion으로 슬라이더 형태로 이벤트 처리를 하고, 겉에 감싼 div에는 overflow hidden처리를 해서 보이지 않도록 했다.
또한 span형태의 슬라이더 글씨에 클릭을 하게되면 강제로 검색창의 input에 focus가 가도록 ref를 사용하여 useForm과 useRef를 같이 혼합하여 처리했다.

-카테고리 드랍다운
메인 메뉴 카테고리 리스트들에는 hover를하면 상세 드랍다운이 나와야 하는데, 이부분 처리에서 생각보다 애를 먹었다.
이부분도 useState로 category개수 만큼 boolean의 값이 들어간 배열을 넣고 각 위치에 해당하는 카테고리들만 보이도록 styled와 함께 처리했다.

# Home

메인 페이지로 큰 배너가 먼저 눈에 들어옵니다.
슬라이더 10개의 형태로 끝까지 이동하면 처음 슬라이더로 돌아오는 형태입니다.
framer-motion으로 수행해도 되지만, 기존에 jQuery 방식으로 개발할 때, 많이 사용하던 swiper를 설치하여 적용해보았습니다.
기본 tuturial대로 수행하여 큰 문제 없이 동작하였습니다.
`npm install --save swiper`

```Typescript
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";

function Home(){

   return (
      <Swiper>
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>2</SwiperSlide>
         <SwiperSlide>3</SwiperSlide>
      </Swiper>
   )
}
```
