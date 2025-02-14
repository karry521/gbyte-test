import { useEffect, useState } from 'react'

const QrCode = () => {

    const [formData, setFormData] = useState('')
    const [id, setId] = useState(0)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        const qrCode = localStorage.getItem('qrCodeData')
        if (qrCode) {
            const div = document.createElement('div')
            div.innerHTML = qrCode

            const form = div.getElementsByTagName('form')[0]
            setFormData(form.outerHTML)
            setId(form.getAttribute('id'))
            setFlag(true)
        }
    }, [])

    useEffect(() => {
        if (flag) {
            // 在组件加载后，自动提交表单
            const form = document.getElementById(id)
            if (form) {
                form.submit() // 提交表单
            }
        }
    }, [flag])

    return (
        <div id='qrCode' dangerouslySetInnerHTML={{ __html: formData }}>
        </div>
    )
}

export default QrCode