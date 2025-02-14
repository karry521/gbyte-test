// /src/components/contact/contact.js
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from "next/head"
import Link from 'next/link';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>产品介绍</title>
                <meta name="description" content="全面的iOS设备数据取证解决方案" />
            </Head>

            {/* 首屏 */}
            <div className="bg-[url('/product/group.webp')] bg-cover w-full">
                <div className='w-[1400px] sm:w-full flex sm:flex-col justify-between mx-auto'>
                    <div className='py-[160px] sm:pt-[80px] sm:pb-4 sm:px-[15px]'>
                        <h1 className='text-[56px] leading-[84px] sm:text-[42px] sm:leading-[65px] font-[700] text-[#222222] sm:text-center'>全面的iOS设备数据取证解决方案</h1>
                        <p className='mt-[24px] text-[18px] leading-[30px] sm:text-center'>本产品为执法和调查机构提供专业的iOS设备数据提取与解密工具，助您获取完整的证据链。</p>
                        <Link className='bg-[#0633FF] hover:bg-[#0502a3] rounded-[8px] w-[190px] h-[48px] mt-[117px] sm:mt-[30px] sm:mx-auto flex justify-center items-center text-[#FFFFFF] text-[24px] font-[500]'
                            href='/forensicTools'>申请试用</Link>
                    </div>
                    <Image src='/product/cloud.webp' width={450} height={449} alt='cloud' className='mt-[80px] sm:mt-[20px] w-[450px] h-full sm:w-[70%] sm:mx-auto' />
                </div>
            </div>

            {/* 第二屏 */}
            <div className='bg-[#FFFFFF] w-full pt-[145px] pb-[190px] sm:py-[42px]'>
                <h2 className='text-[48px] leading-[72px] font-[700] text-[#222222] text-center'>核心功能</h2>
                <div className='w-[1410px] sm:w-full mx-auto grid grid-cols-4 sm:grid-cols-1 gap-[30px] sm:gap-5 mt-[90px] sm:mt-[30px] sm:mx-auto'>
                    <div className='border-[1px] border-[#669AFF] bg-[#E4EDFF] rounded-[24px] w-[330px] h-[380px] pl-[45px] pt-[48px] flex flex-col justify-between sm:mx-auto' style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <div>
                            <h3 className='font-[700] text-[24px] leading-[36px] text-[#0633FF]'>逻辑和无线数据获取</h3>
                            <p className='text-[16px] leading-[24px] text-[#282938] opacity-[60%] pr-[45px] mt-[32px]'>
                                帮助执法部门在合法权限下快速获取和分析嫌疑人的iOS设备及iCloud数据。
                            </p>
                        </div>
                        <div className='mb-[28px] flex justify-end mr-6'>
                            <Image src='/product/wifi.svg' width={135} height={117} alt='' />
                        </div>
                    </div>
                    <div className='border-[1px] border-[#669AFF] bg-[#E4EDFF] rounded-[24px] w-[330px] h-[380px] pl-[45px] pt-[48px] flex flex-col justify-between sm:mx-auto' style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <div>
                            <h3 className='font-[700] text-[24px] leading-[36px] text-[#0633FF]'>破解加密备份</h3>
                            <p className='text-[16px] leading-[24px] text-[#282938] opacity-[60%] pr-[45px] mt-[32px]'>
                                利用GPU加速功能高效破解iOS备份密码，支持快速解密本地备份文件，确保重要信息不被遗漏。
                            </p>
                        </div>
                        <div className='mb-[30px] flex justify-end mr-[40px]'>
                            <Image src='/product/lock.svg' width={106} height={109} alt='' />
                        </div>
                    </div>
                    <div className='border-[1px] border-[#669AFF] bg-[#E4EDFF] rounded-[24px] w-[330px] h-[380px] pl-[45px] pt-[48px] flex flex-col justify-between sm:mx-auto' style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <div>
                            <h3 className='font-[700] text-[24px] leading-[36px] text-[#0633FF]'>iCloud解密与数据提取</h3>
                            <p className='text-[16px] leading-[24px] text-[#282938] opacity-[60%] pr-[45px] mt-[32px]'>
                                支持解密并提取iCloud钥匙串（Keychain）和iCloud消息中的多媒体文件、文档等，完整还原iCloud存储的信息。
                            </p>
                        </div>
                        <div className='mb-4 flex justify-end mr-5'>
                            <Image src='/product/key.svg' width={140} height={140} alt='' />
                        </div>
                    </div>
                    <div className='border-[1px] border-[#669AFF] bg-[#E4EDFF] rounded-[24px] w-[330px] h-[380px] pl-[45px] pt-[48px] flex flex-col justify-between sm:mx-auto' style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <div>
                            <h3 className='font-[700] text-[24px] leading-[36px] text-[#0633FF]'>下载云端备份和同步数据</h3>
                            <p className='text-[16px] leading-[24px] text-[#282938] opacity-[60%] pr-[45px] mt-[32px]'>
                                利用GPU加速功能高效破解iOS备份密码，支持快速解密本地备份文件，确保重要信息不被遗漏。
                            </p>
                        </div>
                        <div className='mb-4 flex justify-end mr-5'>
                            <Image src='/product/gpu.svg' width={140} height={140} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* 第三屏 */}
            <div className='mx-[24px] sm:mx-[15px] pt-[90px] pb-[200px] sm:py-[42px] rounded-[24px]' style={{ background: 'linear-gradient(251.74deg, #F0FEFF 0%, #F2EAFF 100%)' }}>
                <h2 className='font-[700] text-[42px] leading-[63px] text-center text-[#222222]'>产品优势</h2>
                <div className='w-[1410px] mx-auto mt-[114px] sm:w-full sm:mt-[30px] grid grid-cols-4 sm:grid-cols-1 gap-[30px] sm:gap-5'>
                    <div className='w-[330px] h-[290px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF] rounded-[16px] pt-[42px] px-[45px] sm:mx-auto'
                        style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <Image src='/product/高效.svg' width={64} height={64} alt='高效' className='mx-auto' />
                        <h3 className='mt-[12px] text-center font-[500] text-[24px] leading-[31px] text-[#222222]'>高效的GPU加速解密</h3>
                        <p className='mt-[24px] text-center text-[16px] leading-[24px] text-[#282938] opacity-[60%]'>
                            利用先进的GPU技术提升解密速度，缩短数据获取的时间，保证信息及时完整。
                        </p>
                    </div>
                    <div className='w-[330px] h-[290px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF] rounded-[16px] pt-[42px] px-[45px] sm:mx-auto'
                        style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <Image src='/product/友好.svg' width={64} height={64} alt='友好' className='mx-auto' />
                        <h3 className='mt-[12px] text-center font-[500] text-[24px] leading-[31px] text-[#222222]'>用户友好的操作体验</h3>
                        <p className='mt-[24px] text-center text-[16px] leading-[24px] text-[#282938] opacity-[60%]'>
                            简洁直观的界面设计，操作简单便捷，适合各类专业人员使用。
                        </p>
                    </div>
                    <div className='w-[330px] h-[290px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF] rounded-[16px] pt-[42px] px-[45px] sm:mx-auto'
                        style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <Image src='/product/兼容.svg' width={64} height={64} alt='兼容' className='mx-auto' />
                        <h3 className='mt-[12px] text-center font-[500] text-[24px] leading-[31px] text-[#222222]'>兼容性广泛</h3>
                        <p className='mt-[24px] text-center text-[16px] leading-[24px] text-[#282938] opacity-[60%]'>
                            适用于iOS设备及云端账户，支持在无Apple ID密码的情况下获取数据。
                        </p>
                    </div>
                    <div className='w-[330px] h-[290px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF] rounded-[16px] pt-[42px] px-[45px] sm:mx-auto'
                        style={{ boxShadow: 'inset 0px 0px 6px 0px #FFFFFF' }}>
                        <Image src='/product/全方位.svg' width={64} height={64} alt='全方位' className='mx-auto' />
                        <h3 className='mt-[12px] text-center font-[500] text-[24px] leading-[31px] text-[#222222]'>全方位的数据覆盖</h3>
                        <p className='mt-[24px] text-center text-[16px] leading-[24px] text-[#282938] opacity-[60%]'>
                            支持从本地设备、云端备份、同步数据等多种来源提取信息，提供全面的取证能力。
                        </p>
                    </div>
                </div>
            </div>

            {/* 第四屏 */}
            <div className='w-full bg-[#FFFFFF] pt-[100px] pb-[180px] sm:py-[42px]'>
                <h2 className='font-[700] text-[42px] leading-[63px] text-[#222222] text-center'>应用场景</h2>
                <div className='mt-[60px] sm:mt-[30px] flex sm:flex-col justify-center'>
                    <div className="bg-[url('/product/app1.webp')] bg-cover rounded-[24px] w-[264px] sm:w-[80%] h-[367px] pt-[48px] px-[40px] relative sm:mx-auto">
                        <div className='absolute top-0 left-0 w-full h-full rounded-[24px]' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.03) 100%)' }}></div>
                        <h3 className='text-[#FFFFFF] text-[24px] leading-[36px] font-[700] relative z-1'>执法取证</h3>
                    </div>
                    <div className="bg-[url('/product/app2.webp')] bg-cover rounded-[24px] w-[264px] sm:w-[80%] h-[367px] pt-[48px] px-[40px] mx-[32px] relative sm:mx-auto sm:my-5">
                        <div className='absolute top-0 left-0 w-full h-full rounded-[24px]' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.24) 10.22%, rgba(0, 0, 0, 0.04) 100%)' }}></div>
                        <h3 className='text-[#FFFFFF] text-[24px] leading-[36px] font-[700] relative z-1'>企业安全调查</h3>
                    </div>
                    <div className="bg-[url('/product/app3.webp')] bg-cover rounded-[24px] w-[264px] sm:w-[80%] h-[367px] pt-[48px] px-[40px] relative sm:mx-auto">
                        <div className='absolute top-0 left-0 w-full h-full rounded-[24px]' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.54) 15.92%, rgba(0, 0, 0, 0.09) 100%)' }}></div>
                        <h3 className='text-[#FFFFFF] text-[24px] leading-[36px] font-[700] relative z-1'>家庭数字安全</h3>
                    </div>
                    <div className="bg-[url('/product/app4.webp')] bg-cover rounded-[24px] w-[408px] sm:w-[80%] h-[367px] pt-[48px] px-[40px] ml-[32px] relative sm:mx-auto sm:mt-5">
                        <div className='absolute top-0 left-0 w-full h-full rounded-[24px]' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.36) 15.92%, rgba(0, 0, 0, 0.06) 100%)' }}></div>
                        <h3 className='text-[#FFFFFF] text-[24px] leading-[36px] font-[700] relative z-1'>数据恢复服务</h3>
                        <p className='text-[16px] leading-[24px] text-[#FFFFFF] mt-5 relative z-1'>
                            为数据恢复专业人士提供解密和提取工具，帮助客户恢复重要数据
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;
