import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Investorrelation from "@/components/devsection/Investorrelation"

export default function Investor() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'Investor relations contact'} paragraph={`Connect with our investor support center via our contact form. Our team ensures prompt and informative responses, addressing inquiries about financial performance and corporate governance.`} />
            <Investorrelation/>
            <Bannerfooter/>
            </Layout>
        </>
    )
}