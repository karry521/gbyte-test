import { Fragment, useEffect, useRef, useState } from 'react'
import Image from "next/image"
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import Link from 'next/link'
import { forensicsRegister } from '@/api'

const Register = () => {

    const [nowPage, setNowPage] = useState(0) // 当前选中的页面
    const [tabLeftWidth, setTabLeftWidth] = useState(0) // tab切换div总宽度
    const [tabWidth1, setTabWidth1] = useState(99) // 第一个tab文本的宽度
    const [tabWidth2, setTabWidth2] = useState(0) // 第二个tab文本的宽度
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

    const [userType, setUserType] = useState('business') // 注册类型
    const [companyName, setCompanyName] = useState('') // 企业名称
    const [phone, setPhone] = useState('') // 联系方式
    const [email, setEmail] = useState('') // 注册邮箱
    const [pwd, setPwd] = useState('') // 密码
    const [confirmPwd, setConfirmPwd] = useState('') // 确认密码
    const [checkBox, setCheckBox] = useState(false) // 复选框状态
    const [requireArr, setRequireArr] = useState({ // 输入框填写情况，true:应提示填写,false:无需提示
        companyName: false,
        phone: false,
        email: false,
        pwd: false,
        confirmPwd: false,
        checkBox: false
    })
    const [showTips, setshowTips] = useState('') // 格式不正确提示
    const [showPwd1, setshowPwd1] = useState(false) // 显示密码
    const [showPwd2, setshowPwd2] = useState(false) // 显示确认密码
    const [clickSubmit, setClickSubmit] = useState(false) // 是否点击过提交按钮

    // 检验各参数
    const verifyFormat = ({ newPage = nowPage, nowCompanyName = companyName, nowPhone = phone, nowEmail = email, nowPwd = pwd, nowConfirmPwd = confirmPwd, nowCheckBox = checkBox } = {}) => {
        let newRequireArr = {// 重置格式提示
            companyName: false,
            phone: false,
            email: false,
            pwd: false,
            confirmPwd: false,
            checkBox: false
        }

        let flag = true // 有未通过项时返回false
        let tips = '' // 提示信息

        // 深层校验手机格式&邮箱格式&密码格式
        const phoneRegex1 = /^(?!170|171|172|176|177|166|199)\d{11}$/ // 不包含虚拟号码
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // 邮箱格式
        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/ // 8位数&包含大小写
        // const phoneRegex2 = /^1\d{10}$/ // 包含虚拟号码

        setClickSubmit(true) // 设为点击过提交按钮

        if (newPage === 0) { // 企业用户
            // 校验企业名称
            if (nowCompanyName.trim() === '') {
                newRequireArr.companyName = true
                if (tips === '') tips = '企业名称不能为空'

                flag = false
            }

            // 校验手机号
            if (!phoneRegex1.test(nowPhone)) {
                newRequireArr.phone = true
                if (tips === '') tips = '手机号为11位且不为虚拟号'

                flag = false
            }
        }

        // 检验邮箱为空
        if (nowEmail.trim() === '') {
            newRequireArr.email = true
            if (tips === '') tips = '注册邮箱不能为空'

            flag = false
        } else if (!emailRegex.test(nowEmail)) { // 校验邮箱格式
            newRequireArr.email = true
            if (tips === '') tips = '邮箱格式不正确'

            flag = false
        }

        // 校验密码为空
        if (nowPwd.trim() === '') {
            newRequireArr.pwd = true
            if (tips === '') tips = '密码不能为空'

            flag = false
        } else if (!pwdRegex.test(nowPwd)) { // 校验密码格式
            newRequireArr.pwd = true
            if (tips === '') tips = '密码至少8位且包含大小写'

            flag = false
        }

        // 校验确认密码为空
        if (nowConfirmPwd.trim() === '') {
            newRequireArr.confirmPwd = true
            if (tips === '') tips = '密码确认不能为空'

            flag = false
        } else if (!pwdRegex.test(nowConfirmPwd)) { // 校验确认密码格式
            newRequireArr.confirmPwd = true
            if (tips === '') tips = '密码至少8位且包含大小写'

            flag = false
        }

        // 校验两次密码是否一致
        if (nowPwd.trim() !== nowConfirmPwd.trim()) {
            newRequireArr.confirmPwd = true
            if (tips === '') tips = '两次输入的密码不一致'

            flag = false
        }

        // 校验是否勾选复选框
        if (!nowCheckBox) {
            newRequireArr.checkBox = true
            if (tips === '') tips = '请勾选同意协议'

            flag = false
        }

        setshowTips(tips)
        setRequireArr(newRequireArr)
        return flag
    }

    // 提交注册
    const submitRegister = async () => {

        // 校验不通过
        if (!verifyFormat()) return

        try {
            // 插入信息参数
            const createParams = {
                email,
                password: pwd,
                userType
            }

            // 为企业注册时
            if (userType === 'business') {
                createParams.companyName = companyName,
                    createParams.phone = phone
            }

            // 校验通过调用注册接口
            const { data } = await forensicsRegister(createParams)

            // 注册失败时提示信息
            let tips = ''
            if (data.code === 10001) tips = data.data.error[0]
            if (data.code !== 200) {
                if (tips === '') tips = data.msg

                setshowTips(tips)
                return
            }

            // 存储注册返回的token&用户信息
            localStorage.setItem('jwtToken', data.data.jwt)
            localStorage.setItem('userInfo', JSON.stringify(data.data.user))

            // 注册成功跳转订阅页面
            location.replace('/forensicTools/pricing')
        } catch (e) {
            console.error('调用注册接口出错：' + e.message)
            setshowTips(e.message)
        }
    }

    return (
        <Fragment>
            <header className='Hmd:sticky top-0'>
                <Header />
            </header>
            <main>
                <article>
                    <div className='w-full flex flex-col justify-center items-center [font-family:Source_Han_Sans_CN] pt-[128px] pb-[204px] Mlg:px-4 Mlg:pb-20'>
                        <div className='relative'>
                            {/* tab切换 */}
                            <div ref={e => tabWidthRef.current[0] = e} className='w-[200px] h-[40px] grid grid-cols-2 items-center bg-white rounded-[6px] 
                        text-[14px] [border:1px_#3783FD_solid] text-[#3783FD] font-[500] leading-[21px] mb-[72px] Mlg:mb-[45px] select-none relative'>
                                <h2 ref={e => tabWidthRef.current[1] = e} className={`text-center ${nowPage === 0 ? 'font-[500] text-white' : 'font-[400]'} py-[9.5px] cursor-pointer text-nowrap relative z-10`} onClick={() => {
                                    setNowPage(0)
                                    setshowTips('')
                                    setRequireArr({// 重置格式提示
                                        companyName: false,
                                        phone: false,
                                        email: false,
                                        pwd: false,
                                        confirmPwd: false
                                    })
                                    setUserType('business')
                                }}>企业版</h2>
                                <h2 ref={e => tabWidthRef.current[2] = e} className={`text-center ${nowPage === 1 ? 'font-[500] text-white' : 'font-[400]'} py-[9.5px] cursor-pointer text-nowrap relative z-10`} onClick={() => {
                                    setNowPage(1)
                                    setshowTips('')
                                    setRequireArr({// 重置格式提示
                                        companyName: false,
                                        phone: false,
                                        email: false,
                                        pwd: false,
                                        confirmPwd: false
                                    })
                                    setUserType('individuals')
                                }}>个人版</h2>

                                <div
                                    className={`h-[40px] p-[8px_12px_9px_12px] bg-[#3783FD] shadow-[0px_1px_3px_0px_#00000033] ${nowPage === 0 ? 'rounded-[6px_0px_0px_6px]' : 'rounded-[0px_6px_6px_0px]'} absolute z-0 transition-all duration-150 ease-in-out`}
                                    style={{ width: `${nowPage === 0 ? tabWidth1 : tabWidth2}px`, left: `${nowPage === 0 ? -1 : tabLeftWidth}px` }}
                                ></div>
                            </div>

                            {showTips.trim() !== '' && <p className='w-full text-center text-[12px] text-red-500 absolute top-1/2 translate-y-[50%]'>{showTips}</p>}
                        </div>

                        <div className='Mlg:w-full'>
                            <div className='w-full lg:min-w-[445px] min-h-[330px]'>
                                {
                                    nowPage === 0 ?
                                        // 企业版
                                        <ul>
                                            <li className='w-[445px] Mlg:w-full flex items-center mb-[21px]'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>企业名称</span>
                                                <input
                                                    type='text'
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.companyName ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请填写企业名称"
                                                    value={companyName}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowCompanyName: value, type: 0, name: 'companyName' })
                                                            setCompanyName(value)
                                                        }
                                                    }}
                                                />
                                            </li>
                                            <li className='w-[342px] Mlg:w-full flex items-center mb-[21px]'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>联系方式</span>
                                                <input
                                                    type='text'
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.phone ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请填写手机号，便于提供专属企业服务"
                                                    value={phone}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if ((value && !isNaN(value) && value.length <= 11) || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowPhone: value, type: 0, name: 'phone' })
                                                            setPhone(value)
                                                        }
                                                    }}
                                                />
                                            </li>
                                            <li className='w-[342px] Mlg:w-full flex items-center mb-[21px]'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>注册邮箱</span>
                                                <input
                                                    type='text'
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.email ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请填写注册邮箱"
                                                    value={email}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowEmail: value, type: 0, name: 'email' })
                                                            setEmail(value)
                                                        }
                                                    }}
                                                />
                                            </li>
                                            <li className='w-[342px] Mlg:w-full flex items-center mb-[21px] relative'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>密码</span>
                                                <input
                                                    type={showPwd1 ? 'text' : 'password'}
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.pwd ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请填写至少8位包含大小写的密码"
                                                    value={pwd}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowPwd: value, type: 0, name: 'pwd' })
                                                            setPwd(value)
                                                        }
                                                    }}
                                                />

                                                <Image src={showPwd1 ? '/forensic/show-pwd.svg' : '/forensic/hidden-pwd.svg'} alt='pwd-svg1' width={21} height={21}
                                                    className='w-[21px] h-auto absolute top-1/2 -translate-y-1/2 right-[12px] cursor-pointer select-none' draggable={false} onClick={() => setshowPwd1(!showPwd1)} />
                                            </li>
                                            <li className='w-[342px] Mlg:w-full flex items-center relative'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>密码确认</span>
                                                <input
                                                    type={showPwd2 ? 'text' : 'password'}
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.confirmPwd ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请再次填写密码"
                                                    value={confirmPwd}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowConfirmPwd: value, type: 0, name: 'confirmPwd' })
                                                            setConfirmPwd(value)
                                                        }
                                                    }}
                                                />

                                                <Image src={showPwd2 ? '/forensic/show-pwd.svg' : '/forensic/hidden-pwd.svg'} alt='pwd-svg2' width={21} height={21}
                                                    className='w-[21px] h-auto absolute top-1/2 -translate-y-1/2 right-[12px] cursor-pointer select-none' draggable={false} onClick={() => setshowPwd2(!showPwd2)} />
                                            </li>
                                        </ul>
                                        :
                                        // 个人版
                                        <ul>
                                            <li className='w-[342px] Mlg:w-full flex items-center mb-[21px]'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>注册邮箱</span>
                                                <input
                                                    type='text'
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.email ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请填写注册邮箱"
                                                    value={email}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowEmail: value, type: 0, name: 'email' })
                                                            setEmail(value)
                                                        }
                                                    }}
                                                />
                                            </li>
                                            <li className='w-[342px] Mlg:w-full flex items-center mb-[21px] relative'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>密码</span>
                                                <input
                                                    type={showPwd1 ? 'text' : 'password'}
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.pwd ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请填写至少8位包含大小写的密码"
                                                    value={pwd}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowPwd: value, type: 0, name: 'pwd' })
                                                            setPwd(value)
                                                        }
                                                    }}
                                                />

                                                <Image src={showPwd1 ? '/forensic/show-pwd.svg' : '/forensic/hidden-pwd.svg'} alt='pwd-svg1' width={21} height={21}
                                                    className='w-[21px] h-auto absolute top-1/2 -translate-y-1/2 right-[12px] cursor-pointer select-none' draggable={false} onClick={() => setshowPwd1(!showPwd1)} />
                                            </li>
                                            <li className='w-[342px] Mlg:w-full flex items-center relative'>
                                                <span className='w-[65px] text-center inline-block text-[#6C6C6C] font-bold Mlg:hidden'>密码确认</span>
                                                <input
                                                    type={showPwd2 ? 'text' : 'password'}
                                                    className={`flex-grow h-[38px] text-[13px] ${requireArr.confirmPwd ? '[border:1px_red_solid] placeholder:text-red-500' : '[border:1px_#D1D1D1_solid]'} rounded-[8px] lg:ml-8 pl-2 outline-none`}
                                                    placeholder="请再次填写密码"
                                                    value={confirmPwd}
                                                    onChange={e => {
                                                        const value = e.target.value.trim()

                                                        if (value || value === '') {
                                                            if (clickSubmit) verifyFormat({ nowConfirmPwd: value, type: 0, name: 'confirmPwd' })
                                                            setConfirmPwd(value)
                                                        }
                                                    }}
                                                />

                                                <Image src={showPwd2 ? '/forensic/show-pwd.svg' : '/forensic/hidden-pwd.svg'} alt='pwd-svg2' width={21} height={21}
                                                    className='w-[21px] h-auto absolute top-1/2 -translate-y-1/2 right-[12px] cursor-pointer select-none' draggable={false} onClick={() => setshowPwd2(!showPwd2)} />
                                            </li>
                                        </ul>
                                }

                                <div className='flex justify-start items-center mt-4'>
                                    <label className='flex items-center select-none'>
                                        <input type="checkbox" className='w-4 h-4' value={checkBox} onChange={e => {
                                            if (clickSubmit) verifyFormat({ nowCheckBox: !checkBox })
                                            setCheckBox(!checkBox)
                                        }} />
                                        <span className='text-[#7D7D7D] ml-2 font-bold'>阅读并接受</span>
                                    </label>
                                    <Link href='/' target='_blank' className='text-[#4D9CE7] font-bold'>用户协议</Link>
                                </div>
                            </div>

                            <div className='w-full flex justify-center items-center mt-8'>
                                <button className='px-16 h-[45px] bg-[#4095E5] text-[18px] text-white font-bold rounded-[8px] disabled:text-gray-500' onClick={submitRegister}>立即注册</button>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}

export default Register