"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Section2() {
  const [scrollRate, setScrollRate] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollRate = window.scrollY;
      setScrollRate(currentScrollRate);
    };

    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWidth);

    // 初始化滚动位置
    setScrollRate(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className="w-full Hsm:w-[90%] Hmd:w-[98%] Hsm:h-full Hmd:Mffs:h-[800px] Mff:h-[970px]  Hmd:xxls:h-full relative overflow-hidden rounded-3xl mx-auto bg-[#EBF0FF] mt-6 m-auto">
      <div className="w-full h-full Hsm:w-[90%] Hmd:Hxl:max-w-[950px] Hxls:xxls:max-w-[1212px] xxl:max-w-[1440px] flex justify-between box-border m-auto">
        <div className="h-full Hsm:w-full Hsm:pt-[450px] Hmd:Mffs:p-[64px_0_50px_30px] Mff:pt-[13.5rem] z-[10] Hsm:flex Hsm:flex-col Hsm:justify-center Hsm:items-center ">
          <h2 className="text-[48px] text-[#222222] leading-[72px] font-bold mb-[64px]">
            我们的文化
          </h2>
          <div className="Hsm:flex Hsm:flex-col box-border grid grid-cols-2 gap-6">
            {contents.map((content, index) => {
              return (
                <div
                  key={index}
                  className={` w-[204px] h-[219px] place-content-between Inner shadow-inner border shadow-[#FFFFFF] border-[#FFFFFF] bg-[rgba(255,255,255,0.4)] ${content.borderRadius}`}
                >
                  <div className="flex flex-col justify-center items-center">
                    <h4 className="w-[126px] h-[31px] xxls:text-[20px] m-[31px_46px_23px_31px]  xxl:text-[24px] text-[#0633FF] leading-[31px] font-[500]">
                      {content.title}
                    </h4>
                    <p className="text-[14px] m-[0px_31px_84px_31px] text-[#4D4B4B] leading-[25px] font-normal">
                      {content.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`w-full absolute Hsm:top-[${
            width / 20
          }%] Hmd:Mffs:top-[20%] Mff:xxls:top-[25%] xxl:top-[18%]`}
        >
          <div className="w-full h-full relative Hsm:rounded-[26%] Hsm:overflow-hidden Hsm:-left-[5%] Hmd:Hxl:-right-[44%] Hxls:Mffs:-right-[50%] Mff:xxls:-right-[43%] xxl:-right-[37%]">
            <Image
              src="/section/home_swiper3_bg.svg"
              width={697}
              height={680}
              alt="img_1"
              className={`Hsm:w-full Hmd:xxls:w-[512px] Hmd:xxls:h-[500px] Hmd:Mffs:w-[410px] Hmd:Mffs:h-[400px]`}
            />
            <Image
              src="/section/home_swiper3_img.webp"
              width={1141}
              height={905}
              alt="img_0"
              className={`Hsm:w-full absolute rounded-[0_0_5rem_10rem] 
                        -top-[25%] left-[-14rem] Hmd:Mffs:w-[638px] Hmd:Mffs:h-[500px] Mff:xxls:w-[892px] Mff:xxls:h-[700px] Hsm:top-[24%] Hsm:-left-[4%] Hxls:Mffs:-top-[25%] Hmd:Mffs:-left-[6rem] Mff:xxls:-top-[22%] Mff:xxls:-left-[12rem]`}
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full Hsm:h-[1068px] Hmd:Mffs:h-[576px] Mff:h-[970px]  Hmd:xxls:h-[576px] relative overflow-hidden rounded-3xl mx-auto bg-no-repeat bg-cover bg-[url('/section/culture-bg.webp')]">
    //     <div className="w-full h-full Hsm:w-[90%] Hmd:Hxl:max-w-[950px] Hxls:xxls:max-w-[1212px] xxl:max-w-[1440px] flex justify-between box-border m-auto Hsm:justify-left" >
    //         <div className="h-full Hsm:pt-[40rem] Hmd:Mffs:p-[64px_0_50px_50px] Mff:pt-[13.5rem] relative z-[10]">
    //             <h2 className="text-[1.75rem] Mff:text-Mhs2 font-[700] mb-8">我们的文化</h2>
    //             <div className="max-w-[410px] max-h-[22rem] box-border grid [grid-template-areas:'._.'_'._.'] gap-4 Hsm:grid-rows-[repeat(2,minmax(135px,1fr))] Hmd:Mffs:grid-rows-[repeat(2,minmax(148px,168px))] Mff:grid-rows-[repeat(2,minmax(148px,225px))]">
    //                 {
    //                     contents.map((content, index) => {
    //                         return (
    //                             <div key={index} className={` [border:white_1px_solid] backdrop-blur-[5px] bg-[rgba(255,255,255,0.4)] ${content.borderRadius}`}>
    //                                 <div className="m-[1rem_1.5rem_1rem_1.5rem]">
    //                                     <h4 className="xxls:text-[20px] xxl:text-[24px] text-[red] font-[700] mb-4">{content.title}</h4>
    //                                     <p className="xxls:text-[14px] xxl:text-[16px] text-gray-600">{content.detail}</p>
    //                                 </div>
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div>
    //         <div className=" w-full absolute scale-[1.3] [clip-path:circle(50%_at_center);] -top-[30vw] -right-[15%] Hmd:Mffs:w-[42vw] Hmd:Mffs:-top-[12.5vw] Hmd:Mffs:-right-[6%] Mff:w-[900px] Mff:-top-[25%] Mff:-right-[6%]">
    //             <div className="w-full h-full relative">
    //                 <Image src="/section/img_1.webp" width={500} height={500} alt="img_1" className={`w-full h-auto rotate-[186deg] transition-all duration-1000 ${scrollRate > 200 ? '!rotate-[0deg]' : ''}`} />
    //                 <Image src="/section/img_0.webp" width={500} height={500} alt="img_0" className={`w-[75%] h-auto absolute top-[39%] left-[-1rem] translate-y-40 opacity-0 transition-all duration-1000 delay-500  ${scrollRate > 200 ? 'translate-y-[0] opacity-100' : ''}`} />
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

const contents = [
  // { title: '求实', detail: '脚踏实地，实事求是，认真务实', borderRadius: 'rounded-[1.5rem]' },
  // { title: '团结', detail: '团结一致，开放协同，持续进化', borderRadius: 'rounded-[1.5rem]' },
  // { title: '创新', detail: '积极进取，超越创新，探索未来', borderRadius: 'rounded-[1.5rem_1.5rem_1.5rem_3.5rem]' },
  // { title: '共赢', detail: '共同发展，携手共进，合作共赢', borderRadius: 'rounded-[1.5rem_1.5rem_3.5rem_1.5rem]' }
  {
    title: "务实",
    detail: "坚持实事求的工作态度脚踏实地",
    borderRadius: "rounded-[3.5rem_1.5rem_1.5rem_1.5rem]",
  },
  {
    title: "开放",
    detail: "开放包容、携手并进，体现合作共事的精神",
    borderRadius: "rounded-[1.5rem_3.5rem_1.5rem_1.5rem]",
  },
  {
    title: "创新",
    detail: "勇于创新、锐意进取，追求卓越、与时俱进",
    borderRadius: "rounded-[1.5rem_1.5rem_1.5rem_3.5rem]",
  },
  {
    title: "共赢",
    detail: "开拓视野、放眼未来，走共同发展之路",
    borderRadius: "rounded-[1.5rem_1.5rem_3.5rem_1.5rem]",
  },
];
