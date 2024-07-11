"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import Link from "next/link";
import { useState } from "react";

export default function Service3() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Auction Services"}
                    paragraph={`Real estate auctions have long been an effective way for investors to get a good and attractive real estate deals. The best way to see if auction is right for you and your property is to contact us. We can help you regarding the real estate auction process and provide you with a recommendation for your properties and real estate investments.`}
                    bgColor={"#110B79"}
                    fontColor={"#FFFFFF"}
                    fontColor2={"#FFFFFF"}
                />
                <div>
                    <div className="mb-5" style={{ backgroundColor: "#110B79" }}>
                        <div className="container project__area-three">
                            <div className="row">
                                <div className="col-xl-7 space-betweeni col-lg-8">
                                    <div className="mb-50 dev_gover">
                                        <span className="">Maximize Opportunities with Real Estate Auctions</span>
                                        <h2 className="mt-4">
                                            Secure Attractive Deals Through <br />Expert Auction Services
                                        </h2>
                                    </div>
                                    <div className="dev_customsize services__content-two mt-4">
                                        <Link href="/services" className="btn">
                                            See more services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="services__tab-wrap">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                                <Link href="#dev-link-section">
                                                    <button
                                                        className={activeIndex === 1 ? "nav-link active" : "nav-link"}
                                                        id="health-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#health-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="health-tab-pane"
                                                        aria-selected="true"
                                                    >
                                                        <i className="flaticon-travel-insurance" />
                                                        Effective Investment Strategy
                                                    </button>
                                                </Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                <Link href="#dev-link-section">
                                                    <button
                                                        className={activeIndex === 2 ? "nav-link active" : "nav-link"}
                                                        id="travel-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#travel-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="travel-tab-pane"
                                                        aria-selected="false"
                                                    >
                                                        <i className="flaticon-travel-insurance" />
                                                        Personalized Auction Consultation
                                                    </button>
                                                </Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                <Link href="#dev-link-section">
                                                    <button
                                                        className={activeIndex === 3 ? "nav-link active" : "nav-link"}
                                                        id="vehicle-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#vehicle-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="vehicle-tab-pane"
                                                        aria-selected="false"
                                                    >
                                                        <i className="flaticon-travel-insurance" />
                                                        Seamless Auction Process
                                                    </button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6" id="dev-link-section">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}
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
                                                            Effective Investment Strategy
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Real estate auctions have proven to be a highly effective method for investors to secure attractive property deals. At Al Enmaa Real Estate Co., we offer comprehensive auction services that help you capitalize on market opportunities. Our auctions provide a competitive platform where investors can find lucrative deals, making it an ideal strategy for expanding your real estate portfolio.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"}
                                            id="travel-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="travel-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                            Personalized Auction Consultation
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Determining if an auction is the right approach for your property is crucial. Our expert team is here to guide you through this decision-making process. By contacting us, you can receive a personalized consultation that evaluates your property's potential in the auction market. We provide detailed insights and recommendations tailored to your specific real estate investments.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"}
                                            id="vehicle-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="vehicle-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                            Seamless Auction Process
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Navigating the real estate auction process can be complex, but with Al Enmaa Real Estate Co., you're in capable hands. Our experienced professionals offer comprehensive support throughout the entire auction process. From initial consultation to final bid, we ensure a smooth, transparent, and successful auction experience, maximizing the value and return on your property investments.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5"></div>
                        </div>
                        <div className="container dev-bottom">
                            <Sectionfoot />
                        </div>
                    </div>
                    <Bannerfooter />
                </div>
            </Layout>
        </>
    );
}
