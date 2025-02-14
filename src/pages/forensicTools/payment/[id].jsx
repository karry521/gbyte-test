import { Fragment, useEffect, useRef, useState } from 'react'
import Image from "next/image"
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { forensicsProducts, forensicsOneProduct, forensicsOneUser, forensicsCreateAlipay } from '@/api'
import { verifyToken } from '@/utils'

const Payment = ({ product }) => {

    const [payType, setPayType] = useState(1) // 当前选中的支付方式
    const [tabLeftWidth, setTabLeftWidth] = useState(100) // tab切换div总宽度
    const [tabWidth1, setTabWidth1] = useState(99) // 第一个tab文本的宽度
    const [tabWidth2, setTabWidth2] = useState(99) // 第二个tab文本的宽度

    const { query } = useRouter() // 获取url参数
    const iframeRef = useRef(null) // 嵌入iframe的ref
    const [auth, setAuth] = useState(true) // 身份验证是否通过
    const [loading, setLoading] = useState(true) // 页面加载中
    const [user, setUser] = useState(null) // 用户信息
    const [productInfo, setProductInfo] = useState(product.data) // 产品信息
    const [bgColor, setBgColor] = useState(product.data.name === '取证版' ? 'bg-[#FF721133]' : 'bg-[#3783FD33]') // 背景颜色
    const [qrCode, setQrcode] = useState(null) // 支付二维码
    const [qrLoading, setQrLoading] = useState(true) // 二维码加载中

    // 通过token获取用户信息
    const fetchVerifyToken = async jwtToken => {

        let userId = null

        try {
            const res = await verifyToken(jwtToken, 1)

            if (res.data.isValid) { // token验证通过
                userId = res.data.payload.id

                const userInfo = JSON.parse(localStorage.getItem('userInfo'))

                if (!userInfo) {
                    // 获取用户信息
                    const user = await forensicsOneUser({
                        headers: { Authorization: jwtToken },
                        params: {
                            id: userId
                        }
                    })

                    setUser(user.data.data)

                    localStorage.setItem('userInfo', JSON.stringify(user.data.data))
                } else setUser(userInfo)

                setAuth(true)

                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

                const { data: qrCode } = await forensicsCreateAlipay({
                    headers: { Authorization: jwtToken },
                    params: {
                        p_id: product.data.id,
                        isMobile
                    }
                })

                if (Number(qrCode.code) === 500) throw new Error('error:支付二维码生成错误')

                setQrcode(qrCode)
                localStorage.setItem('qrCodeData', qrCode)
            } else setAuth(false)
        } catch (e) {
            console.error(e.message)
            setAuth(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // 获取用户token
        const jwtToken = (query.jwtToken && query.jwtToken !== 'null' && query.jwtToken !== 'undefined')
            ? query.jwtToken
            : localStorage.getItem('jwtToken')

        fetchVerifyToken(jwtToken)
    }, [query, product])

    return (
        <Fragment>
            {
                loading ? <p className='w-full h-[500px] flex justify-center items-center'>加载中。。。。。。</p>
                    :
                    auth ?
                        <Fragment>
                            <header className='Hmd:sticky top-0'>
                                <Header />
                            </header>

                            <main>
                                <article>
                                    <div className='w-full max-w-[1200px] smjs:h-[828px] mx-auto [font-family:Source_Han_Sans_CN] lg:Mffs:px-[60px] Mlg:px-4 transition-all duration-150 ease-linear'>
                                        <div className='w-full Hmd:mt-[45px] mt-[95px]'>
                                            <div className={`text-[14px] text-[#222222] font-[400] leading-[21px] ${bgColor} p-[5px_0px_5px_10px]`}>订单确认</div>
                                            <div className='flex Mlg:flex-col justify-between items-start'>
                                                <div className='Mlg:w-full flex flex-col Mlg:items-center justify-center'>
                                                    <p className='w-full text-[16px] text-left text-[#222222] font-[500] leading-[24px] m-[16px_0px_18px_10px]'>乐数Phone Breaker：{productInfo.name}</p>
                                                    <ul className='w-max grid grid-cols-2 Mlg:grid-cols-1 gap-x-[104px] gap-y-[16px] text-[16px] text-[#2B2B2B] font-[500] leading-[22.4px] lg:mb-[24px]'>
                                                        {
                                                            productInfo.json.list.map((item, index) => (
                                                                <li key={index} className='flex items-center gap-x-3'>
                                                                    <Image src='/forensic/tick.svg' alt='tick' width={18} height={18} />
                                                                    {item}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className='Mlg:w-full'>
                                                    <p className='text-[16px] text-right text-[#222222] font-[500] leading-[24px] m-[16px_32px_18px_0px] Mlg:mt-[18px] Mlg:mr-[10px]'>订阅邮箱：{user.email}</p>
                                                </div>
                                            </div>
                                            <div className={`text-[18px] ${productInfo.name === '取证版' ? 'text-[#FF7211]' : 'text-[#3783FD]'} text-right font-[400] leading-[27px] ${bgColor} p-[2px_32px_3px_0px]`}>
                                                总计{(Number(productInfo.price) / 100).toLocaleString()}元
                                            </div>
                                        </div>

                                        <div className='w-[200px] h-[232px] mx-auto flex flex-col items-center text-[24px] text-[#222222] font-[500] leading-[36px] mt-[60px]'>
                                            <p>付款信息</p>

                                            {/* tab切换 */}
                                            <div className='w-[200px] h-[36px] grid grid-cols-2 items-center bg-white rounded-[6px] 
                        text-[14px] [border:1px_#3783FD_solid] text-[#3783FD] font-[400] leading-[21px] mt-[16px] mb-[24px] select-none relative text-nowrap'>
                                                <h2 className={`w-full h-[36px] flex justify-center items-center text-center ${payType === 0 ? 'text-[16px] leading-[24px] text-white' : ''} cursor-pointer text-nowrap relative z-10`} onClick={() => {
                                                    setPayType(0)
                                                }}>微信支付</h2>
                                                <h2 className={`w-full h-[36px] flex justify-center items-center text-center ${payType === 1 ? 'text-[16px] leading-[24px] text-white' : ''} cursor-pointer text-nowrap relative z-10`} onClick={() => {
                                                    setPayType(1)
                                                }}>支付宝</h2>

                                                <div
                                                    className={`h-[36px] p-[8px_12px_9px_12px] bg-[#3783FD] shadow-[0px_1px_3px_0px_#00000033] ${payType === 0 ? 'rounded-[6px_0px_0px_6px]' : 'rounded-[0px_6px_6px_0px]'} absolute z-0 transition-all duration-150 ease-in-out`}
                                                    style={{ width: `${payType === 0 ? tabWidth1 : tabWidth2}px`, left: `${payType === 0 ? -1 : tabLeftWidth}px` }}
                                                ></div>
                                            </div>


                                            <Image src='/forensic/wx-qrCode.png' alt='wx-qrCode' width={120} height={120} className={`${payType !== 0 ? 'hidden' : ''}`} />
                                            {/* {
                                                qrLoading &&
                                                <div className={`w-[120px] h-[120px] flex flex-col justify-center items-center bg-gray-200 ${payType === 0 ? 'hidden' : ''}`}>
                                                    <div className='w-[28px] h-[28px] grid grid-cols-2 gap-[6px] mb-2 animate-spin'>
                                                        <div className='bg-[#B6D3FC] rounded-[50%]'></div>
                                                        <div className='bg-[#8CB8FA] rounded-[50%]'></div>
                                                        <div className='bg-[#629EF8] rounded-[50%]'></div>
                                                        <div className='bg-[#1B7AFF] rounded-[50%]'></div>
                                                    </div>
                                                    <p className='text-[16px]'>Loading...</p>
                                                </div>
                                            } */}

                                            {/* <iframe ref={iframeRef} className={`w-[137px] h-[137px] border-none ml-[17px] ${qrLoading || payType === 0 ? 'hidden' : ''}`} onLoad={() => setQrLoading(false)} /> */}
                                            <Link
                                                href='/forensicTools/payment/qrCode'
                                                target='_block'
                                                className={`h-[34px] flex justify-center items-center [border:1px_solid_#3783FD] pl-[45px] pr-[49px] text-[14px] text-[#3783FD] font-[500] leading-[21px] rounded-[4px] mt-[38px] ${payType === 0 ? 'hidden' : ''}`}
                                            >点击跳转付款
                                            </Link>
                                        </div>

                                        <Link href='/forensicTools/support-center' className='w-full flex justify-end smj:justify-center items-center mt-[74px] mb-[103px] cursor-pointer select-none' onClick={() => console.log(1111)}>
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
                        :
                        <div className='w-full h-[calc(var(--vh)*100)] flex flex-col justify-center items-center px-4'>
                            <p className='text-center'>请先注册或者在应用登录后通过升级VIP进入此页面进行购买</p>

                            <Link href='/forensicTools/register' className='h-[45px] flex justify-center items-center bg-[#4095E5] text-[18px] text-white font-bold rounded-[8px] disabled:text-gray-500 px-16 mt-8'>立即注册</Link>
                        </div>
            }
        </Fragment>
    )
}

export default Payment

export async function getStaticPaths() {

    // 获取所有取证工具产品信息
    const { data } = await forensicsProducts()

    const paths = Array.from(data.data).map(item => ({ params: { id: item.id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    let result = null
    try {
        // 调用创建支付订单接口
        result = await forensicsOneProduct({
            params: {
                id: params.id
            }
        })
    } catch (e) {
        console.error(e.message)
    }

    return {
        props: {
            product: result.data || { data: { name: '', price: 0, json: { list: [] } } }
        }
    }
}