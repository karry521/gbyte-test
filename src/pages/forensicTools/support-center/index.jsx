import { Fragment, useEffect, useRef, useState } from 'react'
import Image from "next/image"
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import Link from 'next/link'

const SupportCenter = () => {
    return (
        <Fragment>
            <header className='Hmd:sticky top-0'>
                <Header />
            </header>
            <main>
                <article>
                    <div className='w-full max-w-[1600px] min-h-[698px] lg:h-[1008px] mx-auto [font-family:Source_Han_Sans_CN] flex flex-col items-center pt-[90px]  Mlg:px-4'>

                        {/* title */}
                        <h1 className='Mlg:flex Mlg:flex-col items-center text-[36px] text-[#222222] font-[500] leading-[54px]'>
                            乐数取证
                            <span className='text-[#3783FD] lg:ml-[33px]'>用户服务中心</span>
                        </h1>

                        {/* 售前咨询 */}
                        <div className='flex Mlg:flex-col Mlg:items-center items-start text-[30px] text-[#222222] font-[400] leading-[45px] my-[60px]'>
                            <h2>售前咨询</h2>
                            <div className='Mlg:flex Mlg:flex-col Mlg:items-center text-[24px] text-[#666666] leading-[36px] lg:ml-[23px] mt-[5px]'>
                                <p className='mb-[6px]'>Tel: 0755-76747437</p>
                                <p className='Mlg:flex flex-col items-center'>Email: <span>jfihguaghrieao@gmail.com</span></p>
                            </div>
                        </div>

                        {/* 售后咨询 */}
                        <div className='flex Mlg:flex-col Mlg:items-center items-start text-[30px] text-[#222222] font-[400] leading-[45px]'>
                            <h2>售后咨询</h2>
                            <div className='Mlg:flex Mlg:flex-col Mlg:items-center text-[24px] text-[#666666] leading-[36px] lg:ml-[23px] mt-[5px]'>
                                <p className='mb-[6px]'>Tel: 0755-76747437</p>
                                <p className='Mlg:flex flex-col items-center'>Email: <span>jfihguaghrieao@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <footer>
                <Footer />
            </footer>
        </Fragment >
    )
}

export default SupportCenter