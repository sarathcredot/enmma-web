import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import  Bannerfooter from "@/components/sections/Bannerfooter"
import Annualreport from "@/components/devsection/Annualreport"


export const metadata = {
    title: 'Annual report',
}

export default function Home2() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'Annual report'} paragraph={`Explore Al Enmaa Real Estate Co.'s yearly performance reports, offering 
detailed insights into our financial performance, key achievements, and 
strategic initiatives. Stay updated on our annual progress and 
commitment to excellence in the real estate sector.`} />
             <Annualreport/>
            <Bannerfooter/>
            </Layout>
        </>
    )
}