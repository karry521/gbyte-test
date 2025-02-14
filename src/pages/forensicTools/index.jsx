import { Fragment } from "react"
import Image from "next/image"
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import Link from 'next/link'
import { getFileName } from '@/utils'
import { forensicsOneAppInfo } from '@/api'

const ForensicTools = () => {

    const screen1 = {
        title: '乐数取证',
        description: 'iOS设备全部数据轻松获取！',
        list: [
            '获取iCloud中所有数据备份：包括电话、短信、图片、视频、备忘录、浏览记录、微信、社交媒体等。',
            'iCloud数据全景展示：简洁完善的客户端dashboard，清晰展示获取的数据内容，先查看再下载。',
            '支持获取所有iOS版本及设备，包括最新版iOS18、iPhone 16',
            '强大技术团队，可以为企业提供定制服务'
        ]
    }

    const screen2 = {
        title: '包罗万象，一页尽览',
        list: [
            '下载简洁，一键获取：不管是历史数据，还是手机中现存数据，通过最新的iCloud云解密技术全部一键获得',
            '操作友好，体验丝滑：用户友好界面，可以先分类查看，再按需下载',
            '支持不同类型文件：图片、数据、音频、聊天记录等，不限类型，全部可以打包下载'
        ],
        icons: [
            { url: '/forensic/apps/Reminders.jpg', name: 'Reminders', w: 45, h: 45 },
            { url: '/forensic/apps/Line.jpg', name: 'Line', w: 45, h: 45 },
            { url: '/forensic/apps/Contacts.jpg', name: 'Contacts', w: 45, h: 45 },
            { url: '/forensic/apps/Photos.jpg', name: 'Photos', w: 45, h: 45 },
            { url: '/forensic/apps/Calls.jpg', name: 'Calls', w: 45, h: 45 },
            { url: '/forensic/apps/App Store.jpg', name: 'App Store', w: 45, h: 45 },
            { url: '/forensic/apps/Clander.jpg', name: 'Clander', w: 45, h: 45 },
            { url: '/forensic/apps/WIFI.jpg', name: 'WIFI', w: 45, h: 45 },
            { url: '/forensic/apps/InVision.jpg', name: 'InVision', w: 45, h: 45 },
            { url: '/forensic/apps/Instagram.jpg', name: 'Instagram', w: 45, h: 45 },
            { url: '/forensic/apps/Google Email.jpg', name: 'Google Email', w: 45, h: 33.89 },
            { url: '/forensic/apps/YouTube.jpg', name: 'YouTube', w: 45, h: 45 },
            { url: '/forensic/apps/Tiktok.jpg', name: 'Tiktok', w: 45, h: 45 },
            { url: '/forensic/apps/Facebook.jpg', name: 'Facebook', w: 45, h: 45 },
            { url: '/forensic/apps/iPhone.jpg', name: 'iPhone', w: 45, h: 45 },
            { url: '/forensic/apps/Snapchat.jpg', name: 'Snapchat', w: 45, h: 45 },
            { url: '/forensic/apps/Chrome.jpg', name: 'Chrome', w: 45, h: 45 },
            { url: '/forensic/apps/WhatsApp.jpg', name: 'WhatsApp', w: 45, h: 45 },
            { url: '/forensic/apps/Notes.jpg', name: 'Notes', w: 45, h: 45 },
            { url: '/forensic/apps/Kik.jpg', name: 'Kik', w: 45, h: 45 },
            { url: '/forensic/apps/Safari.jpg', name: 'Safari', w: 45, h: 45 },
            { url: '/forensic/apps/Messages.jpg', name: 'Messages', w: 45, h: 45 },
            { url: '/forensic/apps/iCloud.jpg', name: 'iCloud', w: 45, h: 45 },
            { url: '/forensic/apps/GPS.jpg', name: 'GPS', w: 45, h: 45 },
            { url: '/forensic/apps/WeChat.jpg', name: 'WeChat', w: 45, h: 45 },
            { url: '/forensic/apps/Keep.jpg', name: 'Keep', w: 45, h: 45 },
            { url: '/forensic/apps/Photos2.jpg', name: 'Photos2', w: 40, h: 40 },
            { url: '/forensic/apps/Weibo.jpg', name: 'Weibo', w: 49.31, h: 40 }
        ]
    }

    const screen3 = {
        title: '操作简单，只需3步',
        list: [
            { url: '/forensic/screen3-1.jpg', text: '登录要取证手机的iCloud账号' },
            { url: '/forensic/screen3-2.jpg', text: '完成二步验证' },
            { url: '/forensic/screen3-3.jpg', text: '下载数据' }
        ]
    }

    const screen4 = {
        title: '为什么选择我们',
        description: '乐数科技成立于2021年，是一家面向全球的高科技互联网公司，在操作系统安全性研究、数据取证等领域有雄厚基础，致力于移动互联网安全技术研究和产品开发，产品已经获得100多个国家的用户。核心团队来自谷歌、百度、万兴等上市互联网公司，在数据恢复和安全防护领域有10年+的技术积累。',
        smailTitle: '软件优势',
        list: [
            { icon: '/forensic/screen4-1.svg', text: '支持全类型数据获取' },
            { icon: '/forensic/screen4-2.svg', text: '简单操作，只需三步' },
            { icon: '/forensic/screen4-3.svg', text: '操作友好，科技体验' },
            { icon: '/forensic/screen4-4.svg', text: '一对一客服服务' },
            { icon: '/forensic/screen4-5.svg', text: '100%安全保障' },
            { icon: '/forensic/screen4-6.svg', text: '免费更新' }
        ]
    }

    // 获取应用下载信息
    const handleAppInfo = async type => {
        let name = ''

        if (type === 0) name = 'ios'
        else name = 'windows'

        const result = await forensicsOneAppInfo({
            params: {
                name
            }
        })

        const info = result.data.data

        if (!info) return

        // 下载
        const a = document.createElement('a')
        a.href = info.url
        a.download = true
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <Fragment>
            <header className='Hmd:sticky top-0'>
                <Header />
            </header>

            <main className='w-full max-w-[1440px] mx-auto pt-[100px] pb-[128px] smj:px-[16px] smjs:px-[21px]'>
                {/* 首屏 */}
                <section>
                    <div className='w-full max-w-max mx-auto flex Bxl:justify-center items-center gap-[68px] flex-wrap'>
                        {/* 左侧 */}
                        <div className='w-full max-w-[600px]'>
                            <div className='mb-[84px]'>
                                <h1 className='text-[48px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[72px] Bxl:text-center mb-[15px]'>{screen1.title}</h1>
                                <p className='text-[24px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[36px] Bxl:text-center'>{screen1.description}</p>
                            </div>

                            <ul>
                                {
                                    screen1.list.map((item, index) => (
                                        <li key={index} className='flex items-start mb-4'>
                                            <Image src='/forensic/tick.svg' alt='tick' width={20} height={20} />
                                            <p className='text-[18px] text-[#666666] [font-family:Source_Han_Sans_CN] font-[400] leading-[27px] ml-[12px]'>{item}</p>
                                        </li>
                                    ))
                                }
                            </ul>

                            {/* <div className='w-full flex Mlg:justify-center flex-wrap gap-x-[45px] gap-y-[21px] items-center mt-[100px] Bxl:mt-[45px]'> */}
                            <div className='w-full flex Mlg:justify-center flex-wrap gap-y-[21px] items-center mt-[100px] Bxl:mt-[45px]'>
                                {/* <Link
                                    href='https://tfs.alipayobjects.com/L1/71/100/and/alipay_wap_main_64.apk'
                                    download
                                    className='w-[250px] h-[64px] flex justify-center items-center bg-[#3783FD] text-[18px] text-white [font-family:Source_Han_Sans_CN] font-[500] leading-[27px] rounded-[11px]'
                                >
                                    <Image src='/forensic/mac.svg' alt='mac' width={32} height={32} className='mr-[20px]' />
                                    MAC版本下载
                                </Link>
                                <Link
                                    href='https://tfs.alipayobjects.com/L1/71/100/and/alipay_wap_main_64.apk'
                                    download
                                    className='w-[250px] h-[64px] flex justify-center items-center bg-[#3783FD] text-[18px] text-white [font-family:Source_Han_Sans_CN] font-[500] leading-[27px] rounded-[11px]'
                                >
                                    <Image src='/forensic/win.svg' alt='win' width={32} height={32} className='mr-[20px]' />
                                    WIN版本下载
                                </Link>
                                */}

                                <button className='w-[250px] h-[64px] flex justify-center items-center bg-[#3783FD] text-[18px] text-white [font-family:Source_Han_Sans_CN] font-[500] leading-[27px] rounded-[11px]' onClick={() => handleAppInfo(1)}>
                                    <Image src='/forensic/win.svg' alt='win' width={32} height={32} className='mr-[20px]' />
                                    WIN版本下载
                                </button>
                            </div>
                        </div>

                        {/* 右侧 */}
                        <Image src='/forensic/screen1.jpg' alt='screen1' width={540} height={453.34} className='w-[540px] h-auto' />
                    </div>
                </section>

                {/* 第二屏 */}
                <section>
                    <div className='w-full max-w-[1202px] mx-auto flex flex-col items-center pt-[180px]'>

                        {/* 上 */}
                        <div className='w-full flex Bxl:justify-center flex-wrap items-start gap-x-[86px]'>
                            <div className='flex flex-col'>
                                <h2 className='w-full text-[45px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[68px] Bxl:text-center mb-[115px]'>{screen2.title}</h2>

                                <ul className='w-full max-w-[582px] mb-[142px]'>
                                    {
                                        screen2.list.map((item, index) => (
                                            <li key={index} className='flex items-start mb-4 last:mb-0'>
                                                <span className='min-w-[6px] min-h-[6px] bg-[#3783FD] block mt-[10px] rounded-[50%]'></span>
                                                <p className='text-[18px] text-[#666666] [font-family:Source_Han_Sans_CN] font-[400] leading-[27px] ml-[12px]'>{item}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <Image src='/forensic/screen1.jpg' alt='screen1' width={500} height={453.34} className='w-[500px] h-auto max-h-[419.76px]' />
                        </div>

                        <ul className='w-full grid [grid-template-columns:repeat(auto-fit,45px)] justify-center gap-x-[44px] gap-y-[32px] Bxl:mt-[52px]'>
                            {
                                screen2.icons.map((item, index) => (
                                    <li key={index} className={`w-[${item.w}px] h-[${item.h}px] flex items-center`}>
                                        <Image src={item.url} alt={item.name} width={item.w} height={item.h} className={`w-[${item.w}px] h-[${item.h}px]`} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>

                {/* 第三屏 */}
                <section>
                    <div className='w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-[180px]'>
                        <h2 className='w-full Bxl:text-center text-[45px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[68px]'>{screen3.title}</h2>

                        <ul className='w-full grid grid-cols-3 Bxl:grid-cols-1 gap-x-[30px] Bxl:gap-y-[21px] mt-[15px] mb-[13px]'>
                            {
                                screen3.list.map((item, index) => (
                                    <li key={index} className='flex flex-col items-center'>
                                        <p className='w-full text-center text-[26px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[39px]'>{index + 1}.{item.text}</p>

                                        <Image src={item.url} alt={getFileName(item.url)} width={380} height={470} className='w-[380px] h-[470px] Bxl:w-auto Bxl:h-auto' />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>

                {/* 第四屏 */}
                <section>
                    <div className='w-full max-w-[1060px] mx-auto flex flex-col justify-center items-center pt-[155px]'>
                        <h2 className='w-full text-[45px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[68px] text-center mb-[24px]'>{screen4.title}</h2>
                        <p className='text-[18px] text-[#666666] [font-family:Source_Han_Sans_CN] font-[400] leading-[27px]'>{screen4.description}</p>
                        <h3 className='text-[36px] text-[#222222] [font-family:Source_Han_Sans_CN] font-[500] leading-[54px] mt-[60px] mb-[42px]'>{screen4.smailTitle}</h3>

                        <ul className='w-full grid grid-cols-3 Bxl:grid-cols-1 justify-center items-center gap-[45px]'>
                            {
                                screen4.list.map((item, index) => (
                                    <li key={index}>
                                        <div className='w-[320px] Bxl:w-full h-[200px] flex flex-col justify-center items-center [box-shadow:0px_4px_20px_0px_#0000001A] rounded-[12px]'>
                                            <Image src={item.icon} alt={getFileName(item.icon)} width={64} height={64} className='w-[64px] h-[64px]' />
                                            <p className=' text-[18px] text-[#333333] [font-family:Source_Han_Sans_CN] font-[500] leading-[22px] mt-[20px]'>{item.text}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}

export default ForensicTools