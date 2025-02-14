import axios from 'axios'

// 取证工具账号注册
export const forensicsRegister = async (data) => await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/register`, data)

// 取证工具获取单个用户信息
export const forensicsOneUser = async ({ headers, params }) => await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/one-user`, { headers, params })

// 取证工具重置密码
export const forensicsResetPwd = async (data) => await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/reset-password`, data)

// 获取所有取证工具产品信息
export const forensicsProducts = async (data) => await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/list-products`, data)

// 获取单个取证工具产品信息
export const forensicsOneProduct = async (data) => await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/one-product`, data)

// 取证工具token校验
export const forensicsVerifyToken = async (data) => await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/verify-token`, data)

// 取证工具创建支付订单
export const forensicsCreateAlipay = async ({ headers, params }) => await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/alipay/create`, params, { headers })

// 取证工具检查用户是否有未过期的订阅订单
export const forensicsSomeProducts = async ({ headers, params }) => await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/some-products`, { headers, params })

// 取证工具获取指定app信息（下载地址
export const forensicsOneAppInfo = async (data) => await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/one-app-info`, data)