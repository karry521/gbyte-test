import Image from "next/image";
import Head from "next/head";
import React, { useEffect } from 'react';

export default function Benefits() {
 
    const title = '员工福利';
    const content = '为员工构筑具备同业竞争优势的全面薪资福利保障';
    const bgSrc = '/benefits/yuansu.webp';
    const benefits = [
        {
            title: '薪酬收入',
            content: '我们为员工量身打造了一整套具有竞争力的薪酬激励体系,包括有竞争力的基本薪酬、核心骨干的股权激励、内部期权奖励、丰厚的年终奖金、知识产权奖励、营销业绩奖金、项目绩效奖金、突出贡献奖励、辛勤奉献奖励、技术大赛奖金等',
            bgSrc: '/benefits/1.webp'
        },
        {
            title: '带薪休假',
            content: '包括年假、病假、婚假、产假/陪产假、丧假等多种带薪休假类型,全面满足员工在不同生活阶段和特殊情况下的休息需求，倡导员工在工作和生活之间保持平衡。',
            bgSrc: '/benefits/2.webp'
        },
        {
            title: '定期体检',
            content: '及时了解员工的身体状况,为不同年龄阶段和工种的员工量身定制合理的体检项目，彰显企业的社会责任感和人文关怀理念。',
            bgSrc: '/benefits/3.webp'
        },
        {
            title: '节日福利',
            content: '如春节、中秋、端午等,以及三八妇女节、五一劳动节等，公司提供现金红包、实物礼品、节日补贴、节日活动等多种形式，提升员工的幸福感。',
            bgSrc: '/benefits/4.webp'
        },
        {
            title: '日常关怀',
            content: '在员工生日、结婚、生育等重要时刻给予祝福和实物礼品，了解员工的个人爱好和需求。为员工提供培训机会、职业生涯规划等,助力员工个人成长,实现自我价值。',
            bgSrc: '/benefits/5.webp'
        }
    ];
    useEffect(() => {
        const sections = document.querySelectorAll('.js-scroll');
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(`fade-in-${(index + 1) * 2}s`);
              }
            });
          },
          {
            threshold: 0.1, // 可以根据需要调整
          }
        );
    
        sections.forEach((section) => {
          observer.observe(section);
        });
    
        return () => {
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
      }, 
      []);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`这是${title}页面`} />
            </Head>
            <div className="w-full h-[460px] Hsm:pt-20 Hsm:h-[560px] bg-no-repeat bg-cover bg-bottom bg-[url('/benefits/f3c9d9665f1a9b90c4332a317d49980b3de3c23c92026-eTzckh_fw1200webp1.webp')]">
                <div className="w-[1450px] Hxl:w-[700px] Hsm:w-[90%] Hxls:xxls:w-[1000px] h-full flex Hsm:flex-col Hsm:justify-center Hmd:justify-between items-center mx-auto">
                    <div className="flex flex-col justify-center Hsm:text-center Hsm:items-center Hmd:items-start text-white relative Hsm:mt-20">
                        <h2 className="w-[224px] Hsm:w-full Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-6">{title}</h2>
                        <p className="w-[542px] Hsm:w-full Hxl:w-[361px] Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">{content}</p>
                    </div>
                    <div className="Hsm:w-[380px] Hsm:h-[380px]">
                        <Image src={bgSrc} width={650} height={650} alt="yuansu" />
                    </div>
                </div>
            </div>


            <div className="Hsm:flex Hsm:items-center Hsm:justify-center Hsm:py-10 flex items-center justify-center w-full h-full py-14 overflow-hidden1">
                <ul className="Hsm:hidden">
                    <li className="Hxls:xxls:w-[1000px] Hxl:w-[900px] Hsm:w-[300px] Hsm:items-center Hsm:flex Hsm:flex-col Hsm:justify-between w-[1229px] h-[450.24] flex items-center justify-between my-[68.49px]">
                        <div className="lft-photo overflow-hidden1 w-[614.5px]">
                            <Image src="/benefits/1.webp" width={550} height={550} alt="1" className="img-fluid"></Image>
                        </div>
                        <div className="w-[614.5px] flex flex-col justify-center p-[20px_0px_0px_120px] overflow-hidden positive-relative">
                            <h2 className="Hsm:text-center Hsm:pb-2 pb-4 text-[#000000] text-4xl font-bold line-height-[54px] fade-in-2s js-scroll transition-opacity duration-500">
                                <div className="Hsm:top-[18px] Hsm:left-[70px] w-[19px] h-[24px] -rotate-45 rounded-[9.5px] bg-gradient-to-b from-[#6581FF] to-[#738CFF]-80% relative top-[18px] right-[8px]"></div>薪酬收入</h2>
                            <p className="js-scroll transition-opacity duration-500 fade-in-6s Hsm:break-all Hsm:text-Bps Hxl:w-[361px] Hmd:text-Mps2 xxl:text-Mps w-[430px] h-[150px] text-[#4D4B4B] text-lg font-normal line-height-[30px]">我们为员工量身打造了一整套具有竞争力的薪酬激励体系,包括有竞争力的基本薪酬、核心骨干的股权激励、内部期权奖励、丰厚的年终奖金、知识产权奖励、营销业绩奖金、项目绩效奖金、突出贡献奖励、辛勤奉献奖励、技术大赛奖金等</p>
                        </div>
                    </li>



                    <li className="Hxls:xxls:w-[1000px] Hxl:w-[900px] Hsm:w-[300px] Hsm:items-center Hsm:flex Hsm:flex-col Hsm:justify-between w-[1229px] h-[450.24] flex items-center justify-between my-[68.49px]">
                        <div className="w-[614.5px] flex flex-col justify-center p-[20px_0px_0px_120px] overflow-hidden positive-relative">
                            <h2 className="Hsm:text-center Hsm:pb-2 pb-4 text-[#000000] text-4xl font-bold line-height-[54px] fade-in-2s js-scroll transition-opacity duration-500">
                                <div className="Hsm:top-[18px] Hsm:left-[70px] w-[19px] h-[24px] -rotate-45 rounded-[9.5px] bg-gradient-to-b from-[#6581FF] to-[#738CFF]-80% relative top-[18px] right-[8px]"></div>带薪休假</h2>
                            <p className="js-scroll transition-opacity duration-500 fade-in-6s Hsm:break-all Hsm:text-Bps Hxl:w-[361px] Hmd:text-Mps2 xxl:text-Mps w-[440px] h-[90px] text-[#4D4B4B] text-lg font-normal line-height-[30px]">包括年假、病假、婚假、产假/陪产假、丧假等多种带薪休假类型,全面满足员工在不同生活阶段和特殊情况下的休息需求，倡导员工在工作和生活之间保持平衡。</p>
                        </div>
                        <div className="lft-photo overflow-hidden1 w-[614.5px]">
                            <Image src="/benefits/2.webp" width={550} height={550} alt="2" className="img-fluid"></Image>
                        </div>
                    </li>




                    <li className="Hxls:xxls:w-[1000px] Hxl:w-[900px] Hsm:w-[300px] Hsm:items-center Hsm:flex Hsm:flex-col Hsm:justify-between w-[1229px] h-[450.24] flex items-center justify-between my-[68.49px]">
                        <div className="lft-photo overflow-hidden1 w-[614.5px]">
                            <Image src="/benefits/3.webp" width={550} height={550} alt="" className="img-fluid"></Image>
                        </div>
                        <div className="w-[614.5px] flex flex-col justify-center p-[20px_0px_0px_120px] overflow-hidden positive-relative">
                            <h2 className="Hsm:text-center Hsm:pb-2 pb-4 text-[#000000] text-4xl font-bold line-height-[54px] fade-in-2s js-scroll transition-opacity duration-500">
                                <div className="Hsm:top-[18px] Hsm:left-[70px] w-[19px] h-[24px] -rotate-45 rounded-[9.5px] bg-gradient-to-b from-[#6581FF] to-[#738CFF]-80% relative top-[18px] right-[8px]"></div>定期体检</h2>
                            <p className="js-scroll transition-opacity duration-500 fade-in-6s Hsm:break-all Hsm:text-Bps Hxl:w-[361px] Hmd:text-Mps2 xxl:text-Mps w-[430px] h-[90px] text-[#4D4B4B] text-lg font-normal line-height-[30px]">及时了解员工的身体状况,为不同年龄阶段和工种的员工量身定制合理的体检项目，彰显企业的社会责任感和人文关怀理念。</p>
                        </div>
                    </li>




                    <li className="Hxls:xxls:w-[1000px] Hxl:w-[900px] Hsm:w-[300px] Hsm:items-center Hsm:flex Hsm:flex-col Hsm:justify-between w-[1229px] h-[450.24] flex items-center justify-between my-[68.49px]">
                        <div className="w-[614.5px] flex flex-col justify-center p-[20px_0px_0px_120px] overflow-hidden positive-relative">
                            <h2 className="Hsm:text-center Hsm:pb-2 pb-4 text-[#000000] text-4xl font-bold line-height-[54px] fade-in-2s js-scroll transition-opacity duration-500">
                                <div className="Hsm:top-[18px] Hsm:left-[70px] w-[19px] h-[24px] -rotate-45 rounded-[9.5px] bg-gradient-to-b from-[#6581FF] to-[#738CFF]-80% relative top-[18px] right-[8px]"></div>节日福利</h2>
                            <p className="js-scroll transition-opacity duration-500 fade-in-6s Hsm:break-all Hsm:text-Bps Hxl:w-[361px] Hmd:text-Mps2 xxl:text-Mps w-[440px] h-[90px] text-[#4D4B4B] text-lg font-normal line-height-[30px]">如春节、中秋、端午等,以及三八妇女节、五一劳动节等，公司提供现金红包、实物礼品、节日补贴、节日活动等多种形式，提升员工的幸福感。</p>
                        </div>
                        <div className="lft-photo overflow-hidden1 w-[614.5px]">
                            <Image src="/benefits/4.webp" width={550} height={550} alt="" className="img-fluid"></Image>
                        </div>
                    </li>



                    <li className="Hxls:xxls:w-[1000px] Hxl:w-[900px] Hsm:w-[300px] Hsm:items-center Hsm:flex Hsm:flex-col Hsm:justify-between w-[1229px] h-[450.24] flex items-center justify-between my-[68.49px]">
                        <div className="lft-photo overflow-hidden1 w-[614.5px]">
                            <Image src="/benefits/5.webp" width={550} height={550} alt="" className="img-fluid"></Image>
                        </div>
                        <div className="w-[614.5px] flex flex-col justify-center p-[20px_0px_0px_120px] overflow-hidden positive-relative">
                            <h2 className="Hsm:text-center Hsm:pb-2 pb-4 text-[#000000] text-4xl font-bold line-height-[54px] fade-in-2s js-scroll transition-opacity duration-500">
                                <div className="Hsm:top-[18px] Hsm:left-[70px] w-[19px] h-[24px] -rotate-45 rounded-[9.5px] bg-gradient-to-b from-[#6581FF] to-[#738CFF]-80% relative top-[18px] right-[8px]"></div>日常关怀</h2>
                            <p className="js-scroll transition-opacity duration-500 fade-in-6s Hsm:break-all Hsm:text-Bps Hxl:w-[361px] Hmd:text-Mps2 xxl:text-Mps w-[443px] h-[90px] text-[#4D4B4B] text-lg font-normal line-height-[30px]">在员工生日、结婚、生育等重要时刻给予祝福和实物礼品，了解员工的个人爱好和需求。为员工提供培训机会、职业生涯规划等,助力员工个人成长,实现自我价值。</p>
                        </div>
                    </li>
                </ul>



                <ul className="Hsm:flex hidden Hsm:flex-col Hsm:items-center Hsm:justify-center Hsm:py-10">
                    {benefits.map((item, index) => (
                        <li key={index} className="Hxls:xxls:w-[1000px] Hxl:w-[900px] Hsm:w-[300px] Hsm:items-center Hsm:flex Hsm:flex-col Hsm:justify-between flex items-center justify-between Hsm:my-6">
                            <div className="lft-photo overflow-hidden w-[300px]">
                                <Image src={item.bgSrc} width={500} height={500} alt={item.title} className="img-fluid" />
                            </div>
                            <div className="w-[300px] content-start">
                                <h2 className="Hsm:text-center Hsm:pb-3 text-[#000000] text-4xl font-bold line-height-[54px]">
                                    <div className="Hsm:top-[18px] Hsm:left-[70px] w-[19px] h-[24px] -rotate-45 rounded-[9.5px] bg-gradient-to-b from-[#6581FF] to-[#738CFF]-80% relative top-[18px] right-[8px]"></div>{item.title}
                                </h2>
                                <p className="Hsm:w-full Hsm:h-full Hsm:break-all Hsm:text-Bps w-[430px] h-[150px] text-[#4D4B4B] text-lg font-normal line-height-[30px]">{item.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}