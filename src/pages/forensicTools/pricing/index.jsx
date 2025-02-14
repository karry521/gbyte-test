import { Fragment, useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import Link from 'next/link'
import { forensicsProducts } from '@/api'
import { verifyToken } from '@/utils'

const Pricing = ({ product }) => {

    const { query } = useRouter()

    const [nowPage, setNowPage] = useState(0) // 当前选中的页面
    const [tabLeftWidth, setTabLeftWidth] = useState(100) // tab切换div总宽度
    const [tabWidth1, setTabWidth1] = useState(99) // 第一个tab文本的宽度
    const [tabWidth2, setTabWidth2] = useState(99) // 第二个tab文本的宽度
    const tabWidthRef = useRef([]) // tab标签ref

    // 获取当前Tab页的背景宽度
    useEffect(() => {
        if (tabWidthRef.current.length > 0) {
            const width1 = tabWidthRef.current[1].offsetWidth
            const width2 = tabWidthRef.current[2].offsetWidth
            setTabLeftWidth(width1 + 1)
            setTabWidth1(width1)
            setTabWidth2(width2)
        }
    }, [])

    const [descs, setDescs] = useState([
        '行业最强技术',
        '下单后电子邮箱实时交付',
        '技术人员随时售后支持'
    ]) // 顶端描述

    const [businessData, setBusinessData] = useState([]) // 企业版产品信息

    const [individualsData, setIndividualsData] = useState([]) // 个人版产品信息

    const [showData, setShowData] = useState([]) // 显示的产品信息
    const [userType, setUserType] = useState('business') // 注册类型

    // 初始化数据
    useEffect(() => {
        if (product) {
            const userType = JSON.parse(localStorage.getItem('userInfo'))?.userType || 'business'
            const newBusinessData = businessData
            const newIndividualsData = individualsData

            Array.from(product.business).forEach(item => {
                newBusinessData.push({
                    id: item.id,
                    title: item.name,
                    price: (Number(item.price) / 100).toLocaleString(),
                    list: item.json.list
                })
            })

            Array.from(product.individuals).forEach(item => {
                newIndividualsData.push({
                    id: item.id,
                    title: item.name,
                    price: (Number(item.price) / 100).toLocaleString(),
                    list: item.json.list
                })
            })

            setBusinessData(newBusinessData)
            setIndividualsData(newIndividualsData)

            if (userType === 'business') {
                setNowPage(0)
                setUserType('business')
                setShowData(newBusinessData)
            }
            else {
                setNowPage(1)
                setUserType('individuals')
                setShowData(newIndividualsData)
            }
        }
    }, [product])

    // 提交购买
    const submitPay = async item => {

        // 获取用户token
        const jwtToken = (query.jwtToken && query.jwtToken !== 'null' && query.jwtToken !== 'undefined')
            ? query.jwtToken
            : localStorage.getItem('jwtToken')

        // token不存在
        if (!jwtToken) {
            location.replace('/forensicTools/register')
            return
        }

        try {
            const res = await verifyToken(jwtToken, 1)

            // token未验证通过
            if (!res.data.isValid) {
                location.replace('/forensicTools/register')
                return
            }

            // 验证通过调用支付页面
            location.href = `/forensicTools/payment/${item.id}`

        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <Fragment>
            <header className='Hmd:sticky top-0'>
                <Header />
            </header>
            <main>
                <article>
                    <div className='w-full max-w-[1600px] smjs:h-[1008px] mx-auto [font-family:Source_Han_Sans_CN] flex flex-col items-center Mff:px-[194px] lg:Mffs:px-[60px] Mlg:px-4'>

                        {/* 顶端描述 */}
                        <ul className='flex smj:flex-col smj:gap-y-4 gap-x-[90px] text-[18px] text-[2B2B2B] font-[400] leading-[25px] mt-[70px] smj:mt-[120px]'>
                            {
                                descs.map((item, index) => (
                                    <li key={index} className='flex items-center gap-x-3'>
                                        <Image src='/forensic/tick.svg' alt='tick' width={18} height={18} />
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>

                        {/* 设备图标&勋章 */}
                        <div className={`w-full flex justify-end smj:justify-between items-start smj:items-center mt-[40px] mb-[43px] ${userType === 'business' ? 'smjs:pr-[194px]' : 'smjs:pr-[254px]'}`}>
                            <Image src='/forensic/win-blue.svg' alt='win-blue' width={74} height={74} className='mt-[3px]' />
                            <Image src='/forensic/apple-black.svg' alt='apple-black' width={70} height={82} className='smjs:ml-[100px] smjs:mr-[224px]' />
                            {userType === 'business' ? <Image src='/forensic/medal.svg' alt='medal' width={60} height={60} /> : <div className='w-[60px] h-[60px] smjs:hidden'></div>}
                        </div>

                        {/* tab切换 */}
                        <div ref={e => tabWidthRef.current[0] = e} className='w-[200px] h-[40px] grid grid-cols-2 items-center bg-white rounded-[6px] 
                        text-[14px] [border:1px_#3783FD_solid] text-[#3783FD] font-[500] leading-[21px] mb-[50px] select-none relative'>
                            <h2 ref={e => tabWidthRef.current[1] = e} className={`text-center ${nowPage === 0 ? 'font-[500] text-white' : 'font-[400]'} pt-[8px] pb-[9px] cursor-pointer text-nowrap relative z-10`} onClick={() => {
                                setNowPage(0)
                                setUserType('business')
                                setShowData(businessData)
                            }}>Business</h2>
                            <h2 ref={e => tabWidthRef.current[2] = e} className={`text-center ${nowPage === 1 ? 'font-[500] text-white' : 'font-[400]'} pt-[8px] pb-[9px] cursor-pointer text-nowrap relative z-10`} onClick={() => {
                                setNowPage(1)
                                setUserType('individuals')
                                setShowData(individualsData)
                            }}>Individuals</h2>

                            <div
                                className={`h-[40px] p-[8px_12px_9px_12px] bg-[#3783FD] shadow-[0px_1px_3px_0px_#00000033] ${nowPage === 0 ? 'rounded-[6px_0px_0px_6px]' : 'rounded-[0px_6px_6px_0px]'} absolute z-0 transition-all duration-150 ease-in-out`}
                                style={{ width: `${nowPage === 0 ? tabWidth1 : tabWidth2}px`, left: `${nowPage === 0 ? -1 : tabLeftWidth}px` }}
                            ></div>
                        </div>

                        {/* 产品信息展示 */}
                        <ul className='w-full flex smj:flex-col justify-center items-center smj:gap-y-4 gap-x-[36px] select-none'>
                            {
                                showData.map((item, i) => {
                                    return (
                                        item.title !== '取证版' ?
                                            <li key={i} className='w-full max-w-[260px] smjs:min-w-[260px] h-[400px] flex flex-col items-center [border:1px_solid_#E3E3E3] [box-shadow:0px_4px_15px_0px_#0000001A] rounded-[12px] relative overflow-hidden'>
                                                <p className='w-[120px] h-max pt-[21px] pb-2 [border-bottom:1px_solid_#E3E3E3] text-[24px] text-center text-[#3783FD] font-[500] leading-[36px]'>{item.title}</p>
                                                <p className='text-[36px] text-[#3783FD] font-[500] leading-[54px] mb-[10px]'>
                                                    {item.price}<span className='text-[16px] text-[#222222] font-[500] leading-[24px]'>元/年</span>
                                                </p>

                                                <ul>
                                                    {
                                                        item.list.map((item2, index) => (
                                                            <li key={index} className='flex items-center mt-2'>
                                                                <div className='min-w-[5px] min-h-[5px] bg-[#3783FD] rounded-[50%] mr-[10px]'></div>
                                                                <p className='w-[148px] text-[16px] text-[#636363] font-[500] leading-[24px]'>{item2}</p>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>

                                                {userType !== 'business' && <div className='w-full h-[6px] bg-[#3783FD] absolute top-0 left-0'></div>}

                                                <button
                                                    className='w-[180px] h-[40px] flex justify-center items-center bg-[#3783FD] text-[16px] text-[#FFFFFF] font-[500] leading-[24px] rounded-[6px] mt-[51px]'
                                                    onClick={() => submitPay(item)}>
                                                    立即购买
                                                </button>
                                            </li>
                                            :
                                            <li key={i} className='w-full max-w-[260px] smjs:min-w-[260px] h-[400px] flex flex-col items-center [border:2px_solid_#FF7211] [box-shadow:0px_4px_15px_0px_#0000001A] rounded-[12px] relative overflow-hidden'>
                                                <p className='w-[120px] h-max pt-[21px] pb-2 [border-bottom:1px_solid_#E3E3E3] text-[24px] text-center text-[#FF7211] font-[500] leading-[36px]'>{item.title}</p>
                                                <p className='text-[36px] text-[#FF7211] font-[500] leading-[54px] mb-[10px]'>
                                                    {item.price}<span className='text-[16px] text-[#222222] font-[500] leading-[24px]'>元/年</span>
                                                </p>

                                                <ul>
                                                    {
                                                        item.list.map((item2, index) => (
                                                            <li key={index} className='flex items-center mt-2'>
                                                                <div className='min-w-[5px] min-h-[5px] bg-[#FF7211] rounded-[50%] mr-[10px]'></div>
                                                                <p className='w-[148px] text-[16px] text-[#636363] font-[500] leading-[24px]'>{item2}</p>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>

                                                <button
                                                    className='w-[180px] h-[40px] flex justify-center items-center bg-[#FF7211] text-[16px] text-[#FFFFFF] font-[500] leading-[24px] rounded-[6px] mt-[51px]'
                                                    onClick={() => submitPay(item)}>
                                                    立即购买
                                                </button>

                                                {userType === 'business' && <Image src='/forensic/medal-small.svg' alt='medal-small' width={60} height={60} className='absolute -top-[2px] right-[10px]' />}

                                                {userType !== 'business' && <div className='w-full h-[6px] bg-[#FF7211] absolute top-0 left-0'></div>}
                                            </li>
                                    )
                                })
                            }
                        </ul>

                        <Link href='/forensicTools/support-center' className='w-full flex justify-end smj:justify-center items-center mt-[90px] mb-[120px] cursor-pointer select-none'>
                            <Image src='/forensic/support.svg' alt='support' width={48} height={48} />
                            <p className='text-[16px] text-[#666666] font-[500] leading-[24px] ml-3'>更多企业定制技术服务，请联系我们！</p>
                        </Link>
                    </div>
                </article>
            </main>

            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}

export default Pricing

export async function getStaticProps() {

    const { data } = await forensicsProducts({
        params: {
            renew: 'N'
        }
    })

    // 拆分企业版跟个人版的产品信息
    const response = {
        business: [],
        individuals: []
    }
    data.data.map(item => {
        if (item.type === 'business') response.business.push(item)
        else response.individuals.push(item)
    })

    return {
        props: {
            product: response
        }
    }
}