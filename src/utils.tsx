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
 * banner Image
 * @param num 01~10까지
 * @returns
 */
export const BannerImage = (num: number) =>
  require(`./assets/imgs/banner_${num}.jpg`);
