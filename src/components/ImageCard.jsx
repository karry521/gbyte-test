import React, { useState } from 'react';


const ImageGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        { title: '敏捷迭代', detail: '互联网公司倡导敏捷开发理念,快速迭代产品,根据用户反馈持续优化,缩短产品上市周期。', src: '/about/about_banner3_3.webp', alt: 'about_banner3_3' },
        { title: '扁平协作', detail: '互联网公司普遍采用扁平化管理,鼓励团队协作,提高工作效率。员工之间平等交流,快速响应市场变化。', src: '/about/about_banner3_4.webp', alt: 'about_banner3_4' },
        { title: '数据驱动', detail: '互联网公司高度重视数据分析,通过大数据、用户行为数据等指导产品优化和业务决策,实现精准运营。', src: '/about/about_banner3_5.webp', alt: 'about_banner3_5' },
        { title: '国际视野', detail: '面向全球化发展,互联网公司拥有国际化视野,关注全球市场动态,与世界接轨,实现跨地区、跨国界的业务布局。', src: '/about/about_banner3_6.webp', alt: 'about_banner3_6' }

    ];

    return (
        <div>
            <ul className=" w-full flex Hsm:flex-wrap gap-8 Hsm:gap-2 justify-between ">
                {images.map((image, index) => (
                    <li
                        key={index}
                        className={`flex  imgContainer mt-[32px] relative w-[232px] h-[367px] rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'w-[408px] h-[367px]' : ''
                            }`}
                        onMouseOver={() => setActiveIndex(index)}>
                        <div className='absolute text-white top-[15%] justify-end flex-col z-10 flex Hsm:p-0 p-[8px_0_0_39px]'>
                            <h2 className=" top-0 left-5 text-white text-[24px] leading-[36px] Hsm:text-[20px] font-bold">{image.title}</h2>
                            <p
                                className={`max-w-[80%] text-[16px] Hsm:text-[14px] leading-[24px] pt-[19px] text-white transform ${activeIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-[232px] opacity-0'
                                    }  transition-all duration-500 ease-in-out`}>{image.detail}
                            </p>
                        </div>
                        <img src={image.src} alt={image.alt} className="h-[367px] w-[408px]" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageGallery;
