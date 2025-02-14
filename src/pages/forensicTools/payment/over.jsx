import Image from 'next/image'
import { Fragment } from 'react'
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"

const Over = () => {
    return (
        <Fragment>
            <header className='Hmd:sticky top-0'>
                <Header />
            </header>
            <main>
                <article>
                    <div className='w-full max-w-[1200px] min-h-[521px] smjs:h-[828px] mx-auto [font-family:Source_Han_Sans_CN] flex flex-col justify-center items-center'>
                        <Image src='/forensic/over.svg' width={105} height={105} />

                        <p className='text-[30px] text-[#222222] font-[500] leading-[45px] my-4'>订阅成功!</p>
                        <p className='text-[16px] text-[#666666] font-[400] leading-[24px]'>请返回客户端进行登录。</p>
                    </div>
                </article>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </Fragment>
    )
}

export default Over