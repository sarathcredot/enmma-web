'use client'
import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"

import Link from "next/link"
import Sectionfoot from "@/components/layout/DevsectionFoot"
import { useState } from "react";

export default function corporate() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1 title={'Corporate Governance'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} bgColor={"#110B79"} fontColor={"#FFFFFF"} fontColor2={'#FFFFFF'} />
                <div >
                    <div className=" " style={{ backgroundColor: '#110B79' }} >

                        <div className=" container project__area-three" >
                            <div className="row ">
                                <div className="col-xl-7 space-betweeni col-lg-8">
                                    <div className="  mb-50 dev_gover ">
                                        <span className="">Lorem ipsum dolor sit a</span>
                                        <h2 className=" mt-4">lorem ipsum dolor sit amet <br />congue ornare elit</h2>
                                    </div>
                                    <div className="dev_customsize mt-4">Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem</div>
                                </div>
                            </div>
                            <div className=" row">
                                <div className="col-md-6">
                                    <div1 className="services__tab-wrap">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                                <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true"><i className="flaticon-travel-insurance" />Governance Framework</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Construct a Balanced Board Com position</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Recruit Highly Qualified Candidates for Members of a Board of Directors and the Executive Management</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(4)}>
                                                <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Safeguard the Integrity of Financial Reporting</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(5)}>
                                                <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Apply Sound Systems of Risk Management and Internal Audit</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(6)}>
                                                <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Promote Code of Conduct & Ethical Standards</button>
                                            </li>
                                        </ul>

                                    </div1>

                                </div>
                                <div className="col-md-6">
                                    <div2 className="tab-content" id="myTabContent">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Health Insurance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="travel-tab-pane" role="tabpanel" aria-labelledby="travel-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Health Insurance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="vehicle-tab-pane" role="tabpanel" aria-labelledby="vehicle-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Health Insurance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="cargo-tab-pane" role="tabpanel" aria-labelledby="cargo-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Health Insurance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="fire-tab-pane" role="tabpanel" aria-labelledby="fire-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Health Insurance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Health Insurance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div2>
                                </div>
                            </div>
                        </div>
                            <div className=" container dev-bottom "><Sectionfoot /> </div>


                    </div>
                    <Bannerfooter />
                </div>
            </Layout>
        </>
    )
}