import Image from "next/image"
import Head from "next/head"
import ImageGallery from '../ImageCard';

export default function About() {
    // banner1标题
    const title = '公司简介'

    //公司概述板块文案
    const contents1 = [
        "乐数科技成立于2021年，是一家面向全球的高科技互联网公司，专注于消费类软件的开发、运营和服务。自成立以来，xx凭借卓越的产品研发和运营能力，迅速赢得了市场的青睐，致力于在5-10年内实现IPO上市目标，成为具有全球影响力的上市公司。",
        "我们以创新为驱动，打造了多款具有强大市场竞争力的产品，服务客户遍布美国、日本、德国、英国等全球200多个国家和地区。公司自成立以来，完成了从0到1的飞跃，营业额已达数千万，并拥有稳定的现金流。",
        "乐数科技始终秉承“用户为本，科技向善”的宗旨，通过技术创新不断丰富用户的生活体验。我们致力于推动全球数字化转型，助力企业和个人实现更高效、更智能的未来。我们的愿景是成为全球领先的互联网高科技企业，为全球用户提供卓越的产品和服务，推动社会的可持续发展。"
    ]

    //经营理念板块内内容
    const contents2 = [
        { title: '用户体验为先', detail: '互联网公司高度重视用户体验,把用户的需求放在首位。他们致力于为用户提供简单、高效、人性化的产品和服务,不断优化用户体验。', bgImg: '/about/about_banner3_1.webp', alt: 'about_banner3_1' },
        { title: '创新驱动发展', detail: '互联网行业变化迅速,创新是互联网公司生存和发展的关键。他们鼓励创新思维,勇于尝试新技术、新模式,以保持领先优势。', bgImg: '/about/about_banner3_2.webp', alt: 'about_banner3_2' },


    ]

    const contents2S = [
        { title: '敏捷迭代', detail: '互联网公司倡导敏捷开发理念,快速迭代产品,根据用户反馈持续优化,缩短产品上市周期。', bgImg: '/about/about_banner3_3.webp', alt: 'about_banner3_3' },
        { title: '扁平协作', detail: '互联网公司普遍采用扁平化管理,鼓励团队协作,提高工作效率。员工之间平等交流,快速响应市场变化。', bgImg: '/about/about_banner3_4.webp', alt: 'about_banner3_4' },
        { title: '数据驱动', detail: '互联网公司高度重视数据分析,通过大数据、用户行为数据等指导产品优化和业务决策,实现精准运营。', bgImg: '/about/about_banner3_5.webp', alt: 'about_banner3_5' },
        { title: '国际视野', detail: '面向全球化发展,互联网公司拥有国际化视野,关注全球市场动态,与世界接轨,实现跨地区、跨国界的业务布局。', bgImg: '/about/about_banner3_6.webp', alt: 'about_banner3_6' }

    ];

    //前景与未来文案
    const contents3 = [
        "乐数科技将把触角延伸至更多新兴市场,为广大用户提供优质数字化产品和服务,满足不同群体的多元化需求,实现全球化发展。",
        "乐数科技将整合云计算、大数据、人工智能等前沿技术,不断优化用户体验、加大营销推广力度等方式,持续吸引新用户,提高市场占有率，为用户创造无缝体验。",
        "乐数科技的长期发展目标是持续创新、扩大市场份额、引领技术发展、实现全球化布局、构建生态体系、提升品牌影响力,并在追求经济增长的同时注重社会责任和可持续发展。"
    ]

    return (

        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`这是${title}页面`} />
            </Head>
            <div className="about">

                {/* 头部横幅 */}
                <div className="flex justify-center text-center items-center w-full h-[680px] Hmd:xxls:h-[30rem] overflow-hidden bg-no-repeat bg-cover bg-top Hsm:bg-[#DAE0F0] bg-[url('/about/about_banner1.svg')]">
                    <div className="flex justify-center items-center flex-col text-white mx-4">
                        <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-4">为幸福生活插上腾飞的翅膀</h2>
                        <p className="Hsm:w-[90%] Hmd:w-[377px] Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">洞悉时代变迁,灵活应对差异化需求,成为全球领先的互联网高科技企业</p>
                    </div>
                </div>

                {/* 公司概述 */}
                <div className="w-full h-[1103px] Hmd:Mffs:h-[850px] flex justify-center">
                    <div className="max-w-[1120px] flex justify-center items-center flex-col text-[#282828] Hsm:mb-8">
                        <div className="w-full max-w-[1120px] flex Hsm:flex-col Hsm:items-center Hmd:justify-between">
                            <div className="mx-4">
                                <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold">公司概述</h2>
                                <Image src='/about/underline.svg' alt="underline" width={72} height={4} className="Hsm:w-full Hsm:h-[4px]" />
                            </div>
                            <div className="text-[18px] max-w-[708px] Hxl:max-w-[500px] Hsm:mt-4 Hsm:mx-4 Hmd:Hxl:mr-10 Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">
                                {
                                    contents1.map((content, index) => {
                                        return (<p key={index} className="mb-10">{content}</p>)
                                    })
                                }
                            </div>
                        </div>
                        <Image src='/about/about_banner2.svg' alt="about_banner2" width={1120} height={317} className="rounded-3xl object-cover Hxl:w-[90%] Hxl:h-[25%]" />
                    </div>
                </div>


                {/* 经营理念 */}
                <div className="w-full h-null sss:Hsm:h-[1580px] Hmd:Mffs:h-[850px] bg-gradient-to-r from-[#F2EAFF] to-[#F0FEFF] flex justify-center">
                    <div className="w-[1296px] Hsm:w-[628px] Hmd:Mffs:w-[932px] flex flex-col justify-center relative overflow-hidden">
                        <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-8 text-center">经营理念</h2>
                        <div className="flex flex-wrap gap-8 Hsm:gap-4 Hsm:justify-center mb-32px">
                            {
                                contents2.map((content, index) => {
                                    return (
                                        <div key={index} className={`imgContainer Hsm:h-auto ${index <= 1 ? 'Hsm:mx-4 Hmd:last:Mffs:w-[450px] Hmd:Mffs:h-[286px]' : index === contents2.length - 1 ?
                                            'Hsm:w-[60%] Hmd:Mffs:w-[278px] Hmd:Mffs:h-[250px]' : 'Hsm:w-[27.5%] Hmd:Mffs:w-[186px] Hmd:Mffs:h-[258px]'} relative flex justify-center`}>

                                            <div className="absolute text-white top-[15%] flex flex-col items-center z-10">
                                                <p className="text-[32px] Hsm:text-[20px] mb-2 font-bold">{content.title}</p>
                                                <p className="max-w-[80%] text-[16px] Hsm:text-[14px] leading-[24px]">{content.detail}</p>
                                            </div>
                                            <img src={content.bgImg} alt={content.alt} className="rounded-3xl object-cover" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="Hsm:hidden">
                            <ImageGallery />
                        </div>
                        <ul className="w-full h-full hidden Hsm:flex flex-wrap gap-2 justify-center items-center">
                            {
                                contents2S.map((contents, index) => {
                                    return (
                                        <li key={index} className="flex justify-center items-center w-[250px] h-[250px] imgContainer ">
                                            <div className="absolute text-white top-[15%] justify-end flex-col z-10 flex Hsm:justify-center Hsm:items-center">
                                                <p className="leading-[36px] text-[20px] font-bold ">{contents.title}</p>
                                                <p className="max-w-[80%] text-[14px] leading-[24px] ">{contents.detail}</p>
                                            </div>
                                            <img src={contents.bgImg} alt={contents.alt} className="rounded-3xl w-[250px] h-[250px]" />
                                        </li>
                                    )
                                })}
                        </ul>

                    </div>
                </div>


                {/* 用户覆盖 */}
                <div className="w-full h-[1000px] Mlg:h-[500px] lg:Hsm:h-[680px]">
                    <div className=" h-full flex justify-center items-center">
                        <div className="max-w-[1400px] relative mx-4">
                            <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-8 text-center">用户覆盖全球200多个国家和地区</h2>
                            <img src="/about/about_banner4.webp" alt="about_banner4" />
                        </div>
                    </div>
                </div>


                {/* 前景与未来 */}
                <div className="w-full h-[650px] bg-no-repeat bg-cover bg-right bg-[url('/about/about_banner5.svg')]">
                    <div className="h-full flex flex-col justify-center items-center">
                        <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-8 text-center">前景与未来</h2>
                        <div className="text-[18px] max-w-[809px] Hsm:mt-4 Hsm:mx-4 Hmd:Hxl:mr-10 Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">
                            {
                                contents3.map((content, index) => {
                                    return (<p key={index} className="mb-10">{content}</p>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}