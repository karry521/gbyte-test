"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [joinState, setJoinState] = useState(false);
  const [aboutState, setAboutState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [num, setNum] = useState(0);

  const [mywidth, setMyWidth] = useState(0);
  const [offNum, setOffNum] = useState(0);
  const [lastState, setLastState] = useState(null);

  const handNowInnerWidth = () => {
    setMyWidth(window.innerWidth);
  };

  useEffect(() => {
    //  多个二级目录不能同时展开
    joinState && num === 1
      ? setAboutState(false)
      : aboutState && num === 2
      ? setJoinState(false)
      : "";

    //监听实时宽度,切换回PC宽度时,移动端屏幕展开的二级目录全部闭合
    window.addEventListener("resize", handNowInnerWidth);
    if (offNum === 0 && mywidth >= 1000) {
      setLastState({ join: joinState, about: aboutState });
      setJoinState(false);
      setAboutState(false);
      setOffNum(1);
    } else if (offNum === 1 && mywidth < 1000) {
      // 宽度切换为移动端屏幕时打开闭合二级目录开关并回滚当前打开的二级目录
      setOffNum(0);
      setJoinState(lastState.join);
      setAboutState(lastState.about);
    }

    //关闭实时宽度监听
    return () => {
      window.removeEventListener("resize", handNowInnerWidth);
    };
  }, [joinState, aboutState, mywidth]);

  return (
    // <div className="header fixed w-full top-0 flex justify-center backdrop-blur-[8px] bg-[rgba(255,255,255,0.3)]">
    <div className="header Hsm:fixed Hmd:sticky w-full top-0 flex justify-center Hmd:bg-[#0B0F33] z-50">
      <div className="flex items-center xxl:min-w-[1445px] Hmd:justify-between Hsm:flex-col Hsm:justify-center Hsm:w-full">
        <div className="Hsm:flex Hsm:justify-between Hsm:items-center Hsm:w-full Hsm:p-4 Hsm:bg-[#0B0F33]">
          <Link href="/">
            <Image
              src="/section/header_logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-auto h-auto Hsm:w-[148px]"
            />
          </Link>

          <button
            className={`relative w-6 h-6 Hmd:hidden ${
              buttonState ? "meunOff" : "meunOpen"
            } `}
            onClick={() => setButtonState(!buttonState)}
          ></button>
        </div>

        {/* <div className={`Hmd:flex Hmd:items-center Hsm:w-full relative`}> */}
        <div className="Hmd:flex Hmd:items-center Hsm:w-full Hsm:backdrop-blur-[8px] Hsm:bg-[rgba(255,255,255,0.3)]">
          <ul
            className={`Hsm:text-[#282828] Hmd:text-white transition-[max-height] ease-linear Hsm:duration-200 Hsm:overflow-hidden max-h-[470px] Hsm:${
              buttonState ? "max-h-[470px] ulTop" : "max-h-0"
            } Hsm:px-4 Hmd:ml-[3rem] Hxls:xxls:ml-[20rem] xxl:ml-[30rem] Hmd:flex`}
          >
            <li className="Hmd:!p-0">
              <Link
                href="/"
                className="Hmd:block Hmd:p-[1.55rem_2.5rem_1.55rem_2.5rem]"
              >
                首页
              </Link>
            </li>
            <li className="Hmd:!p-0">
              <Link
                href="/product-introduction"
                className="Hmd:block Hmd:p-[1.55rem_2.5rem_1.55rem_2.5rem]"
              >
                产品介绍
              </Link>
            </li>
            <li
              style={{ padding: "0" }}
              className="Hsm:!py-0 flex items-center px-[10px]"
              onMouseOver={() =>
                window.innerWidth >= 1000 ? setAboutState(true) : ""
              }
              onMouseOut={() =>
                window.innerWidth >= 1000 ? setAboutState(false) : ""
              }
            >
              <div
                className="min-w-[150px] Hmd:justify-center flex justify-between Hsm:py-4 xs:min-w-[90px]"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setAboutState(!aboutState);
                    setNum(2);
                  }
                }}
              >
                公司介绍&nbsp;
                <span>
                  <Image
                    src="/section/downArrow.svg"
                    alt="downArrow"
                    width={100}
                    height={100}
                    className={` w-auto h-auto inline-block rotate-0 ${
                      aboutState ? "rotate-[180deg]" : "rotate-0"
                    } transition-[transform] ease-linear duration-200`}
                  />
                </span>
              </div>
              <div
                className={`absolute w-full top-full left-0 max-h-0 overflow-hidden bg-[rgba(255,255,255,0.7)] ${
                  aboutState ? "max-h-[250px]" : "Hmd:max-h-[250px] Hmd:h-0"
                } transition-[max-height] ease-linear duration-200
                            Hsm:relative Hsm:max-w-full Hsm:[background:none]`}
              >
                <div className="text-[#282828CC] Hmd:text-[16px] Hmd:font-[600] mb-6 Hsm:m-0 Hmd:flex Hmd:justify-center">
                  {contents.aboutUs.map((arr, index) => {
                    return (
                      <div
                        key={index}
                        className="p-[1.5rem_1.5rem_0_1.5rem] Hsm:p-[0_1.5rem_1rem_1.5rem]"
                      >
                        <Link href={arr.route} className="hover:text-[#0633FF]">
                          {arr.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className={`absolute w-full max-w-[160px] top-full left-0 max-h-0 overflow-hidden bg-[rgba(255,255,255,0.7)] ${aboutState ? 'max-h-[250px]' : ''} transition-[max-height] ease-linear duration-200
                            Hsm:relative Hsm:max-w-full Hsm:[background:none]`}>
                                <div className="text-[14px] text-[#282828CC] mb-6 Hsm:m-0">
                                    {
                                        contents.aboutUs.map((arr, index) => {
                                            return <div key={index} className="p-[1.5rem_1.5rem_0_1.5rem] Hsm:p-[0_1.5rem_1rem_1.5rem]"><Link href={arr.route} className="hover:text-[#0633FF]">{arr.name}</Link></div>
                                        })
                                    }
                                </div>
                            </div> */}
            </li>
            <li
              style={{ padding: "0" }}
              className="Hsm:!py-0 flex items-center px-[0px] p-0"
              onMouseOver={() =>
                window.innerWidth >= 1000 ? setJoinState(true) : ""
              }
              onMouseOut={() =>
                window.innerWidth >= 1000 ? setJoinState(false) : ""
              }
            >
              <div
                className="menu min-w-[150px] Hmd:justify-center flex justify-between Hsm:py-4 xs:min-w-[90px]"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setJoinState(!joinState);
                    setNum(1);
                  }
                }}
              >
                加入乐数&nbsp;
                <span>
                  <Image
                    src="/section/downArrow.svg"
                    alt="downArrow"
                    width={100}
                    height={100}
                    className={`Hmd:mr-[10px] w-auto h-auto inline-block rotate-0 ${
                      joinState ? "rotate-[180deg]" : "rotate-0"
                    } transition-[transform] ease-linear duration-200`}
                  />
                </span>
              </div>
              {/* <div className={`absolute w-full max-w-[160px] top-full left-0 max-h-0 overflow-hidden bg-[rgba(255,255,255,0.7)] ${joinState ? 'max-h-[160px]' : ''} transition-[max-height] ease-linear duration-200
                            Hsm:relative Hsm:max-w-full Hsm:[background:none]`}>
                                <div className="text-[14px] text-[#282828CC] mb-6 Hsm:m-0">
                                    {
                                        contents.joinUs.map((arr, index) => {
                                            return <div key={index} className="p-[1.5rem_1.5rem_0_1.5rem] Hsm:p-[0_1.5rem_1rem_1.5rem] Hsm:last:p-[0_1.5rem]"><Link href={arr.route} className="hover:text-[#0633FF]">{arr.name}</Link></div>
                                        })
                                    }
                                </div>
                            </div> */}
              <div
                className={`absolute w-full top-full left-0 max-h-0 overflow-hidden bg-[rgba(255,255,255,0.7)] ${
                  joinState ? "max-h-[250px]" : "Hmd:max-h-[250px] Hmd:h-0"
                } transition-[max-height] ease-linear duration-200
                            Hsm:relative Hsm:max-w-full Hsm:[background:none]`}
              >
                <div className="text-[#282828CC] Hmd:text-[16px] Hmd:font-[600] mb-6 Hsm:m-0 Hmd:flex Hmd:justify-center Hmd:relative left-[9.6%]">
                  {contents.joinUs.map((arr, index) => {
                    return (
                      <div
                        key={index}
                        className="p-[1.5rem_1.5rem_0_1.5rem] Hsm:p-[0_1.5rem_1rem_1.5rem]"
                      >
                        <Link href={arr.route} className="hover:text-[#0633FF]">
                          {arr.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="Hmd:!p-0">
              <Link
                href="/contact"
                className="Hmd:block Hmd:p-[1.55rem_2.5rem_1.55rem_2.5rem]"
              >
                联系我们
              </Link>
            </li>
            {/* <li className="Hmd:relative Hsm:!py-0" onMouseOver={() => window.innerWidth >= 1000 ? setAboutState(true) : ''} onMouseOut={() => window.innerWidth >= 1000 ? setAboutState(false) : ''}>
                            <div className="flex justify-between Hsm:py-4" onClick={() => { if (window.innerWidth < 1000) { setAboutState(!aboutState); setNum(2) } }}>
                                关于我们&nbsp;
                                <span>
                                    <Image src='/section/downArrow.svg' alt="downArrow" width={100} height={100} className={`w-auto h-auto inline-block rotate-0 ${aboutState ? 'rotate-[180deg]' : 'rotate-0'} transition-[transform] ease-linear duration-200`} />
                                </span>
                            </div>
                            <div className={`absolute w-full max-w-[160px] top-full left-0 max-h-0 overflow-hidden bg-[rgba(255,255,255,0.7)] ${aboutState ? 'max-h-[250px]' : ''} transition-[max-height] ease-linear duration-200
                            Hsm:relative Hsm:max-w-full Hsm:[background:none]`}>
                                <div className="text-[14px] text-[#282828CC] mb-6 Hsm:m-0">
                                    {
                                        contents.aboutUs.map((arr, index) => {
                                            return <div key={index} className="p-[1.5rem_1.5rem_0_1.5rem] Hsm:p-[0_1.5rem_1rem_1.5rem]"><Link href={arr.route} className="hover:text-[#ff5740]">{arr.name}</Link></div>
                                        })
                                    }
                                </div>
                            </div>
                        </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

const contents = {
  joinUs: [
    { name: "公司福利", route: "/join-us/benefits" },
    { name: "招贤纳士", route: "/join-us/recruit" },
  ],
  aboutUs: [
    { name: "乐数简介", route: "/about-us" },
    { name: "企业文化", route: "/about-us/culture" },
    { name: "荣誉资质", route: "/about-us/introduce" },
    { name: "发展历程", route: "/about-us/development" },
  ],
};
