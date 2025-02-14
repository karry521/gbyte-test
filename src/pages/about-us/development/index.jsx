import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"
import Development from "@/components/About/Development"
// import Section4 from "@/components/Home/Body/Section4"

export default function index() {
    return (
        <>
            <Header />
            <Development />
            {/* 发展历程轮播 */}
            {/* <Section4 /> */}
            <Footer />
        </>
    )
}