// /src/components/contact/contact.js
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from "next/head"

//组件路径
const MapComponent = dynamic(() => import('../MapComponent'), { ssr: false });

const ContactPage = () => {
    // banner1标题
    const title = '联系我们'
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`这是${title}页面`} />
            </Head>
            <div className="flex flex-col justify-center items-center relative w-full h-[896px] Hsm:pt-20 Hsm:h-[560px] bg-no-repeat bg-cover bg-[url('/contact/corona-virus1.webp')] bg-custom ">
                <div className="flex flex-col justify-center items-start w-[1445px] Hxls:xxls:w-[1200px] Hxl:w-[900px] Hsm:w-full Hsm:h-[560px] content Hsm:content-center Hsm:items-center">
                    <p className="font-normal text-[22px] text-[#FFFFFF] leading-[33px]">CONTACT US</p>
                    <h2 className="font-bold text-[56px] text-[#FFFFFF] leading-[84px]">联系我们</h2>
                </div>
            </div>
            <div className="w-full h-[356px] Hsm:h-full flex items-center justify-center">
                <ul className="Hsm:hidden flex items-center justify-between w-[1445px] h-[117px] my-10px Hxls:xxls:w-full">
                    <li className="w-[173px]  h-[85px]">
                        <div className='flex items-center justify-start'>
                            <Image src="/contact/call.svg" width={30} height={30}></Image>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3 className="flex items-center justify-start Hsm:text-[20px] text-[#000000] text-[30px] leadding-[45px] font-medium">联系电话</h3>
                        </div>
                        <div className='mt-[25px] ml-[45px] w-[150px] h-[21px]'>
                            <p className="flex items-center justify-start text-[18px] text-[#545454] leadding-[21.47px] font-normal">0755-23008753</p>
                        </div>
                    </li>

                    <li className=" w-[255px] h-[85px]">
                        <div className='flex items-center justify-start'>
                            <Image src="/contact/email.svg" width={30} height={30}></Image>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3 className="flex items-center justify-between text-[#000000] text-[30px] leadding-[45px] font-medium">电子邮箱</h3>
                        </div>
                        <div className='mt-[25px] ml-[45px]'>
                            <p className="flex items-center justify-start text-[18px]text-[#545454] leadding-[21px] font-normal">service@gbyte.com.cn</p>
                        </div>
                    </li>
                    <li className=" w-[315px] h-[117px]">
                        <div className='flex items-center justify-start mt-4'>
                            <Image src="/contact/GPS.svg" width={30} height={30}></Image>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3 className="flex items-center justify-between text-[#000000] text-[30px] leadding-[45px] font-medium">公司地址</h3>
                        </div>
                        <div className='mt-[25px] ml-[45px]'>
                            <p className="flex items-center justify-start text-[18px] text-[#545454] leadding-[21px] font-normal">广东省深圳市宝安区新安街道海裕社区82区华美居商务中心B区716</p>
                        </div>

                    </li>
                    <li className="w-[220px]  h-[86px]">
                        <div className='flex items-center justify-start'>
                            <Image src="/contact/公共交通1.svg" width={30} height={30}></Image>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3 className="flex items-center justify-between  text-[#000000] text-[30px] leadding-[45px] font-medium">公共交通</h3>
                        </div>
                        <div className='mt-[25px] ml-[45px]'>
                            <p className="flex items-center justify-start text-[18px] text-[#545454] leadding-[21px] font-normal">1号线 宝体站 B出口</p>
                        </div>
                    </li>
                </ul>

                <ul className="Hsm:flex hidden flex-col w-full h-full">
                    <li className='my-4 mx-2'>
                        <h3 className="flex items-center justify-center text-[#000000] text-[30px] leadding-[45px] font-medium"><Image src="/contact/call.svg" width={30} height={30}></Image>&nbsp;&nbsp;联系电话</h3>
                        <p className="flex items-center justify-center text-[18px] text-[#545454] leadding-[21px] font-normal">0755-23008753</p>
                    </li>
                    <li className='my-4 mx-2'>
                        <h3 className="flex items-center justify-center text-[#000000] text-[30px] leadding-[45px] font-medium"><Image src="/contact/email.svg" width={30} height={30}></Image>&nbsp;&nbsp;电子邮箱</h3>
                        <p className="flex items-center justify-center text-[18px] text-[#545454] leadding-[21px] font-normal">service@gbyte.com.cn</p>
                    </li>
                    <li className='my-4 mx-2'>
                        <h3 className="flex items-center justify-center text-[#000000] text-[30px] leadding-[45px] font-medium"><Image src="/contact/GPS.svg" width={30} height={30}></Image>&nbsp;&nbsp;公司地址</h3>
                        <p className="flex items-center justify-center text-[18px] text-[#545454] leadding-[21px] font-normal">广东省深圳市宝安区新安街道海裕社区82区华美居商务中心B区716</p>
                    </li>
                    <li className='my-4 mx-2'>
                        <h3 className="flex items-center justify-center text-[#000000] text-[30px] leadding-[45px] font-medium"><Image src="/contact/公共交通1.svg" width={30} height={30}></Image>&nbsp;&nbsp;公共交通</h3>
                        <p className="flex items-center justify-center text-[18px] text-[#545454] leadding-[21px] font-normal">1号线 宝体站 B出口</p>
                    </li>
                </ul>
            </div>
            <div className='w-full h-[412px] flex items-center justify-center my-10 relative'>
                <MapComponent />
            </div>
        </>
    );
};

export default ContactPage;
