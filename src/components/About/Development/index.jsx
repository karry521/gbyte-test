import Head from "next/head"
export default function Development() {

    const title = '发展历程'
    const content = '凭借持续不断的创新驱动力，精益求精，成就拥有全球布局的科技领航者'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`这是${title}页面`} />
            </Head>
            <div className="w-full h-[460px] Hsm:h-[361px] bg-no-repeat bg-cover bg-center bg-[url('/development/development_banner1.webp')]">
                <div className="w-[980px] Hsm:w-[90%] h-full text-white flex flex-col justify-center items-start Hsm:items-center mx-auto relative -left-[14.5rem] Hsm:left-0 Hmd:Hxl:left-[3rem] Hxls:xxls:-left-[5.6rem]">
                    <h2 className="Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs font-bold mb-4">{title}</h2>
                    <p className="w-[434px] Hsm:w-full Hsm:text-center Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps leading-[30px]">{content}</p>
                </div>
            </div>
        </>
    )
}