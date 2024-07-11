"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service1() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Owner Services"}
                    paragraph={`Al Enmaa Real Estate Co. has been managing rental properties for years. Our industry-specific experience and a wide range of processes and procedures meet the needs of property owners and help tenants receive excellent services.`}
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
                                        <span className="">Owner Services Excellence</span>
                                        <h2 className=" mt-4">
                                            {" "}
                                            Tailored Property Management <br/>Solutions in Kuwait
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
                                <div className="col-md-7">
                                    <div className="services__tab-wrap">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <Link href="#focus-service" smooth><button
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
                                                    Industry Expertise
                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <Link href="#focus-service" smooth> <button
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
                                                    Investment in Excellence  </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <Link href="#focus-service" smooth> <button
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
                                                    Exceptional Client Support                                                </button></Link>
                                            </li>
                                            {/* <li1 className="nav-item" onClick={() => handleOnClick(4)}>
                                                <Link href="#focus-service" smooth><button
                                                    className={
                                                        activeIndex == 4 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="cargo-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#cargo-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="cargo-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Investing in Your Success
                                                </button></Link>
                                            </li1> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5" id="focus-service">
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
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Tabpanel.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Industry Expertise  </Link>
                                                    </h2>
                                                    <p>
                                                    Al Enmaa Real Estate Co. brings years of specialized experience in managing rental properties, catering to the diverse needs of property owners. Our comprehensive processes and procedures ensure efficient management practices that enhance property value and tenant satisfaction. Whether it's residential, commercial, or mixed-use properties, we deliver tailored solutions that align with your investment goals.
                                                    </p>
                                                </div>
                                            </div>
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
                                                        <Link href="/services-details"></Link>
                                                        Investment in Excellence                                                    </h2>
                                                    <p>
                                                    Driven by a commitment to excellence, we have strategically invested in our human resources, technology infrastructure, and operational capabilities. These investments enable us to offer cutting-edge property management services in Kuwait. From advanced property management software to proactive maintenance strategies, we leverage innovation to optimize property performance and maximize returns for our clients.
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
                                                        Exceptional Client Support</Link>
                                                    </h2>
                                                    <p>
                         At Al Enmaa Real Estate Co., client satisfaction is our priority. We provide personalized support and transparent communication throughout our partnership. Our dedicated team of property management professionals ensures that property owners receive timely financial reports, regular property inspections, and proactive tenant management solutions. Partner with us for peace of mind and a seamless property ownership experience in Kuwait.

                                                    </p>
                                                    
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                activeIndex == 4
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="cargo-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="cargo-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Tabpanel.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                            Investing in Your Success
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Al Enmaa Real Estate is committed to your success as
                                                        a property owner. We go beyond basic property
                                                        management by offering additional services designed
                                                        to maximize your investment returns
                                                    </p>
                                                    <div className="about__list-box-2">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <SVG caseValue="case13" />
                                                                <ul>
                                                                    <li>
                                                                        <h6>
                                                                            Market Analysis and Rent Optimization:
                                                                        </h6>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            We leverage our market expertise to
                                                                            analyze rental trends and ensure your
                                                                            property is priced competitively.
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <SVG caseValue="case13" />
                                                                <ul>
                                                                    <li>
                                                                        <h6>
                                                                            Renovation and Maintenance Consulting:
                                                                        </h6>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            Our team can advise you on cost- effective
                                                                            renovations or upgrades that can enhance
                                                                            the value of your property and attract
                                                                            high-quality tenants.{" "}
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <SVG caseValue="case13" />
                                                                <ul>
                                                                    <li>
                                                                        <h6>Legal Support: </h6>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            We can connect you with trusted legal
                                                                            professionals to ensure you are compliant
                                                                            with all regulations and maximizing your
                                                                            benefits.With Al Enmaa's comprehensive
                                                                            owner services, you can experience the
                                                                            benefits of rental property ownership with
                                                                            minimal stress. We focus on maximizing
                                                                            your return on investment while ensuring
                                                                            your property is well-maintained and
                                                                            managed effectively.{" "}
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
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
