import Head from "next/head";
import Header from "@/components/Home/Header";
import Banner from "@/components/Home/Body/Banner";
import Section1 from "@/components/Home/Body/Section1";
import Section2 from "@/components/Home/Body/Section2";
import Section3 from "@/components/Home/Body/Section3";
// import Section4 from "@/components/Home/Body/Section4";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>乐数科技</title>
        <meta name="description" content="这是乐数科技首页" />
        <meta name="baidu-site-verification" content="codeva-EmGmY7lCXv" />
      </Head>

      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      <Footer />
    </>
  );
}
