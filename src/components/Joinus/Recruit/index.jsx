import { Select, Space } from "antd/lib"
import Image from "next/image"
import { useState } from "react"
import Head from "next/head"

// 标题
const title = "乐数科技,期待您的加入"
const content = "清晰的职级晋升通道,行业领先的薪酬福利体系,定期组织内部培训和外部进修，发展前景广阔"

// // 招聘流程
// const document = [
//   { title: '投递简历', img: '/recruit/Group411.webp' },
//   { title: '筛选简历', img: '/recruit/Group412.webp' },
//   { title: '笔试(部分需要)', img: '/recruit/Group413.png' },
//   { title: '面试', img: '/recruit/Group414.webp' },
//   { title: 'Offer发放', img: '/recruit/Group415.webp' },
// ]

//招聘信息
const ntList = [
  {
    id: 0,
    title: '研发类',
    name: '海外工程师',
    timeday: '2024-6-19',
    request:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ],
    duty:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ]
  },
  {
    id: 1,
    title: '营销类',
    name: '海外SEO推广',
    timeday: '2024-7-4',
    request:
      [
        { title: '1.负责海外市场调研分析，确定公司产品目标用户群及特征，制定内容市场营销方案；' },
        { title: '2.挖掘目标市场用户需求，结合搜索引擎关键词分析，制定网站内容运营计划；' },
        { title: '3.根据内容运营计划，进行内容策划、信息采集及撰写发布，提高产品曝光度，达成流量和销售目标；' },
        { title: '4.策划并推进网站运营活动方案，并进行效果分析和优化调整。' },
      ],
    duty:
      [
        { title: '1.全日制大专及以上学历，熟悉互联网市场环境;' },
        { title: '2.熟悉Google搜索引擎算法,有Saas类软件相关行业SEO从业经验者优先;' },
        { title: '3.具备良好的英文读写能力,英文6级以上,如有小语种能力者条件可适当放宽;' },
        { title: '4.具有良好的自驱力和学习意识，能持续完善自己的营销框架。' }
      ]
  },
  {
    id: 2,
    title: '产品类',
    name: '产品经理',
    timeday: '2024-7-4',
    request:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ],
    duty:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ]
  },
  {
    id: 3,
    title: '设计类',
    name: 'ui设计师',
    timeday: '2024-7-4',
    request:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ],
    duty:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ]
  },
  {
    id: 4,
    title: '职能类',
    name: 'HR专员',
    timeday: '2024-7-4',
    request:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ],
    duty:
      [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ]
  },
]




