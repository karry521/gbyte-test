"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules'
import Image from "next/image"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';

export default function Section1() {
    return (
        <>
            <div className="banner2 relative rounded-3xl Hsm:w-[90%] Hmd:w-[98%] m-auto Hsm:h-[460px] Hmd:Mffs:h-[576px] Mff:h-[970px] overflow-hidden mt-6" >
                {
                    bannerData2.map((banner, index) => {
                        return (
                            <div key={index} className={`swiper_item${index + 1}  w-full h-full overflow-hidden relative`}>
                                <div className='absolute w-full flex justify-center xxls:top-8 xxl:top-20'>
                                    <div className=" max-w-[1440px] flex items-center flex-col">
                                        <h2 className=" Hsm:text-Bhs Hmd:text-Mhs2 font-[700]">{banner.title}</h2>
                                        <p className="Hsm:text-center Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps text-gray-600 mt-6">{banner.detail}</p>
                                    </div>
                                </div>
                                <div className="h-full Hsm:relative Hsm:top-44 Hsm:max-h-[300px]">
                                    <img src={banner.desktop} alt="desktop" className="Hsm:hidden w-full h-full object-cover" />
                                    <img src={banner.mobile} alt="mobile" className="hidden w-full h-full rounded-3xl Hsm:block object-cover" />
                                    {/* <Image src='/section/bird1.svg' alt='bird1' width={100} height={100} className="w-auto h-auto Hsm:w-[34px] Hmd:xxls:w-[68px] absolute top-[44%] left-[45%]" />
                                    <Image src='/section/bird2.svg' alt='bird2' width={100} height={100} className="w-auto h-auto Hsm:w-[34px] Hmd:xxls:w-[68px] absolute top-[17%] left-[45%]" /> */}
                                    <img src="/section/home_swiper2_left.webp" alt="home_swiper2_left" className='absolute Hsm:h-full top-0 left-0' />
                                    <img src="/section/home_swiper2_right.webp" alt="home_swiper2_right" className="absolute Hsm:h-full top-0 right-0" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* 竖屏滚动 */}
            {/* <Swiper className="banner2 relative rounded-3xl Hsm:w-[90%] Hmd:w-[98%] m-auto Hsm:h-[460px] Hmd:Mffs:h-[576px] Mff:h-[970px] "
                modules={[Pagination, Autoplay]}
                direction='vertical'
                spaceBetween={0}
                slidesPerView={1}
            // pagination={{ clickable: true }}
            // autoplay={{
            //     delay: 5000,
            //     stopOnLastSlide: true,
            //     disableOnInteraction: false
            // }}
            >
                {
                    bannerData2.map((banner, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={`swiper_item${index + 1}  w-full h-full overflow-hidden relative`}>
                                    <div className='absolute w-full flex justify-center xxls:top-8 xxl:top-20'>
                                        <div className=" max-w-[1440px] flex items-center flex-col">
                                            <h2 className=" Hsm:text-Bhs Hmd:text-Mhs2 font-[700]">{banner.title}</h2>
                                            <p className="Hsm:text-center Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps text-gray-600 mt-6">{banner.detail}</p>
                                        </div>
                                    </div>
                                    <div className="h-full Hsm:relative Hsm:top-44 Hsm:max-h-[300px]">
                                        <img src={banner.desktop} alt="desktop" className="Hsm:hidden w-full h-full object-cover" />
                                        <img src={banner.mobile} alt="mobile" className="hidden w-full h-full rounded-3xl Hsm:block object-cover" />
                                        <Image src='/section/bird1.svg' alt='bird1' width={100} height={100} className="w-auto h-auto Hsm:w-[34px] Hmd:xxls:w-[68px] absolute top-[44%] left-[45%]" />
                                        <Image src='/section/bird2.svg' alt='bird2' width={100} height={100} className="w-auto h-auto Hsm:w-[34px] Hmd:xxls:w-[68px] absolute top-[17%] left-[45%]" />
                                        <img src="/section/home_swiper2_left.webp" alt="home_swiper2_left" className='absolute Hsm:h-full top-0 left-0' />
                                        <img src="/section/home_swiper2_right.webp" alt="home_swiper2_right" className="absolute Hsm:h-full top-0 right-0" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            // <SwiperSlide key={index}>
                            //     <div className={`swiper_item${index + 1}  w-full h-full overflow-hidden relative`}>
                            //         <div className='absolute w-full flex justify-center xxls:top-8 xxl:top-20'>
                            //             <div className=" max-w-[1440px] flex items-center flex-col">
                            //                 <h2 className=" Hsm:text-Bhs Hmd:text-Mhs2 font-[700]">{banner.title}</h2>
                            //                 <p className=" Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps text-gray-600">{banner.detail}</p>
                            //             </div>
                            //         </div>
                            //         <div className="h-full Hsm:relative Hsm:top-44 Hsm:max-h-[260px]">
                            //             <img src={banner.desktop} alt="desktop" className="Hsm:hidden w-full h-full object-cover" />
                            //             <img src={banner.mobile} alt="mobile" className="hidden w-full h-full rounded-3xl Hsm:block object-cover" />
                            //         </div>
                            //     </div>
                            // </SwiperSlide>
                        )
                    })
                }
            </Swiper > */}
        </>
    )
}

const bannerData2 = [
    { title: '关于我们', detail: '乐数科技是一家发展迅速的互联网国家级高新技术企业', mobile: '/section/home_swiper2_one.webp', desktop: '/section/home_swiper2_one.webp' }
    // { title: '关于我们', detail: '乐数科技是一家新兴快速发展型数字媒体互联网国家高新技术企业', mobile: '/section/home-banner-1.webp', desktop: '/section/aboutus-banner.webp' },
    // { title: '愿景及使命', detail: '致力于成为打造最好软件的互联网企业', mobile: '/section/home-banner-2.webp', desktop: '/section/vision-banner.webp' },
    // { title: '我们的团队', detail: '拥有研发及销售团队500余人，目前正极速发展，迅速占领全球市场', mobile: '/section/home-banner-3.webp', desktop: '/section/team-banner.webp' }
]