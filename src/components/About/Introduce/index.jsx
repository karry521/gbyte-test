import Head from "next/head"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination,Navigation } from 'swiper/modules';
import React, { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Introduce() {
  
  // banner1标题
  const title = '公司荣誉'

  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`这是${title}页面`} />
      </Head>
      <div className="w-full h-[460px] Hsm:pt-20 Hsm:h-[560px] bg-no-repeat bg-cover bg-bottom" style={{height:'200px'}}>
      <div style={{  display: 'flex', position:'relative' ,top : '70%',fontSize:'40px',
    justifyContent: 'center'}}>资质证书
    </div>
        </div>
      <div className="py-[69px]">
         <div className="flex justify-center">
        <div className="w-full max-w-screen-xl overflow-hidden">
        <>
      <Swiper
        // install Swiper modules
        modules={[Pagination,Navigation]}
        watchSlidesProgress={true}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        loopedslides={10}
        ref={swiperRef}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // nextEl: null,
          // prevEl: null,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          for (let i = 0; i < swiper.slides.length; i++) {
            let slide = swiper.slides[i];
            let slideProgress = swiper.slides[i].progress;
            let modify = Math.abs(slideProgress) > 1 ? (Math.abs(slideProgress) - 1) * 0.15 + 1 : 1;
            let translate = `${slideProgress * modify * 200}px`;
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));

            slide.style.transform = `translateX(${translate}) scale(${scale})`;
            slide.style.zIndex = zIndex;
            slide.style.opacity = Math.abs(slideProgress) > 3 ? 0 : 1;
          }
        }}
        onSetTransition={(swiper, transition) => {
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transitionDuration = `${transition}ms`;
          }
        }}
      >
         <button className = "custom-button swiper-button-prev" onClick={handlePrevClick}></button>
        <SwiperSlide style = {{width: '400px',height : '543px', background:'#fff', boxShadow:'0 8px 30px #ddd'
         
        }}>
          <img style = {{position:'absolute',top:'50%',transform:'translateY(-50%)',maxWidth:'100%',height:'auto'}}
            src="/introduce/证书.webp"
            alt="高新技术企业证书"
          />
        </SwiperSlide>
        <SwiperSlide style = {{width: '400px',height : '543px', background:'#fff', boxShadow:'0 8px 30px #ddd'}}>
          <img style = {{position:'absolute',top:'50%',transform:'translateY(-50%)',maxWidth:'100%',height:'auto'}}
            src="/introduce/证书(1).webp"
            alt="软件产品证书"
          />
        </SwiperSlide>
        <SwiperSlide style = {{width: '400px',height : '543px', background:'#fff', boxShadow:'0 8px 30px #ddd'}}>
          <img style = {{position:'absolute',top:'50%',transform:'translateY(-50%)',maxWidth:'100%',height:'auto'}}
            src="/introduce/证书(2).webp"
            alt="软件产品证书"
          />
        </SwiperSlide>
        <SwiperSlide style = {{width: '400px',height : '503px', background:'#fff', boxShadow:'0 8px 30px #ddd'}}>
          <img style = {{position:'absolute',top:'50%',transform:'translateY(-50%)',maxWidth:'100%',height:'auto'}}
            src="/introduce/证书(3).webp"
            alt="晋级证书"
          />
        </SwiperSlide>
        <button className = "custom-button swiper-button-next" onClick={handleNextClick}></button>
      </Swiper>
      <style jsx>{`
        .swiper-button-prev, .swiper-button-next {
          color: #000;
          font-size: 24px;
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          z-index: 10;
          cursor: pointer;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .swiper-button-next {
          right: 10px;
        }
      `}</style>
    </>
        </div>
        </div>
      </div>
    </>
  )
}