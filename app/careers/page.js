import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Careerform from "@/components/devsection/Careerform"

export default function Services2() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'careers'} paragraph={`Discover career opportunities at Al Enmaa Real Estate Co. Submit your 
details and CV to join our dynamic team dedicated to excellence in the 
real estate industry.`} bgColor={"#110B79"} fontColor={"#FFFFFF"}fontColor2={'#FFFFFF'}/>
            
            <Careerform/>
            <Bannerfooter/>
            </Layout>
        </>
    )
}