"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import '@/styles/footer.css'

export default function Footer() {
  const [clickIndex, setClickIndex] = useState(null);

  return (
    // <div className="footer Hsm:bg-[linear-gradient(180deg,#ffe9e6_0%,rgba(255,247,246,0)_100%)] Hmd:bg-no-repeat Hmd:bg-cover Hmd:bg-[url('/section/gbyte-bottom-bg.webp')]">
    //     <div className="w-full m-auto p-[3rem_0.75rem_0_0.75rem] Hsm:p-6 Mlg:max-w-[720px] Hmd:Hxl:max-w-[960px] Hxls:xxls:max-w-[1225px] xxl:max-w-[1445px]">
    //         <div className="flex justify-center items-center pt-[20px] pb-[80px] Hsm:pb-[48px]">
    //             <Image src='/section/logo.svg' alt='logo' width={100} height={100} className="w-auto h-auto pr-4 Mlg:w-[140px]" />
    //             <div className="text-[20px] pl-4 border-l-[1px] border-solid border-l-[#FFD5CF] Mlg:text-[1rem]">
    //                 极致<span className="text-[#FF6954]">科技</span> 创意<span className="text-[#FF6954]">生活</span>
    //             </div>
    //         </div>
    //         <div className="flex justify-between mx-12 Hsm:flex-wrap Mlg:m-0">
    //             {
    //                 contents.map((content, index) => {
    //                     return (
    //                         <div key={index} className="w-[25%] px-2 Hsm:w-full">
    //                             <p className={`relative text-[1.25rem] text-[#282828] font-[700] pb-4 my-2 cursor-pointer Hsm:text-[1rem] Hsm:font-[400] Hsm:border-b-[1px] Hsm:border-solid Hsm:border-b-[#ffd5cf]
    //                         ${index === clickIndex ? 'upArrow' : 'downArrow'}`}
    //                                 onClick={() => clickIndex === index ? (clickIndex !== null ? setClickIndex(null) : setClickIndex(index)) : setClickIndex(index)}>{content.title}</p>
    //                             <ul className={`max-h-[251px] pl-0 transition-[max-height] ease-linear duration-[.2s] overflow-hidden text-[16px] Hsm:pl-6 Hsm:max-h-0 Hsm:text-[#282828CC] ${index === clickIndex ? 'Hsm:max-h-[251px]' : 'Hsm:max-h-0'}`}>
    //                                 {
    //                                     content.detail.map((arr, index) => {
    //                                         return <li key={index} className="p-[.8rem_0] hover:text-[#ff5740] active:text-[#ff5740] cursor-default"><Link href={arr.href}>{arr.name}</Link></li>
    //                                     })
    //                                 }
    //                             </ul>
    //                         </div>
    //                     )
    //                 })
    //             }

    //             <div className="w-[16.66667%] px-2 Hsm:w-full">
    //                 <p className="text-[1.25rem] text-[#282828] font-[700] pb-4 my-2 Hsm:text-[1rem] Hsm:font-[400]">关注我们</p>
    //                 <div className="pt-2 text-left">
    //                     <Image src="/section/Wechat.webp" priority alt="Wechat" width={100} height={100} className="w-[141px] h-auto" />
    //                     <p className="text-[12px] pt-2 Hsm:text-[#282828CC]">扫描二维码，关注更多动态</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    //     <hr className="w-full mx-auto my-4 bg-[linear-gradient(180deg,#C4C4C4_0%,rgba(196,196,196,0)_100%)] opacity-35 xxl:max-w-[1445px] Hsm:max-w-[960px]" />
    //     <div className="w-full m-auto xxl:max-w-[1445px] Hsm:max-w-[960px]">
    //         <div className="text-[14px] text-center font-[400] Mlg:px-6">
    //             <p className="text-[.875rem] text-[#adb5bd] pb-4 Mlg:flex Mlg:justify-center Mlg:flex-wrap">©2024 深圳乐数科技集团股份有限公司 版权所有
    //                 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=5201314521" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">
    //                     <img src="/section/footer-icon.webp" alt="icon" width="18" className="inline" /> 粤公网安备 5201314521号</a>
    //                 <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">粤ICP备5201314521号</a>
    //             </p>
    //             <p className="text-[.875rem] text-[#adb5bd] pb-8 mb-4">
    //                 <a href="https://gbyte.com.cn/terms-and-conditions.html" className="pr-2 Hmd:hover:text-[#ff5740] active:text-[#ff5740]">使用条款</a>|
    //                 <a href="https://gbyte.com.cn/privacy.html" className="pl-2 Hmd:hover:text-[#ff5740] active:text-[#ff5740]">隐私政策</a>
    //             </p>
    //         </div>
    //     </div>
    // </div>
    // <div className="footer bg-[#0633FF] relative overflow-hidden">
    //     <div className="w-full relative Hmd:h-[388px] flex justify-start items-center [border-bottom:1px_rgba(255,255,255,0.25)_solid]">
    //         <div className="h-full flex pr-[10rem] [border-right:1px_rgba(255,255,255,0.25)_solid] relative left-[18.5%] xxls:-right-[2.8rem]">
    //             <Image src='/section/footer_logo.svg' alt='footer_logo' width={220} height={105} className="Mlg:w-[140px]" />
    //         </div>
    //         <div className="flex justify-between Hsm:flex-wrap Mlg:m-0 absolute left-[50%]">
    //             {
    //                 contents.map((content, index) => {
    //                     return (
    //                         <div key={index} className="w-[240px] Hsm:w-full">
    //                             <p className={`w-full relative text-[1.25rem] text-white font-[700] pb-2 my-2 cursor-pointer Hsm:text-[1rem] Hsm:font-[400] Hsm:border-b-[1px] Hsm:border-solid Hsm:border-b-[#ffd5cf]
    //                         ${index === clickIndex ? 'upArrow' : 'downArrow'} [border-bottom:1px_rgba(255,255,255,0.25)_solid]`}
    //                                 onClick={() => clickIndex === index ? (clickIndex !== null ? setClickIndex(null) : setClickIndex(index)) : setClickIndex(index)}>{content.title}</p>
    //                             <ul className={`max-h-[251px] pl-0 transition-[max-height] ease-linear duration-[.2s] overflow-hidden text-[16px] Hsm:pl-6 Hsm:max-h-0 Hsm:text-white ${index === clickIndex ? 'Hsm:max-h-[251px]' : 'Hsm:max-h-0'}`}>
    //                                 {
    //                                     content.detail.map((arr, index) => {
    //                                         return <li key={index} className="text-white p-[.8rem_0] hover:text-[#ff5740] active:text-[#ff5740] cursor-default"><Link href={arr.href}>{arr.name}</Link></li>
    //                                     })
    //                                 }
    //                             </ul>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>

    //     <div className="w-[389px] h-[39px] m-auto mt-4 xxl:max-w-[1445px] Hsm:max-w-[960px]">
    //         <div className="text-[14px] text-right font-[400] Mlg:px-6 text-white absolute left-[70%]">
    //             <p className="text-[.875rem] leading-[18px]">©2024深圳市乐数科技有限责任公司 版权所有</p>
    //             <p>
    //                 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602024928" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">
    //                     <img src="/section/footer-icon.svg" alt="icon" width="18" className="inline" /> 粤公网安备 44030602024928号</a>
    //                 <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">粤ICP备14957833号</a>
    //             </p>
    //         </div>
    //     </div>
    //     <div className="w-full m-auto mt-4 xxl:max-w-[1445px] Hsm:max-w-[960px]">
    //         <div className="text-[14px] text-center font-[400] Mlg:px-6">
    //             <p className="text-[.875rem] text-white pb-4 Mlg:flex Mlg:justify-center Mlg:flex-wrap">©2024 深圳乐数科技集团股份有限公司 版权所有
    //                 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=5201314521" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">
    //                     <img src="/section/footer-icon.webp" alt="icon" width="18" className="inline" /> 粤公网安备 5201314521号</a>
    //                 <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">粤ICP备5201314521号</a>
    //             </p>
    //             <p className="text-[.875rem] text-white pb-8 mb-4">
    //                 <a href="https://gbyte.com.cn/terms-and-conditions.html" className="pr-2 Hmd:hover:text-[#ff5740] active:text-[#ff5740]">使用条款</a>|
    //                 <a href="https://gbyte.com.cn/privacy.html" className="pl-2 Hmd:hover:text-[#ff5740] active:text-[#ff5740]">隐私政策</a>
    //             </p>
    //         </div>
    //     </div>
    // </div>

    <div className="footer bg-[#4A31FF] relative overflow-hidden">
      <div className="flex justify-center Hsm:flex-col Hsm:py-4 [border-bottom:1px_rgba(255,255,255,0.25)_solid]">
        <div className="Hsm:w-full Hsm:pb-4 Hmd:h-[388px] flex justify-center items-center Hmd:pr-[10rem] Hmd:Hxl:pr-[5rem] Hsm:[border-bottom:1px_rgba(255,255,255,0.25)_solid] Hmd:[border-right:1px_rgba(255,255,255,0.25)_solid] relative Hmd:Hxl:left-[4.2rem] Hxls:Mffs:left-[0.7rem] Mff:xxls:left-[3.2rem] xxl:left-[1.8rem]">
          <Image
            src="/section/footer_logo.svg"
            alt="footer_logo"
            width={220}
            height={105}
            className="Hsm:w-auto Hsm:h-[61px] Hmd:h-[105px]"
          />
        </div>
        <div className="flex items-center py-12">
          <div className="flex Hsm:w-full Hsm:flex-col Hmd:Mffs:pl-[10rem] Mff:xxls:pl-[15rem] xxl:pl-[30rem]">
            {contents.map((content, index) => {
              return (
                <div
                  key={index}
                  className={`Hmd:w-[240px] Hsm:w-[80%] Hsm:mx-auto ${
                    index === 0 && "mr-[10rem] Hmd:Hxl:mr-[5rem]"
                  }`}
                >
                  <p
                    className={`w-full relative text-[1.25rem] text-white font-[700] pb-2 my-2 cursor-pointer Hsm:py-2 Hsm:text-[1rem] Hsm:font-[400]
                                ${
                                  index === clickIndex ? "upArrow" : "downArrow"
                                } [border-bottom:1px_rgba(255,255,255,0.25)_solid]`}
                    onClick={() =>
                      clickIndex === index
                        ? clickIndex !== null
                          ? setClickIndex(null)
                          : setClickIndex(index)
                        : setClickIndex(index)
                    }
                  >
                    {content.title}
                  </p>
                  <ul
                    className={`max-h-[251px] pl-0 transition-[max-height] ease-linear duration-[.2s] overflow-hidden text-[16px] Hsm:pl-6 Hsm:max-h-0 Hsm:text-white ${
                      index === clickIndex ? "Hsm:max-h-[251px]" : "Hsm:max-h-0"
                    }`}
                  >
                    {content.detail.map((arr, index) => {
                      return (
                        <li
                          key={index}
                          className="text-white p-[.8rem_0] hover:text-[#ff5740] active:text-[#ff5740] cursor-default"
                        >
                          <Link href={arr.href}>{arr.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex Hsm:justify-center Hmd:justify-end my-4 relative Hmd:right-[15rem]">
        <div className="Hsm:text-center Hmd:text-right text-[rgba(255,255,255,0.6)] text-[14px]">
          <p className="text-[.875rem] leading-[18px]">
            ©2024深圳市乐数科技有限责任公司 版权所有
          </p>
          <p className="Hsm:flex Hsm:flex-wrap Hsm:justify-center">
            {/* <Link
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602024928"
              rel="nofollow"
              target="_blank"
              className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]"
            >
              <img
                src="/section/footer-icon.svg"
                alt="icon"
                width="18"
                className="inline"
              />{" "}
              粤公网安备 44030602024928号
            </Link> */}
            <Link
              href="https://beian.miit.gov.cn"
              rel="nofollow"
              target="_blank"
              className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]"
            >
              粤ICP备2022081157号
            </Link>
          </p>
        </div>
        {/* <div className="w-full m-auto mt-4 xxl:max-w-[1445px] Hsm:max-w-[960px]">
                    <div className="text-[14px] text-center font-[400] Mlg:px-6">
                        <p className="text-[.875rem] text-white pb-4 Mlg:flex Mlg:justify-center Mlg:flex-wrap">©2024 深圳乐数科技集团股份有限公司 版权所有
                            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=5201314521" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">
                                <img src="/section/footer-icon.webp" alt="icon" width="18" className="inline" /> 粤公网安备 5201314521号</a>
                            <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank" className="ml-4 hover:text-[#ff5740] active:text-[#ff5740]">粤ICP备5201314521号</a>
                        </p>
                        <p className="text-[.875rem] text-white pb-8 mb-4">
                            <a href="https://gbyte.com.cn/terms-and-conditions.html" className="pr-2 Hmd:hover:text-[#ff5740] active:text-[#ff5740]">使用条款</a>|
                            <a href="https://gbyte.com.cn/privacy.html" className="pl-2 Hmd:hover:text-[#ff5740] active:text-[#ff5740]">隐私政策</a>
                        </p>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

const contents = [
  // {
  //     title: '关于我们',
  //     detail: [
  //         { name: '乐数简介', href: 'https://gbyte.com.cn/aboutus' },
  //         { name: '企业文化', href: 'https://gbyte.com.cn/aboutus/culture.html' }, { name: '荣誉资质', href: 'https://gbyte.com.cn/aboutus/honor.html' },
  //         { name: '发展历程', href: 'https://gbyte.com.cn/aboutus/development-path.html' }, { name: '联系我们', href: 'https://gbyte.com.cn/contactus.html' }
  //     ]
  // },
  // {
  //     title: '旗下品牌',
  //     detail: [
  //         { name: 'HitPaw品牌', href: 'https://gbyte.com.cn/brand.html#brand2' }, { name: 'Tenorshare品牌', href: 'https://gbyte.com.cn/brand.html#brand1' },
  //         { name: '牛学长品牌', href: 'https://gbyte.com.cn/brand.html#brand3' }, { name: '4DDiG品牌', href: 'https://gbyte.com.cn/brand.html#brand4' }
  //     ]
  // },
  // {
  //     title: '加入我们',
  //     detail: [
  //         { name: '公司福利', href: 'https://gbyte.com.cn/joinus.html' }, { name: '文化活动', href: 'https://gbyte.com.cn/joinus/employee-life.html' },
  //         { name: '招贤纳士', href: 'https://gbyte.com.cn/joinus/careers.html' }
  //     ]
  // }
  {
    title: "关于我们",
    detail: [
      { name: "乐数简介", href: "/about-us" },
      { name: "企业文化", href: "/about-us/culture" },
      { name: "荣誉资质", href: "/about-us/introduce" },
      { name: "发展历程", href: "/about-us/development" },
    ],
  },
  {
    title: "加入我们",
    detail: [
      { name: "公司福利", href: "/join-us/benefits" },
      { name: "招贤纳士", href: "/join-us/recruit" },
    ],
  },
];
