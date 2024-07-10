
export default function About3() {
    return (
        <>
            <section className="about__area-three about__bg-two" data-background="/assets/img/bg/h3_about_bg.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-8 mx-4">
                            <div className="about__img-wrap-three">
                                <img src="/assets/img/images/h3_about_img001077.jpg" alt="" />
                                <img src="/assets/img/images/h3_about_img02.jpg" alt="" data-parallax="{&quot;x&quot; : 50 }" />
                                <div className="shape">
                                    <img src="/assets/img/images/h3_about_img_shape.png" alt="" className="alltuchtopdown" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-three">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title">AL ENMA’A REAL ESTATE COMPANY</span>
                                    <h2 className="title tg-element-title">Shaping Futures, Building <br/>Legacies</h2>
                                </div>
                                <p>Leading in Real Estate Management, Construction, and Security Services.Al Enmaa Real Estate Company is engaged in real estate activities inside and outside Kuwait. In the field of the real estate, the Company manages, markets, leases and maintains all types of real estate whether owned by the company or managed for other through its qualified personnel.</p>
                                <div className="about__content-inner about__content-inner-two">
                                    {/* <div className="experience__box-three">
                                        <div className="title">
                                            <span>25</span>
                                        </div>
                                        <p>Years <span>Experience</span> in Consulting</p>
                                    </div> */}
                                    <div className="about__list-box ">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-arrow-button" />Comprehensive Real Estate Services</li>
                                            <li><i className="flaticon-arrow-button" />Diverse Contracting Capabilities</li>
                                            <li><i className="flaticon-arrow-button" />Holistic Security Solutions</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="about-bottom about-bottom-two ">
                                    <div className="author-wrap">
                                        <div className="thumb">
                                            <img src="/assets/img/images/author_img.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Abdulaziz Muflaq Alosaimi  <br/><span>Chief Executive officer</span></h4>
                                        </div>
                                    </div>
                                    {/* <div1 className="about__phone">
                                        <div className="icon">
                                            <i className="flaticon-phone-call" />
                                        </div>
                                        <div className="content">
                                            <span>Hot Line Number</span>
                                            <Link href="tel:1866667">+123 8989 444</Link>
                                        </div>
                                    </div1> */}
                                </div>
                                <div className="about__shape-wrap-three">
                                    <img src="/assets/img/images/h3_about_shape01.png" alt="" className="rotateme" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
