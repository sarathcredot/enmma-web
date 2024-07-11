import Banner1 from "@/components/sections/Banner1"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Statement from "@/components/devsection/Statement"

export default function ServicesDetails() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} >
            <Banner1  title={'Financial statement'} paragraph={`Explore and download detailed financial reports of Al Enmaa Real Estate Co. Our reports provide comprehensive insights into our financial health, ensuring transparency and accountability to our stakeholders.`} />
            
            <div className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">Financial Reports</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>Insights into Our Financial <br/>Performance</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>Access comprehensive financial reports of Al Enmaa Real Estate Co. for detailed insights into our financial performance.</div>
                    </div>

            < Statement showItem={6} style={1} showPagination/>
            </div></div>
            <Bannerfooter/> 
            </Layout>
        </>
    )
}