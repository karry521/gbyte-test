import React, { Fragment, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const SOCKET_SERVER_URL = 'http://10.31.3.179:1337'
const socket = io(SOCKET_SERVER_URL, {
    transports: ['websocket'] // 可选：强制使用 WebSocket 协议
})

const Test = () => {

    const [message, setMessage] = useState('') // 存储输入框内容
    const [messages, setMessages] = useState([]) // 总对话
    const [flag, setFlag] = useState(true) // 显示加入聊天室

    // 发送消息到服务器
    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('chat sendMessage', { name: 'roy', room: 'room1', text: message })
            setMessage('')
        }
    }

    // 获取对话实例&接收回复
    useEffect(() => {
        // **监听消息**
        socket.on('message', (msg) => {
            setMessages(prev => [...prev, msg])
            setFlag(false)
        })

        // 清理工作：组件卸载时断开连接
        return () => {
            socket.disconnect()
        }
    }, [])

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
                        <div style={{ width: '100%', height: 'calc(var(--vh)*96)', padding: '24px', borderRadius: '8px', border: '1px solid #f0f0f0', boxShadow: 'rgba(76, 78, 100, 0.22) 0px 2px 10px 0px' }}>
                            <div className='w-full h-[90%] bg-gray-100 [border:1px_black_solid]'>

                                {/* {
                                    showData.length > 0 &&
                                    <ul className='p-[20px] flex flex-col gap-y-4'>
                                        {
                                            showData.map((item, index) => (
                                                <li key={index} className={`w-full flex ${item.type === 'client' ? 'justify-end' : 'justify-start'}`}>
                                                    <p className={`w-max p-2 ${item.type === 'client' ? 'bg-green-500' : 'bg-white'} rounded-[8px]`}>{item.message}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                } */}

                                <div className='h-full p-[20px] flex flex-col gap-y-4 overflow-auto'>
                                    {messages.map((msg, index) => (
                                        <p key={index}>
                                            <strong>{msg.user}:</strong> {msg.text}
                                        </p>
                                    ))}
                                </div>

                            </div>

                            <div className='mt-6 flex justify-start gap-x-4'>
                                <input type='text' className='w-[521px] [border:1px_skyblue_solid] rounded-[8px] pl-2 outline-none' onKeyDown={e => e.key === 'Enter' && !flag && sendMessage()}
                                    placeholder='在这里输入你想发送的消息' value={message} onChange={(e) => setMessage(e.target.value)} />
                                <button className={`w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px] disabled:text-gray-500 ${flag ? 'cursor-no-drop' : ''}`}
                                    disabled={flag} onClick={sendMessage}>发送</button>

                                <button className={`w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px] disabled:text-gray-500 ${!flag ? 'hidden' : ''}`} onClick={() => {
                                    // 加入房间
                                    socket.emit('chat room', { name: 'roy', room: 'room1' })
                                }}>加入聊天室</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Fragment>
    )
}

export default Test