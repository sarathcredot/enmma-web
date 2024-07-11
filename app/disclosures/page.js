import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Disclosures from "@/components/devsection/Disclosures"

export default function Home3() {
    return (
        <>

            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'Disclosures'} paragraph={`Explore comprehensive financial disclosures on Al Enmaa Real Estate Co.'s
operations. Our transparency ensures stakeholders have access to crucial 
information, reinforcing trust and accountability in our business practices.`} />
            <div className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">Financial Transparency</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>Insights into Our Financial <br/>Operations</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>Access detailed financial disclosures covering key information about Al 
                            Enmaa Real Estate Co.'s operations and financial health.</div>
                    </div>

            <Disclosures  showItem={6} style={1} showPagination/>
            </div></div>
            <Bannerfooter/>
            </Layout>
            
        </>
    )
}