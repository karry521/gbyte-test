import "@/styles/globals.css"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const { query } = useRouter()

  // 页面加载时保存jwtToken至缓存中
  useEffect(() => {
    // if (!JSON.parse(localStorage.getItem('userInfo'))
    //   && query.jwtToken && query.jwtToken !== 'null'
    //   && query.jwtToken !== 'undefined') localStorage.setItem('jwtToken', query.jwtToken)

    if (query.jwtToken && query.jwtToken !== 'null' && query.jwtToken !== 'undefined') localStorage.setItem('jwtToken', query.jwtToken)
  }, [query])

  // 获取vh高度
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setViewportHeight()

    window.addEventListener('resize', setViewportHeight)

    return () => {
      window.removeEventListener('resize', setViewportHeight)
    }
  }, [])

  return <Component {...pageProps} />;
}
