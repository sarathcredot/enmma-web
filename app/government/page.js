import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Banner2 from "@/components/sections/Banner2"
import Bannerfooter from "@/components/sections/Bannerfooter"


export default function About4() {  
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} >
            <Banner2  title={'Government Bots'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} bgColor={"#110B79"} fontColor={"#FFFFFF"}fontColor2={'#FFFFFF'}/>
           <div   style={{ backgroundColor: '#110B79' }}>
                <div className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover ">
                            <span className="">Lorem ipsum dolor sit a</span>
                            <h2 className=" mt-4">lorem ipsum dolor sit amet <br />congue ornare elit</h2>
                        </div>
                            <div className="dev_customsize mt-4">Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem</div>
                    </div>
                </div>

                <div className="project__item-three shine-animate-item">
                                            <div className="project__content-two">
                                                {/* <span>Souq Al Wataniya</span> */}
                                                <h2 className="title"><Link href="#/project-details">Souq Al Wataniya</Link></h2>
                                                <p className="">The distinctive location of the Souq Al Wataniya Market located in the heart of the commercial district of the Kuwait city gave it high importance. This is in addition to shops and administrative offices constituting the market. The view is wonderful. Car parks there serve the market tenants and the region's visitors in general. The building is located near several markets, ancient commercial complexes, and hotels that many tourists visit throughout the year.</p>
                                                <Link href="#/project-details" className="btn ">See Details</Link>
                                            </div>
                                            <div className="project__thumb-three shine-animate">
                                                <img src="/assets/img/project/h2_project_img041.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="project__item-three mt-5 shine-animate-item">
                                        <div className=" shine-animate">
                                                <img src="/assets/img/project/h3_project_img01.jpg" alt="" />
                                             </div>
                                             <div className="project__content-two">
                                                <span>Maximise Property Value</span>
                                                <h2 className="title"><Link href="#/project-details">Owner Services</Link></h2>
                                                <p >Expert solutions for property management and optimisation strategies.</p>
                                                <Link href="#/project-details" className="btn btn-two ">See Details</Link>
                                             </div>
                                           
                                           </div>
                                         <div/>
                    
                                       </div>   
                                     </div>
                                      <Bannerfooter/>
                                      </Layout>

         </>
    )
}