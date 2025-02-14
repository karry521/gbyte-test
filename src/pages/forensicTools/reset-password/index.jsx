import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import { forensicsResetPwd } from '@/api'

const ResetPassword = () => {

    const { query } = useRouter() // 获取url参数

    const [pwd, setPwd] = useState('') // 密码
    const [confirmPwd, setConfirmPwd] = useState('') // 确认密码
    const [requireArr, setRequireArr] = useState({ // 输入框填写情况，true:应提示填写,false:无需提示
        pwd: false,
        confirmPwd: false
    })

    const [showTips, setshowTips] = useState('') // 格式不正确提示
    const [tipsStyle, setTipsStyle] = useState('') // 提示内容的样式
    const [showPwd1, setshowPwd1] = useState(false) // 显示密码
    const [showPwd2, setshowPwd2] = useState(false) // 显示确认密码
    const [clickSubmit, setClickSubmit] = useState(false) // 是否点击过提交按钮

    // 检验各参数
    const verifyFormat = ({ nowPwd = pwd, nowConfirmPwd = confirmPwd } = {}) => {
        let newRequireArr = {// 重置格式提示
            pwd: false,
            confirmPwd: false
        }

        let flag = true // 有未通过项时返回false
        let tips = '' // 提示信息

        // 深层校验密码格式
        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/ // 8位数&包含大小写

        setClickSubmit(true) // 设为点击过提交按钮

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

        setshowTips(tips)
        setRequireArr(newRequireArr)

        return flag
    }

    // 提交注册
    const resetPassword = async () => {

        // 校验不通过
        if (!verifyFormat()) return

        try {
            // 校验通过调用重置密码接口
            const { data } = await forensicsResetPwd({
                token: query.token || 'null',
                password: pwd
            })

            if (data.code !== 200) throw new Error(data.msg)

            setTipsStyle('text-[#222222]')
            setshowTips('重置成功，即将自动跳转至官网首页')

            // 重置密码成功跳转首页
            setTimeout(() => {
                location.replace('/forensicTools')
            }, 3000)
        } catch (e) {
            console.error('调用重置密码接口出错：' + e.message)
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
                    <div className='w-full max-w-[648px] min-h-[521px] lg:h-[848px] [font-family:Source_Han_Sans_CN] flex flex-col justify-center items-center mx-auto Mlg:px-4'>
                        <div className='w-full flex Mlg:flex-col justify-between items-center'>
                            <h1 className='text-[36px] text-[#222222] font-[600] Mlg:mb-6'>重置密码</h1>

                            <div className='Mlg:w-full'>

                                {
                                    showTips.trim() !== ''
                                        ?
                                        <p className={`w-full text-right Mlg:text-center text-[12px] ${tipsStyle ? tipsStyle : 'text-red-500'} mb-4`}>{showTips}</p>
                                        :
                                        <div className='w-full h-[18px] mb-4'></div>
                                }

                                <label className='w-[368px] Mlg:w-full flex items-center mb-[21px] relative'>
                                    <span className='w-[80px] text-right inline-block text-[#6C6C6C] font-bold text-nowrap Mlg:hidden'>新密码</span>
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
                                </label>
                                <label className='w-[368px] Mlg:w-full flex items-center relative'>
                                    <span className='w-[80px] text-right inline-block text-[#6C6C6C] font-bold text-nowrap Mlg:hidden'>确认新密码</span>
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
                                </label>
                            </div>
                        </div>

                        <div className='w-full flex justify-end Mlg:justify-center items-center mt-8'>
                            <button className='px-16 h-[45px] bg-[#4095E5] text-[18px] text-white font-bold rounded-[8px] disabled:text-gray-500' onClick={resetPassword}>重置密码</button>
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

export default ResetPassword