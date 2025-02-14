"use client";
import Link from "next/link";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="w-full Hsm:w-[90%] Hmd:w-[98%] Mffs:h-auto Mffs:p-[3rem_1.5rem_4rem_1.5rem] Mff:h-[970px]  Hmd:xxls:h-[576px] flex justify-center relative overflow-hidden rounded-3xl mt-6 m-auto mx-auto bg-no-repeat bg-cover bg-[url('/brand/brand-bg.webp')]">
      <div className=" Hsm:max-w-[720px] Hmd:Hxl:max-w-[950px] Hxls:xxls:max-w-[1212px] xxl:max-w-[1440px] flex justify-center flex-col">
        <h2 className="text-center Hsm:text-[1.75rem] Hmd:text-[2rem] xxl:text-[3rem] font-[700] mb-2 Mff:pt-16">
          旗下品牌
        </h2>
        <div className="flex justify-center h-full flex-wrap pb-8">
          {contents.map((content, index) => {
            return (
              <div
                key={index}
                className="w-full lg:w-[50%] Hmd:w-[25%] Mffs:px-2 Mff:px-4"
              >
                <Link href={content.brandHref}>
                  <div
                    className={
                      `braandBody${index + 1}` +
                      ` relative Mffs:p-[161px_32px_16px_32px] Mffs:m-[98px_10px_10px] Mff:p-[202px_40px_32px_40px] Mff:mt-[188px] rounded-[1rem] ${content.bgColor} ${content.shadow}`
                    }
                  >
                    <div
                      className={
                        `brandLogo${index + 1}` +
                        ` absolute left-[50%] -translate-x-[50%] -top-[17%] z-5 `
                      }
                      style={{ transition: "top 1s" }}
                    >
                      <img
                        src={content.threeDImg}
                        alt={`brand${index}`}
                        className="Mffs:w-[150px] Mff:w-[200px] Mffs:max-w-none"
                      />
                    </div>
                    <div
                      className={
                        `brandLogo1${index + 1}` +
                        ` w-[200px] h-8 top-[28%] left-[50%] -translate-x-[50%] absolute ${content.bgColor2} [filter:blur(18px)] rounded-[25%] z-[2]`
                      }
                    ></div>
                    <div>
                      <Image
                        className="Mffs:h-[2rem] w-auto h-auto"
                        src={content.logoSrc}
                        width={100}
                        height={100}
                        alt="tenorshare-logo"
                      />
                    </div>
                    <p className=" text-Bps text-[rgba(255,255,255,0.8)] leading-[180%] pt-1 my-4">
                      {content.text}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const contents = [
  {
    brandHref: "https://gbyte.com.cn",
    threeDImg: "/brand/tenorshare-3d.webp",
    logoSrc: "/brand/tenorshare-logo.svg",
    bgColor: "bg-[linear-gradient(180deg,#FF906C_0%,#FF612E_100%)]",
    shadow: "shadow-[0px_30px_40px_rgba(255,97,46,0.3)]",
    bgColor2: "bg-[#F15827]",
    text: "做有品质的软件，提供更优质的服务，为全球用户的美好生活保驾护航",
  },
  {
    brandHref: "https://gbyte.com.cn",
    threeDImg: "/brand/4ddig-3d.webp",
    logoSrc: "/brand/4ddig-logo.svg",
    bgColor: "bg-[linear-gradient(180deg,#6F85FF_0%,#4260FF_100%)]",
    shadow: "shadow-[0px_30px_40px_rgba(66,96,255,0.3)]",
    bgColor2: "bg-[#3F5CF8]",
    text: "解决多场景数据丢失问题，各类数据存储介质的数据管理工具和后盾",
  },
  {
    brandHref: "https://gbyte.com.cn",
    threeDImg: "/brand/hitpaw-3d.webp",
    logoSrc: "/brand/hitpaw-logo.svg",
    bgColor: "bg-[linear-gradient(180deg,#8372FF_0%,#8146FF_100%)]",
    shadow: "shadow-[0px_30px_40px_rgba(131,114,255,0.3)]",
    bgColor2: "bg-[#7B40F9]",
    text: "乐数科技旗下领先的多媒体生产工具，致力于让用户轻松处理视频",
  },
  {
    brandHref: "https://gbyte.com.cn",
    threeDImg: "/brand/niuxuezhang-3d.webp",
    logoSrc: "/brand/niuxuezhang-logo.svg",
    bgColor: "bg-[linear-gradient(180deg,#6978FF_0%,#4255FF_100%)]",
    shadow: "shadow-[0px_30px_40px_rgba(66,85,255,0.2)]_mr-0",
    bgColor2: "bg-[#3C4FF9]",
    text: "满足全球用户的软件产品与服务需求，打造互联网软件行业全球领先品牌",
  },
];
