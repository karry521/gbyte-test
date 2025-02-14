"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
// import '@/styles/banner.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <>
      {/* 横屏滚动 */}
      <Swiper
        className="banner1 h-[44rem] Hmd:xxls:h-[30rem]"
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // pagination={{
        //     clickable: true
        // }}
        // autoplay={{
        //     delay: 5000,
        //     disableOnInteraction: false
        // }}
      >
        <SwiperSlide>
          <div className="swiper_item1 w-full h-full overflow-hidden bg-no-repeat bg-cover bg-top Hsm:bg-[#DAE0F0] Hmd:Mffs:bg-[url('/section/home_swiper1_2732.webp')] Mff:xxls:bg-[url('/section/home_swiper1_3840.webp')] xxl:bg-[url('/section/home_swiper1_5120.webp')]">
            <div className="relative flex justify-center xxl:top-[16rem] Hsm:top-[4rem] Hmd:top-[10rem] Hsm:text-center">
              <a
                href="https://gbyte.com.cn/about-us"
                className="Hmd:flex justify-center w-full relative top-4"
              >
                <div className="max-w-[700px] xxl:max-w-[1440px] Hsm:px-4 Hsm:pt-8 Hmd:relative Hmd:left-[-15rem] Hxls:xxls:left-[-23.5rem] xxl:left-[-30.5rem] Hsm:m-auto">
                  <h2 className="Hmd:flex Hmd:text-left Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-[700] Hmd:relative">
                    <div className="Hmd:mr-4">
                      <span className=" text-[#0633FF]">科技</span>引领
                    </div>
                    <div>
                      智慧<span className="text-[#0633FF]">生活</span>
                    </div>
                  </h2>
                  <div className="flex justify-center">
                    <p className="max-w-[451px] Hsm:max-w-full Hmd:xxls:max-w-[400px] text-gray-600 pt-[1rem] font-[400] Hsm:text-center Hmd:text-left Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">
                      专注于软件科技的无限潜能，不断开发智能化的数字化产品，致力于为全球用户带来智慧般的数字化体验，为工作和生活赋能。
                    </p>
                  </div>
                </div>
                {/* <img src='/section/home_swiper1_text.webp' alt="home_swiper1_text" className=" w-full h-auto Hmd:hidden Hsm:h-[34%]" /> */}
                <img
                  src="/section/home_swiper1_750.webp"
                  alt="home_swiper1_750"
                  className=" w-full h-auto Hmd:hidden Hsm:h-[76%]"
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
                    <div className="swiper_item2 w-full h-full overflow-hidden bg-no-repeat bg-cover bg-top Hmd:bg-[url('/section/swiper-bg2.webp')] Hsm:bg-[url('/section/swiper-bg2-mobile.webp')]">
                        <div className=" w-full absolute top-[20%] flex justify-center Hsm:top-[15%]">
                            <a href="" className="w-full flex justify-center">
                                <div className="flex justify-between items-center relative w-full xxl:max-w-[1440px] Hmd:max-w-[965px] Hsm:flex-col">
                                    <div className="relative Hmd:Hxl:left-[.5rem] Hxls:xxls:left-[-7.5rem] xxl:left-2">
                                        <div className="flex items-center">
                                            <img src="/section/pro-icon.svg" alt="icon" />
                                            <span className="ms-3 text-gray-600">牛学长视频修复工具</span>
                                        </div>
                                        <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-[700] mt-[9px] mb-[24px]">低画质视频变清晰</h2>
                                        <ul className=" list-none text-gray-600 mb-0 Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps">
                                            <li className=" m-0 p-0 pb-[12px]"><Image src="/section/CheckOutlined.svg" alt="CheckOutlined" width={100} height={100} className="w-auto h-auto inline-block pr-[5px]" />AI人工智能图片无损放大，高清修复图片清晰度</li>
                                            <li className=" m-0 p-0 pb-[12px]"><Image src="/section/CheckOutlined.svg" alt="CheckOutlined" width={100} height={100} className="w-auto h-auto inline-block pr-[5px]" />AI智能将低画质的视频分辨率提升至8K</li>
                                            <li className=" m-0 p-0 pb-[12px]"><Image src="/section/CheckOutlined.svg" alt="CheckOutlined" width={100} height={100} className="w-auto h-auto inline-block pr-[5px]" />黑白视频AI智能上色</li>
                                            <li className=" m-0 p-0 pb-[12px]"><Image src="/section/CheckOutlined.svg" alt="CheckOutlined" width={100} height={100} className="w-auto h-auto inline-block pr-[5px]" />支持一键批量处理多个视频</li>
                                            <li className=" m-0 p-0 pb-[12px]"><Image src="/section/CheckOutlined.svg" alt="CheckOutlined" width={100} height={100} className="w-auto h-auto inline-block pr-[5px]" />荣获高新技术奖，产品质量有保障</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 Mlg:w-[90%] xss:Hsm:max-w-[400px] Hmd:max-w-[710px] Hsm:flex Hsm:justify-center">
                                        <video className=" rounded-[15px] border-[5px] border-solid border-[skyblue] Hmd:w-[30rem] xxl:w-[44rem]" src="/section/banner1.mp4"
                                            poster="/section/sec1-banner.webp"
                                            autoPlay muted loop webkit-playsinline="true" playsInline></video>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper_item3  w-full h-full overflow-hidden bg-no-repeat bg-cover bg-top Hsm:bg-[#E9EAEE] Mlg:bg-[url('/section/swiper-bg3-mobile2.webp')] Hmd:bg-[url('/section/swiper-bg3.webp')] lg:Hsm:bg-[url('/section/swiper-bg3-mobile.webp')]">
                        <div className='relative flex justify-center xxl:top-[16rem] Hsm:top-[4rem] Hmd:top-[10rem] Hsm:text-center'>
                            <a href="https://gbyte.com.cn/about-us" className="flex justify-center w-full relative top-4">
                                <div className=" max-w-[700px] xxl:max-w-[1440px] Hsm:px-4 Hmd:relative Hmd:left-[-10rem] Hxls:xxls:left-[-18rem] xxl:left-[-21.5rem]">
                                    <h2 className="Hmd:text-left Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-[700] Hmd:relative Hmd:flex">国家级专精特<br className="Hmd:hidden" />新 “
                                        <span className="text-[#FF5740]">小巨人</span> ” 企业</h2>
                                    <p className="Hmd:text-left Hsm:text-center text-gray-600 Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps Hsm:max-w-[512px] Hmd:max-w-[656px] leading-[180%] pt-[1rem]">
                                        公司先后获得深圳市专精特新中小企业、国家鼓励的软件企业、国家高新技术企业、深圳市潜在独角兽企业、国家专精特新“小巨人”企业等荣誉称号，并获得AAA级企业信用等级、ISO9OO1、CMMI等资信认证。
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper_item4 w-full h-full overflow-hidden bg-no-repeat bg-cover bg-top Hsm:bg-[#E9EAEE] Hmd:bg-[url('/section/swiper-bg4.webp')] Hsm:bg-[url('/section/swiper-bg4-mobile.webp')]">
                        <div className='relative flex justify-center xxl:top-[16rem] Hsm:top-[11rem] Hmd:top-[10rem] Hsm:text-center'>
                            <a href="https://gbyte.com.cn/about-us" className="Hmd:flex justify-center w-full relative top-4">
                                <div className=" max-w-[700px] xxl:max-w-[1440px] Hsm:px-4 Hmd:relative Hmd:left-[-16rem] Hxls:xxls:left-[-24.5rem] xxl:left-[-31rem] Hsm:m-auto Hsm:flex Hsm:justify-center Hsm:flex-col">
                                    <h2 className="Hmd:text-left Hsm:text-Bhs Hmd:text-[42px] xxl:text-Mhs font-[700] Hmd:relative Hmd:flex">
                                        乐数科技 & <br />西安电子科技大学
                                    </h2>
                                    <div className="flex Hsm:justify-center Hmd:justify-start">
                                        <p className="max-w-[512px] text-gray-600 leading-[180%] pt-[1rem] Hmd:text-left Hsm:text-center Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps">
                                            校企合作双向赋能，助力视频抠像技术革新</p>
                                    </div>
                                    <div className=" mt-2 pt-1 flex Hsm:flex-col Hsm:items-center">
                                        <Image src="/section/logo.svg" alt="logo" width={100} height={100} className=" Hmd:mr-[2rem] w-full max-w-[201px] h-auto object-contain Hsm:mb-[24px]" />
                                        <Image src="/section/icon2.svg" alt="icon2" width={100} height={100} className=" w-full max-w-[201px] h-auto object-contain relative Hsm:left-[-0.5rem]" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </SwiperSlide> */}
      </Swiper>
    </>
  );
}
