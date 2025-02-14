import Head from "next/head";
import Image from "next/image";

export default function Culture() {
  // banner1标题
  const title = "企业文化";

  // banner1文案
  const banner1 = {
    mainContent:
      "注重创新、协作、自由、娱乐与追求卓越,倡导开放包容、快速迭代、勇于试错,营造轻松愉悦的工作氛围，激发员工创造力",
    childContent1: [
      { title: "使命", detail: "让优质的“Made in China”遍及全球" },
      { title: "愿景", detail: "做更快、更强、更高效的出海软件服务商。" },
    ],
    childContent2: {
      title: "价值观",
      detail: ["注重客户 拥抱变化", "乐于分享 积极进取", "团结协作 真实坦诚"],
    },
  };

  // banner3图片
  const banner3 = [
    {
      src: "/culture/culture_banner3_1.webp",
      alt: "culture_banner3_1",
      style:
        "w-[423px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.665] Hmd:xxls:!w-[296px] Hmd:xxls:!h-[280px] rounded-[24px]",
    },
    {
      src: "/culture/culture_banner3_2.webp",
      alt: "culture_banner3_2",
      style:
        "w-[848px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.642] Hmd:xxls:w-[593px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]",
    },
    {
      src: "/culture/culture_banner3_3.webp",
      alt: "culture_banner3_3",
      style:
        "w-[579px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.666] Hmd:xxls:w-[398px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]",
    },
    {
      src: "/culture/culture_banner3_4.webp",
      alt: "culture_banner3_4",
      style:
        "w-[245px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.666] Hmd:xxls:w-[171px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]",
    },
    {
      src: "/culture/culture_banner3_5.webp",
      alt: "culture_banner3_5",
      style:
        "w-[423px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.666] Hmd:xxls:w-[296px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`这是${title}页面`} />
      </Head>

      {/* 企业文化 */}
      <div className="w-full h-[800px] Hsm:h-auto Hmd:xxls:h-[580px] Hsm:pt-24 bg-no-repeat bg-cover bg-center bg-[url('/culture/culture_banner1.webp')]">
        <div className="max-w-[1300px] Hsm:w-full Hmd:Hxl:w-[970px] Hxls:xxls:w-[1080px] h-full flex flex-col justify-center mx-auto">
          <div className="text-white Hsm:flex Hsm:flex-col Hsm:items-center Hsm:text-center">
            <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-4">
              {title}
            </h2>
            <p className="text-[18px] max-w-[492px] Hsm:mt-4 Hsm:mx-4 Hmd:Hxl:mr-10 Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">
              {banner1.mainContent}
            </p>
          </div>

          <div className=" Hsm:gap-6 Hsm:flex-col Hsm:items-center w-full max-w-[1295px] h-auto flex justify-between items-center mt-[72px] mx-auto">
            <div className="w-[855px] max-w-[90%] Mlg:w-[280px] lg:xxls:w-[60%] h-[351px] flex flex-row box-border bg-[rgba(255,255,255,0.4)] rounded-[24px] [border:1px_white_solid] shadow-[0px_0px_6px_0px_#FFFFFF_inset] pt-[46px] pl-[48px] space-x-[150px] Hsm:space-x-[25px] Hsm:px-3">
              {banner1.childContent1.map((content, index) => {
                return (
                  <div key={index} className="w-[202px] h-[149px] rounded-sm">
                    <h3 className="text-[36px] font-medium leading-[54px] text-[#222222] Hsm:text-Ths3 Hmd:xxls:text-Ths2">
                      {content.title}
                    </h3>
                    <Image
                      src="/culture/underline.svg"
                      alt="underline"
                      width={32}
                      height={4}
                      className="my-3"
                    />
                    <p className="text-[16px] text-[#4D4B4B] font-normal leading-[30px] Hsm:text-Tps2 xxl:text-Tps">
                      {content.detail}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="max-w-[90%] Mlg:w-[280px] lg:xxls:w-[60%] w-[417px] h-[351px] flex flex-col box-border bg-[rgba(255,255,255,0.4)] rounded-[24px] [border:1px_white_solid] shadow-[0px_0px_6px_0px_#FFFFFF_inset] pt-[46px] pl-[49px] Hsm:pl-10">
              <h3 className="text-[36px] font-medium leading-[54px] text-[#222222] Hsm:text-Ths3 Hmd:xxls:text-Ths2">
                {banner1.childContent2.title}
              </h3>
              <Image
                src="/culture/underline.svg"
                alt="underline"
                width={32}
                height={4}
                className="my-3"
              />
              {banner1.childContent2.detail.map((content, index) => {
                return (
                  <p
                    key={index}
                    className="text-[16px] text-[#4D4B4B] font-normal leading-[30px] Hsm:text-Tps2 mb-5"
                  >
                    {content}
                  </p>
                );
              })}
            </div>
            {/* <div className=" flex Hsm:flex-col Hsm:gap-6 Hsm:items-center">
                            <div className="w-[66%] max-w-[90%] Mlg:w-[280px] lg:xxls:w-[60%] flex justify-between Mlg:flex-wrap Mlg:gap-6 box-border bg-[rgba(255,255,255,0.4)] rounded-[24px] p-12 Hmd:xxls:pr-[10%] xxl:pr-[21%] [border:1px_white_solid] shadow-[0px_0px_6px_0px_#FFFFFF_inset]">
                                {
                                    banner1.childContent1.map((content, index) => {
                                        return (
                                            <div key={index}>
                                                <h3 className="Hsm:text-Ths3 Hmd:xxls:text-Ths2 xxl:text-Ths">{content.title}</h3>
                                                <Image src='/culture/underline.svg' alt='underline' width={32} height={4} className="my-3" />
                                                <p className='Hsm:text-Tps2 xxl:text-Tps leading-[30px]' style={{ maxWidth: `${content.width}` }}>{content.detail}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="w-[32%] max-w-[90%] sssx:w-[90%] ssss:min-w-[280px] lg:xxls:w-[30%] bg-[rgba(255,255,255,0.4)] rounded-[24px] p-12 [border:1px_white_solid] shadow-[0px_0px_6px_0px_#FFFFFF_inset] ml-6 Hsm:mb-12 Mlg:mx-0">
                                <div>
                                    <div>
                                        <h3 className="text-Ths Hsm:text-Ths3 Hmd:xxls:text-Ths2">{banner1.childContent2.title}</h3>
                                        <Image src='/culture/underline.svg' alt='underline' width={32} height={4} className="my-3" />
                                        {
                                            banner1.childContent2.detail.map((content, index) => {
                                                return (
                                                    <p key={index} className='text-Tps Hsm:text-Tps2 leading-[30px]' style={{ maxWidth: `${content.width}` }}>{content}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>

      {/* 工作环境 */}
      <div className="w-full h-[1080px] Hsm:h-auto Hsm:py-12 Hmd:xxls:h-[860px]">
        <div className="w-[1295px] Hsm:w-full Hmd:xxls:w-[932px] h-full flex flex-col justify-center Hsm:items-center mx-auto pt-12">
          <h2 className="Hsm:text-[32px] Hmd:text-[42px] font-bold mb-6">
            工作环境
          </h2>
          <div className="Hsm:w-[90%] flex flex-wrap Hsm:flex-col Hsm:items-center gap-6">
            <div className="w-[848px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.471] Hmd:xxls:w-[593px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px] overflow-hidden">
              <Image
                src="/culture/office2.webp"
                alt="culture_banner2_2"
                width={423}
                height={400}
                className="w-full h-full rounded-[24px]"
              />
            </div>

            <Image
              src="/culture/office6.webp"
              alt="culture_banner2_2"
              width={423}
              height={400}
              className="Hsm:w-[100%] h-[400px] Hsm:h-auto Hsm:aspect-[1/0.946] Hmd:xxls:w-[296px] Hmd:xxls:h-[280px] rounded-[24px]"
            />

            <div className="w-[423px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.946] Hmd:xxls:w-[296px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]">
              <Image
                src="/culture/office4.webp"
                alt="culture_banner2_2"
                width={423}
                height={400}
                className="w-full h-full rounded-[24px]"
              />
            </div>
            <div className="w-[245px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[0.612/1] Hmd:xxls:w-[171px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]">
              <Image
                src="/culture/office1.webp"
                alt="culture_banner2_2"
                width={423}
                height={400}
                className="w-full h-full rounded-[24px]"
              />
            </div>
            <div className="w-[579px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.691] Hmd:xxls:w-[398px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]">
              <Image
                src="/culture/office5.webp"
                alt="culture_banner2_2"
                width={423}
                height={400}
                className="w-full h-full rounded-[24px]"
              />
            </div>
          </div>
        </div>

        {/* 
                <div className="w-[1295px] Hsm:w-full Hmd:xxls:w-[932px] h-full flex flex-col justify-center Hsm:items-center mx-auto pt-12">
                    <h2 className="Hsm:text-[32px] Hmd:text-[42px] font-bold mb-6">工作环境</h2>
                    <div className="Hsm:w-[90%] flex flex-wrap Hsm:flex-col Hsm:items-center gap-6">
                        <div className="w-[848px] h-[400px]  Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.642] Hmd:xxls:w-[593px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]"></div>
                        <Image src='/culture/culture_banner2_2.webp' alt="culture_banner2_2" width={423} height={400} className=" Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.665] Hmd:xxls:!w-[296px] Hmd:xxls:!h-[280px] rounded-[24px]" />
                        <div className="w-[423px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.666] Hmd:xxls:w-[296px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]"></div>
                        <div className="w-[245px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.666] Hmd:xxls:w-[171px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]"></div>
                        <div className="w-[579px] h-[400px] Hsm:w-[100%] Hsm:h-auto Hsm:aspect-[1/0.666] Hmd:xxls:w-[398px] Hmd:xxls:h-[280px] [background:linear-gradient(180deg,#E4ECFF_0%,#CCEAFF_100%)] rounded-[24px]"></div>
                    </div>
                </div>
                */}
      </div>

      {/* 员工风采 */}
      <div className="w-full h-[1080px] Hsm:h-auto Hsm:py-12 Hmd:xxls:h-[860px] [border-top:2px_#E4ECFF_solid]">
        <div className="w-[1295px] Hsm:w-full Hmd:xxls:w-[932px] h-full flex flex-col justify-center Hsm:items-center mx-auto pt-12">
          <h2 className="Hsm:text-[32px] Hmd:text-[42px] font-bold mb-6">
            员工风采
          </h2>
          <div className="Hsm:w-[90%] flex flex-wrap Hsm:flex-col Hsm:items-center gap-6">
            {banner3.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className={`${item.style} object-cover object-top`}
                />
                // <img key={index} src={item.src} alt={item.alt} className={`${item.style} object-cover object-top`} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
