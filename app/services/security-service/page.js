"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service4() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Security Services"}
                    paragraph={`We are pleased to offer security services across all the public and private sector. We always look forward to supporting all businesses by providing security guard services with highly trained security personnel.`}
                    bgColor={"#110B79"}
                    fontColor={"#FFFFFF"}
                    fontColor2={"#FFFFFF"}
                />
                <div>
                    <div className="mb-5 " style={{ backgroundColor: "#110B79" }}>
                        <div className=" container project__area-three">
                            <div className="row ">
                                <div className="col-xl-7 space-betweeni col-lg-8">
                                    <div className="  mb-50 dev_gover ">
                                        <span className="">Premier Security Services</span>
                                        <h2 className=" mt-4">
                                        Ensuring Safety for Public <br/>and Private Sectors
                                        </h2>
                                    </div>
                                    <div className="dev_customsize services__content-two mt-4">
                                        <Link href="/services" className="btn">
                                            See more services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" row">
                                <div className="col-md-6">
                                    <div className="services__tab-wrap">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <Link href="#dev-link-section" smooth><button
                                                    className={
                                                        activeIndex == 1 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="health-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#health-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="health-tab-pane"
                                                    aria-selected="true"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Comprehensive Security Solutions                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <Link href="#dev-link-section" smooth> <button
                                                    className={
                                                        activeIndex == 2 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="travel-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#travel-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="travel-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Highly Trained Security Personnel                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <Link href="#dev-link-section" smooth> <button
                                                    className={
                                                        activeIndex == 3 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="vehicle-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#vehicle-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="vehicle-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Supporting Business Security Needs                                                </button></Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6" id="dev-link-section">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className={
                                                activeIndex == 1
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="health-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="health-tab"
                                            tabIndex={0}
                                        >
                                            <div1 className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Tabpanel.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Comprehensive Security Solutions                                                        </Link>
                                                    </h2>
                                                    <p>
                                                    At Al Enmaa Real Estate Co., we are proud to offer top-tier security services to both the public and private sectors. Our comprehensive solutions are designed to meet the diverse security needs of various industries, ensuring a safe and secure environment for all. From corporate offices to public institutions, our security services are tailored to protect your assets and provide peace of mind.
                                                    </p>
                                                </div>
                                            </div1>
                                        </div>
                                        <div
                                            className={
                                                activeIndex == 2
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="travel-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="travel-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img
                                                        src="/assets/img/services/h3_services_img02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Highly Trained Security Personnel                                     </Link>
                                                    </h2>
                                                    <p>
                                                    Our commitment to excellence is reflected in the quality of our security personnel. We employ highly trained and experienced security guards who are adept at handling a wide range of security scenarios. Our rigorous training programs ensure that our team is equipped with the latest skills and knowledge to effectively safeguard your premises and respond to any security threats promptly and efficiently.
                                                    
                                                    </p>
                                                    
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                activeIndex == 3
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="vehicle-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="vehicle-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img
                                                        src="/assets/img/services/h3_services_img01.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Supporting Business Security Needs                                                        </Link>
                                                    </h2>
                                                    <p>
                                                    We understand that each business has unique security requirements, and we are dedicated to providing personalized support to meet those needs. Our security services are designed to support businesses of all sizes, offering flexible and scalable solutions. Whether you require round-the-clock surveillance or event-specific security, Al Enmaa Real Estate Co. is your trusted partner in maintaining a secure and protected environment for your business operation

                                                    </p>
                                                    
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                            </div>
                        </div>
                            <div className=" container dev-bottom "><Sectionfoot /> </div>
                    </div>
                    <Bannerfooter />
                </div>
            </Layout>
        </>
    );
}
