import React, { Fragment, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('https://safe-diamond-9eb6073e3a.strapiapp.com', {
    transports: ['websocket'] // 可选：强制使用 WebSocket 协议
})

const Test = () => {

    const [message, setMessage] = useState('') // 存储输入框内容
    const [bindInfo, setBindInfo] = useState(null) // 用户绑定信息

    // 发送消息到服务器
    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('sendMessage', { name: 'karry', room: 'room1', text: message })
            setMessage('')
        }
    }

    // 页面加载时发送事件&接收回复
    useEffect(() => {

        // 发送事件
        socket.emit('user-account', { email: 'test01@gbyte.com' })

        // **监听消息**
        socket.on('user-subscribe-update', (result) => {
            setBindInfo(result.data)
        })

        // 清理工作：组件卸载时断开连接
        return () => {
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        console.log('bindInfo:::', bindInfo)
    }, [bindInfo])

    return (
        <Fragment>
            {/* <div className='w-full flex'>

                <nav className='w-[14rem] h-[calc(var(--vh)*100)] bg-blue-700'></nav>

                <main style={{ width: '100%', padding: '20px' }}>
                    <section>
                        <div style={{ width: '100%', height: '648px', padding: '24px', borderRadius: '8px', border: '1px solid #f0f0f0', boxShadow: 'rgba(76, 78, 100, 0.22) 0px 2px 10px 0px' }}>
                            
                        </div>
                    </section>
                </main>
            </div> */}

            <div className='w-full flex'>

                <nav className='w-[14rem] h-[calc(var(--vh)*100)] bg-blue-700'></nav>

                <main style={{ width: '100%', padding: '20px' }}>
                    <section>

                    </section>
                </main>
            </div>
        </Fragment>
    )
}

export default Test