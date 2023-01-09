/**
 * Main Logo Image File Output
 * @returns
 */
export const MainLogoImg = () => require("./assets/imgs/mainLogo.png");

/**
 * Footer Logo
 * @returns
 */
export const FooterLogoImg = () => require("./assets/imgs/footerLogo.png");

/**
 * Award Image
 * @returns
 */
export const AwardFooterImg = () => require("./assets/imgs/awardsFooter.png");

/**
 * Menu 상단 삼각형 이미지
 * @returns
 */
export const DepthArrow = () => require("./assets/imgs/depth_arr.png");

/**
 * 하단 화살표 이미지
 * @returns
 */
export const DropOpen = () => require("./assets/imgs/drop_open.png");

/**
 * 새로고침 아이콘
 * @returns
 */
export const RefreshIcon = () => require("./assets/imgs/icon_refresh.png");

/**
 * 더보기 아이콘
 * @returns
 */
export const AddMoreIcon = () => require("./assets/imgs/icon_add_more.png");

/**
 * banner Image
 * @param num 01~10까지
 * @returns
 */
export const BannerImage = (num: number) =>
  require(`./assets/imgs/banner/banner_${num}.jpg`);

export const NowShoppingImg = (imgFileName: string) =>
  require(`./assets/imgs/nowShopping/${imgFileName}`);

export const PdiImg = (imgFileName: string) =>
  require(`./assets/imgs/ProductOfInterest/${imgFileName}`);

export const RecommendImages = (imgFileName: string) =>
  require(`./assets/imgs/RecommendItems/${imgFileName}`);

export const BestSellingImages = (imgFileName: string) =>
  require(`./assets/imgs/BestSelling/${imgFileName}`);

export const NewItemsImg = (imgFileName: string) =>
  require(`./assets/imgs/NewItems/${imgFileName}`);

export const moneyUnit = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