export default function Recruit() {
  // banner1标题
  const title = '招纳贤士'
  // 职位列表点击事件
  const [nt, setNt] = useState('营销类')
  const [ntListId, setNtListId] = useState('1')


  const onClick = (id, title) => {
    console.log(id, title)
    setNt(title)
    setNtListId(id)
  }

  const handleChange = (_, options) => {
    // console.log('xxxx', value, label)

    setNt(options.label)
    setNtListId(options.value)
  }


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`这是${title}页面`} />
      </Head>
      <div className="w-full h-[447px] Hsm:pt-20 Hsm:h-[560px] object-cover bg-no-repeat bg-cover bg-bottom bg-[url(/recruit/bg.webp)]">
        <div className=" Hsm:flex-col Hsm:justify-center Hsm:text-center Hsm:items-center Hsm:pt-32 Hsm:my-auto Hxls:xxls:flex-col Hxls:xxls:justify-center Hxls:xxls:text-center Hxls:xxls:items-center Hxls:xxls:my-auto Hxls:xxls:pt-32 [ flex flex-col justify-center items-center my-auto pt-32 ]">
          <h2 className="Hsm:w-full Hsm:text-Bhs Hmd:text-Mhs2 xxl:text-Mhs [w-[579px] h-[ 84px] text-[#FFFFFF] text-center text-[56px] font-bold leading-[84px ]]">{title}</h2>
          <p className="Hsm:w-full Hxl:w-[361px] Hsm:text-Bps Hmd:text-Mps2 xxl:text-Mps [ w-[484px] h-[60px] text-[#FFFFFF] text-center text-[18px] font-normal leading-[30px] pt-4 ]">{content}</p>
        </div>
      </div>


      <div className="Hsm:w-full Hsm:flex Hsm:justify-between Hsm:text-center Hsm:items-center Hsm:my-14 Hsm:mx-auto Hxl:w-[850px] Hxls:xxls:w-[900px] Hxls:xxls:h-[102px] flex justify-between items-center w-[1182px] h-[102px] text-center my-20 mx-auto">
        <div className="flex-1 flex flex-col justify-center items-center text-center mx-auto">
          <Image src='/recruit/Group411.webp' width={60} height={60} className="Hsm:w-auto Hsm:h-auto Hsm:text-center Hsm:items-start Hsm:mx-auto Hsm:mb-4 mb-4"></Image>
          <span className="Hsm:flex Hsm:items-start Hsm:justify-center Hsm:w-full Hsm:h-[50px] Hsm:text-[12px] Hsm:text-[#222222] Hsm:leading-[16px]text-[#222222] text-[16px] leading-[24px] font-normal">投递简历</span>
        </div>
        <div className="flex-1 flex  justify-center items-center rounded-[1px">
          <Image src='/recruit/Group42.svg' width={38.21} height={21.21} clssname="Hsm:w-[10px] Hsm:h-[10px]"></Image>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center mx-auto">
          <Image src='/recruit/Group412.webp' width={60} height={60} className="Hsm:w-auto Hsm:h-auto Hsm:text-center Hsm:items-start Hsm:mx-auto Hsm:mb-4 mb-4"></Image>
          <span className="Hsm:flex Hsm:items-start Hsm:justify-center Hsm:w-full Hsm:h-[50px] Hsm:text-[12px] Hsm:text-[#222222] Hsm:leading-[16px] text-[#222222] text-[16px] leading-[24px] font-normal">筛选简历</span>
        </div>
        <div className="flex-1 flex justify-center items-center rounded-[1px">
          <Image src='/recruit/Group42.svg' width={38.21} height={21.21} clssname="Hsm:w-[20px] Hsm:h-[20px]"></Image>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center mx-auto">
          <Image src='/recruit/Group403.webp' width={60} height={60} className="Hsm:w-auto Hsm:h-auto Hsm:text-center Hsm:items-start Hsm:mx-auto Hsm:mb-4 mb-4"></Image>
          <span className="Hsm:flex Hsm:items-start Hsm:justify-center Hsm:w-full Hsm:h-[50px] Hsm:text-[12px] Hsm:text-[#222222] Hsm:leading-[16px] text-[#222222] text-[16px] leading-[24px] font-normal">笔试（部分需要）</span>
        </div>
        <div className="flex-1 flex justify-center items-center rounded-[1px">
          <Image src='/recruit/Group42.svg' width={38.21} height={21.21} clssname="Hsm:w-[20px] Hsm:h-[20px]"></Image>
        </div>
        <div className="flex-1 flex flex-col  justify-center items-center text-center mx-auto">
          <Image src='/recruit/Group414.webp' width={60} height={60} className="Hsm:w-auto Hsm:h-auto Hsm:text-center Hsm:items-start Hsm:mx-auto Hsm:mb-4 mb-4"></Image>
          <span className="Hsm:flex Hsm:items-start Hsm:justify-center Hsm:w-full Hsm:h-[50px] Hsm:text-[12px] Hsm:text-[#222222] Hsm:leading-[16px] text-[#222222] text-[16px] text-center leading-[24px] font-normal">面试</span>
        </div>
        <div className="flex-1 flex  justify-center items-center rounded-[1px">
          <Image src='/recruit/Group42.svg' width={38.21} height={21.21} clssname="Hsm:w-[20px] Hsm:h-[20px]"></Image>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center mx-auto">
          <Image src='/recruit/Group415.webp' width={60} height={60} className="Hsm:w-auto Hsm:h-auto Hsm:text-center Hsm:items-start Hsm:mx-auto Hsm:mb-4 mb-4"></Image>
          <span className=" Hsm:flex Hsm:items-start Hsm:justify-center Hsm:w-full Hsm:h-[50px] Hsm:text-[12px] Hsm:text-[#222222] Hsm:leading-[16px] text-[#222222] text-[16px] leading-[24px] font-normal">Offer发放</span>
        </div>
      </div>


      {/* 
      <div className="Hsm:w-full Hsm:h-[150px] Hsm:flex Hsm:justify-between Hsm:text-center Hsm:items-center Hsm:my-20 Hsm:mx-auto Hxl:w-[650px] Hxl:flex Hxl:justify-between Hxl:text-center Hxl:my-20 Hxl:mx-auto Hxls:xxls:w-[900px] Hxls:xxls:h-[200px] Hxls:xxls:flex Hxls:xxls:justify-between Hxls:xxls:text-center Hxls:xxls:items-center Hxls:xxls:my-20 Hxls:xxls:mx-auto [ w-[1182px] h-[102px] flex justify-between text-center items-center my-20 mx-auto ]">
        {
          document.map((item, index) => {
            return (
              <div key={index} className=" Hsm:flex Hsm:items-center Hsm:mx-auto Hxls:xxls:filx Hxls:xxls:items-center Hxls:xxls:mx-auto [ flex text-center items-center mx-auto ]">
                <div className="flex-1 justify-end">
                  <div className="Hsm:h-[90px] Hsm:flex Hsm:items-end Hsm:justify-center">
                    <Image src={item.img} alt="{item.index}" width={60} height={60} className="Hsm:w-auto Hsm:h-auto Hsm:text-center Hsm:items-start Hsm:mx-auto Hsm:mb-2 Hxls:xxls:text-center Hxls:xxls:items-start Hxls:xxls:mb-2 Hxls:xxls:mx-auto [ text-center items-center mx-auto mb-2 ]"></Image>
                  </div>
                  <span className="Hsm:flex Hsm:items-start Hsm:justify-center Hsm:w-full Hsm:h-[50px] Hsm:text-[12px] Hsm:text-[#222222] Hsm:leading-[16px] [ text-[#222222] text-[16px] leading-[24px] font-normal ]">{item.title}</span>
                </div>
                {document.length - 1 !== index && (<div className="flex-1 justify-end flex items-center"><Image src='/recruit/Group42.svg' width={38.21} height={21.21} className="Hsm:w-[20px] Hsm:h-[20px] Hsm:ml-0 [ rounded-[1px] ]"></Image></div>)}
              </div>
            )
          })
        }
      </div> */}

      <div className="Hsm:my-14 Hsm:w-full Bxl:w-full Hxls:xxls:w-[1200px]  w-[1700px] flex flex-col  my-20 mx-auto">
        <h4 className="Hsm:pl-0 Hsm:text-base flex font-medium text-[#000000] text-[24px] leading-[31px] pl-52"><Image src={'/recruit/Vector.svg'} width={20.6} height={25.71} className="mr-3 Hsm:w-[16px] Hsm:h-[20px] Hsm:ml-4"></Image>热门职位</h4>

        <div className=" Hsm:hidden Hsm:ml-4 Hsm:w-[110px] Hsm:h-[20px] Hsm:text[12px] Hsm:mt-0 Hsm:font-light Hsm:text-[#222222] w-[220px] h-[41px] flex justify-center items-center text-[#222222] text-[16px] leading-[31px] font-normal border-[1px] bg-[#EBEEF5] rounded ml-52 mt-4">{nt}</div>

        <div className="w-[300px] h-[32px] Hsm:flex hidden  justify-center items-center bg-white border-1px mt-4">

          {/* <Space wrap> */}

          <Select
            defaultValue="营销类"
            style={{
              width: 120,
            }}
            // value={ntListId}
            onChange={handleChange}
            options={[
              {
                value: '0',
                label: '研发类',
              },
              {
                value: "1",
                label: '营销类',
              },
              {
                value: "2",
                label: '产品类',
              },
              {
                value: "3",
                label: '设计类',
              },
              {
                value: "4",
                label: '职能类',
              }
            ]}
          />
          {/* </Space> */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="mailto:service@gbyte.com.cn" className=" flex flex-row justify-center items-center text-center bg-[#0633FF] w-[120px] h-[32px] text-[#FFFFFF]  rounded-md font-normal leading-[20px] cursor-pointer">投递简历&nbsp;&nbsp;<Image src={'/recruit/Vector.webp'} width={15} height={12}></Image></a>
        </div>


        <div className="flex justify-between Hsm:flex-col ">
          <div className="Hsm:mt-0 Hsm:hidden w-[161px] h-[321] mt-40">
            <ul className=" Hsm:border-none flex flex-col justify-center items-center rounded-lg border-[1px] border-[#E0E1E3] bg-[#FFFFFF] ">
              {
                ntList.map((item, index) => {
                  return (
                    <li key={index} className={`cursor-default w-[126px] h-[32px] flex justify-center items-center pt-6 pb-6 text-[#545454] leading-[20px] font-normal [ hover:bg-[#EAF0FE] hover:text-[#0633FF] hover:rounded-md hover:font-medium ] `} onClick={() => onClick(item.id, item.title)}>
                      {item.title}
                    </li>
                  )
                })
              }
              <a href="mailto:service@gbyte.com.cn" className=" flex justify-center items-center bg-[#0633FF] w-[121px] h-[32px] text-[#FFFFFF]  rounded-md font-normal leading-[20px] mb-5 cursor-pointer">投递简历&nbsp;&nbsp;<Image src={'/recruit/Vector.webp'} width={15} height={12}></Image></a>
            </ul>
          </div>

          <div className="Hsm:border-none Hsm:mr-0 Hsm:rounded-none Hsm:w-full Hxl:w-full w-[1412px] h-full rounded-lg bg-[#FFFFFF] border-[1px] border-[#E0E1E3] mt-10 mr-20 ">
            <h2 className="Hsm:ml-0 Hsm:pl-2 w-[250px] h-[30px] text-[#222222] font-medium text-[32px] leading-[30px] ml-20 mt-12">{ntList[ntListId].name}</h2>
            <p className="Hsm:ml-0 Hsm:pl-2 w-[100px] h-[30px] text-[#000000] font-normal text-[16px] leading-[30px]  ml-20 mt-6">{ntList[ntListId].timeday}</p>
            <hr className="Hsm:ml-0 Hsm:pl-2 Hsm:w-[300px] w-[1273px] border-[1px] bg-[#E0E0E2]  ml-20 mt-6" />

            <h2 className="Hsm:ml-0 Hsm:pl-2 Hsm:w-full w-[121px] h-[30px] text-[#222222] font-medium text-[24px] leading-[30px] ml-20 mt-8">岗位职责：</h2>
            <ol className="Hsm:w-full Hsm:ml-0 Hsm:pl-2 ml-20 mt-6 Hsm:container">
              {
                ntList[ntListId].request.map((item, index) => {
                  return (
                    <li key={index} className="w-full h-full Hsm:break-all justify-center text-[#545454] font-normal text-[16px] leading-[24px]">{item.title}</li>
                  )
                })
              }
            </ol>
            <h2 className="Hsm:ml-0 Hsm:pl-2 Hsm:w-full w-[121px] h-[30px] text-[#222222] font-medium text-[24px] leading-[30px] ml-20 mt-8">任职要求：</h2>
            <ol className="Hsm:ml-0 Hsm:pl-2 w-full ml-20 mt-6 Hsm:container">
              {
                ntList[ntListId].duty.map((item, index) => {
                  return (
                    <li key={index} className="w-full h-full Hsm:break-all justify-center text-[#545454] font-normal text-[16px] leading-[24px]">{item.title}</li>
                  )
                })
              }
            </ol>
            <h2 className="Hsm:w-full Hsm:text-[16px] Hsm:ml-0 Hsm:pl-2 w-[466px] h-[30px] text-[#222222] font-bold text-[24px] leading-[30px] ml-20 mt-12 mb-10">欢迎投递:service@gbyte.com.cn</h2>
          </div>
        </div>
      </div >
    </>
  )
}

