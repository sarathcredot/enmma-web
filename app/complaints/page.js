import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Link from "next/link"
import Complaintsec from "@/components/devsection/Complaintsec"

export default function Services3() {
    return (
        <>

            <Layout headerStyle={6} footerStyle={3} >
            <Banner1  title={'Complaints & suggestions'} paragraph={`At Al Enmaa Real Estate Co., your feedback matters. Use our platform to submit complaints or suggestions, enabling us to continually improve and provide exceptional service to our valued customers.`} />
            
            
            
            <div className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">Feedback Center</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>Share Your Thoughts</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>Submit complaints or suggestions to help us enhance our service at Al Enmaa Real Estate Co.
                            </div>
                    </div>
                    <Complaintsec/>

            </div></div>
            <Bannerfooter/>
            </Layout>
        </>
    )
}