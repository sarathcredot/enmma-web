import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Link from "next/link"
import TestimonialActiveTwoSlider from "@/components/slider/TestimonialActiveTwoSlider"
import Sectionfoot from "@/components/layout/DevsectionFoot"


export default function Services() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner2  title={'Services'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} bgColor={"#110B79"} fontColor={"#FFFFFF"}fontColor2={'#FFFFFF'}/>
            <div  style={{ backgroundColor: '#110B79' }}>


<div className="container">
                    <div className="row  pt-4">
                        <div className="col-lg-8">
                            <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                                
                                <span className="sub-title">What we Offer</span>
                                <h2 className="title tg-element-title col-lg-8">Lorem ipsum dolor sit amet congue ornare elit  </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gutter-24">
                        <div className="col-lg-4 col-md-6">
                            <div className="services__item-three">
                                <div className="services__item-top">
                                    <div className="services__icon-three">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="services__item-top-title">
                                        <h2 className="title"><Link href="">Owner Services</Link></h2>
                                    </div>
                                </div>
                                <div className="services__content-three">
                                    <p>Al Enmaa Real Estate Co. has been managing rental properties for years. Our industry-specific experience and property owners.</p>
                                    {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services__item-three">
                                <div className="services__item-top">
                                    <div className="services__icon-three">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="services__top-title">
                                        <h2 className="title"><Link href="">Security</Link></h2>
                                    </div>
                                </div>
                                <div className="services__content-three">
                                    <p>We are pleased to offer security services across all the public and private sector.We always look forward to supporting all businesses.</p>
                                    {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="services__item-three">
                                <div className="services__item-top">
                                    <div className="services__icon-three">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="services__top-title">
                                        <h2 className="title"><Link href="">Consultancy</Link></h2>
                                    </div>
                                </div>
                                <div className="services__content-three">
                                    <p>We offer real estate consultancy services to clients who would like to seek professional advice regarding investment in properties.</p>
                                    {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services__item-three">
                                <div className="services__item-top">
                                    <div className="services__icon-three">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="services__top-title">
                                        <h2 className="title"><Link href="">Leasing Services</Link></h2>
                                    </div>
                                </div>
                                <div className="services__content-three">
                                    <p>We provide a variety of leasing services in many areas in the State of Kuwait.You can also choose the property that meets your needs by using the contact form below.</p>
                                    {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services__item-three">
                                <div className="services__item-top">
                                    <div className="services__icon-three">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="services__top-title">
                                        <h2 className="title"><Link href="">Auction</Link></h2>
                                    </div>
                                </div>
                                <div className="services__content-three">
                                    <p>Real estate auctions have long been an effective way for investors to get a good and attractive real e   state deals.</p>
                                    {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                </div>
                            </div>
                        </div>

                       <div ><Sectionfoot/> </div>
                    </div>
                </div>
             
                <section className="testimonial__area-three testimonial__bg py-5" data-background="/assets/img/bg/h3_testimonial_bg.jpg">
                        <div className="container my-5">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-5 col-md-8">
                                    <div className="testimonial__img-wrap-two">
                                        <img src="/assets/img/images/h3_testimonial_img.png" alt="" />
                                        <div className="testimonial__img-shape-two">
                                            <img src="/assets/img/images/h3_testimonial_shape01.png" alt="" className="alltuchtopdown" />
                                            <img src="/assets/img/images/h3_testimonial_shape02.png" alt="" className="rotateme" />
                                            <img src="/assets/img/images/h3_testimonial_shape03.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="testimonial__item-wrap">
                                        <div className="swiper-container testimonial-active-two">
                                            <TestimonialActiveTwoSlider />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            <section className="request-area request-bg" data-background="/assets/img/bg/request_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="request-content text-center">
                                        <h2 className="title">Offering The Best Experience Of Real Estate  Services</h2>
                                        <div className="content-bottom">
                                            <Link href="tel:0123456789" className="btn">Contact With Us</Link>
                                            <div className="content-right">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    {/* <span>Toll Free Call</span> */}
                                                    <Link href="tel:0123456789">+ 88 ( 9600 ) 6002</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="request-shape">
                            <img src="/assets/img/images/request_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/request_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
            </Layout>
        </>
    )
}