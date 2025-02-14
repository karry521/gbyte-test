import { forensicsVerifyToken } from '@/api'

// 获取文件名
export const getFileName = url => {
    const regex = /\/([^\/]+?)(?=\.\w+)(?:\.\w+)?$/
    const match = url.match(regex)
    return match ? match[1] : 'photo'
}

/**
 * 
 * @param {String} token 
 * @param {0 | 1} type - 验证类型 (0:验证有效期, 1:不验证有效期 )
 * @returns 校验token是否有效
 */
export const verifyToken = async (token, type) => {
    return await forensicsVerifyToken({
        token,
        type
    })
}