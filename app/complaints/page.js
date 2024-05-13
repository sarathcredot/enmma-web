import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Link from "next/link"

export default function Services3() {
    return (
        <>

            <Layout headerStyle={6} footerStyle={3} >
            <Banner1  title={'Complaints & suggestions'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} />
            <Bannerfooter/>
            </Layout>
        </>
    )
}