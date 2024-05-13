import Layout from "@/components/layout/Layout"

import Counter1 from "@/components/sections/Counter1"
import Project3 from "@/components/sections/Project3"

import Slider2 from "@/components/sections/Slider2"
import About3 from "@/components/sections/About3"
import Services3 from "@/components/sections/Services3"
import Choose3 from "@/components/sections/Choose3"
import Marketingexpert1 from "@/components/sections/Marketingexpert1"
import BlogPost3 from "@/components/sections/BlogPost3"
import Request3 from "@/components/sections/Request3"
import Devindex1 from "@/components/devcreate/devindexherobottom"



export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} >
              <Slider2/>
              <Devindex1/>
                <Counter1/>
                <About3/>
                <Services3/>
                <Choose3 />
                <Project3/>
                <Request3 />
                <Marketingexpert1 />
                <BlogPost3 />
            </Layout>
        </>
    )
}