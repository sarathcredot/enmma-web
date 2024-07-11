import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Brand2 from "@/components/sections/Brand1"
import Counter1 from "@/components/sections/Counter1"
        import SVG from "@/components/elements/Allsvg"

import Link from "next/link"

export default function About() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} >
                <Banner2  title={'About Company'} paragraph={'Al Enma’a Real Estate Company K.S.C.P was registered and incorporated in State of Kuwait in 1993. The company shares are listed on Boursa Kuwait and all the activities of the company are conducted in accordance with Islamic Sharia. The parent company is subsidiary of Kuwait Finance House K.S.C.P a registered Islamic bank in Kuwait whose shares are listed on Boursa Kuwait.'} />
                <div>
                    <section className="about__area-four">

                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10">
                                    <div className="about__img-wrap-four">
                                        <img src="/assets/img/images/inner_about01.jpg" alt="" />
                                        <img src="/assets/img/images/inner_about02.jpg" alt="" />
                                        <div className="about__award-box">
                                            <div className="icon">
                                                <i className="flaticon-time" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">30+</h2>
                                                <p>Years of Experiences <br />Property management  <br />& Investment</p>
                                            </div>
                                        </div>
                                        <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                        </div>
                                    </div>
                                </div>
                                <div1 className="col-lg-6">
                                    <div className="about__content-four">
                                        {/* <div className="section-title mb-30">
                                            <span className="sub-title">Lorem ipsum dolor sit amet consectetur. Orci </span>
                                            <h2 className="title">Lorem ipsum dolor sit amet congue ornare elit </h2>
                                        </div> */}
                                        {/* <div1 className="about__content-inner-three">
                                            <div className="about__list-box">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Medicare Advantage Plans</li>
                                                    <li><i className="flaticon-arrow-button" />Analysis  Research</li>
                                                    <li><i className="flaticon-arrow-button" />100% Secure Money Back</li>
                                                </ul>
                                            </div>
                                            <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.png" alt="" />
                                            </div>
                                        </div1> */}
                                        <p>Al Enmaa Real Estate Company is engaged in real estate activities inside and outside Kuwait. In the field of the real estate, the Company manages, markets, leases and maintains all types of real estate whether owned by the company or managed for other through its qualified personnel. The company organizes real estate auctions, carrying out real estate brokerage works, evaluating real estate for others and provide real estate consultancy services.<br/>
                                        <br/>In the field of the contracting projects, the Company implements and maintains the different construction projects such as housing cities, commercial, investment and residential towers whether to the account of the public sector or private sector and shall also implement and maintain specialized contracting such as electrical, mechanical, sanitary, air conditioning, electronic systems and fire systems. Moreover, the Company provides the entire types of integrated engineering services in addition to the installation and maintenance services of the central air conditioning in all its types for the Governmental projects and the private sectors and individuals projects.<br/><br/>
         The Company also provides security guarding services to Ministries, Governmental Institutions, private sector, cooperative societies and real estate owned and managed by it.<br/><br/>
The company manages two BOT projects namely Souk Al Wataniya & Souk Al Dawliah and owns commercial and residential properties.
<br/><br/>
Such integration of the performance confirms the Company’s efforts towards realizing excellence and diversification in performance, providing the best services to its customers and promoting the economic Islamic work.</p>
                                        {/* <Link href="/contact" className="btn">Contact With Us</Link> */}
                                    </div>
                                </div1>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                     {/* counter-area */}

                     <Counter1 />


                     {/* <section className="counter-area-one">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-trophy" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={50} />+</h2>
                                            <p>Successfully <br /> Completed Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-happy" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={100} />+</h2>
                                            <p>Satisfied <br /> 100% Our Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-china" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={10} />+</h2>
                                            <p>All Over The World <br /> We Are Available</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="flaticon-time" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={30} />+</h2>
                                            <p>Years of Experiences Property management & Investment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="counter-shape-wrap">
                            <img src="/assets/img/images/counter_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/counter_shape02.png" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                            <img src="/assets/img/images/counter_shape03.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section> */}
                    {/* counter-area-end */}

                    {/* brand-area */}
                    <div className="brand__area">
                        <div className="container">
                            <div className="swiper-container brand-active">
                            </div>
                        </div>
                    </div>
                    {/* brand-area */}
                    {/* choose-area */}
                    <section className="choose__area-four">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="choose__content-four">
                                        <div className="section-title white-title mb-20">
                                            <span className="sub-title">Pioneering Excellence in Real Estate Services </span>
                                            <h2 className="title">Our MIssion and Vision </h2>
                                        </div>
                                        <p>We strive to be a trusted partner, providing sustainable solutions and setting new standards in real estate development and investment. Our goal is to deliver outstanding services and products, maximizing profits through the integration of knowledge, technology, and innovation. With a vision to become the premier choice in the real estate and security services sectors, we are dedicated to achieving the highest possible standards and exceeding our clients' expectations.</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="choose__list-two">
                                        <ul className="">
                                            {/* <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Business Solutions</h4>
                                                        <p>Semper egetuis kelly for tellus urna area condition.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-financial-profit" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Finance Planning</h4>
                                                        <p>Semper egetuis kelly for tellus urna area condition.</p>
                                                    </div>
                                                </div>
                                            </li> */}
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                    <SVG caseValue='case4'/>
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Mission</h4>
                                              <ul className="white-dev mb-2">
                                                <li>To evolve as a trusted partner in property management and security services.</li>
                                                <li>To develop sustainable Property Management solutions.</li>
                                                <li>New standards in real estate development and investments.</li>
                                                <li>To provide outstanding level of services and products to our clients.</li>
                                                <li>Profit maximization through combining knowledge, technology, and innovation in all spectrum of real estate.</li>
                                              </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                    <SVG caseValue='case5'/>
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Vision</h4>
                                                        <ul className="white-dev mb-2">
                                                <li>To become the first-choice partner of real estate and security services and to achieve highest possible standards in the real estate sector.</li>
                                            
                                              </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose__shape-wrap-four">
                            <img src="/assets/img/images/inner_choose_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/inner_choose_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    <Brand2/>

                    <section className="request-area request-bg" data-background="/assets/img/bg/request_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="request-content text-center">
                                        <h2 className="title">Offering The Best Experience Of Real Estate  Services</h2>
                                        <div className="content-bottom">
                                            <Link href="tel:1866667" className="btn">Contact With Us</Link>
                                            <div className="content-right">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    {/* <span>Toll Free Call</span> */}
                                                    <Link href="tel:1866667">+ 1866667</Link>
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

                    {/* choose-area-end */}
                                       {/* team-area */}
                    {/* <section className="team__area-four">
                        <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="section-title text-center mb-40">
                        <span className="sub-title">MEET OUR TEAM</span>
                                        <h2 className="title">Business Expertise Is Here <br /> For You Can Trust</h2>
                                    </div>
                                </div>
                                </div>
                                <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="team__item-four shine-animate-item">
                                <div className="team__thumb-four shine-animate">
                                <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                </div>
                                <div className="team__content-four">
                                <h2 className="title"><Link href="/team-details">Floyd Miles</Link></h2>
                                <span>Finance Advisor</span>
                                <div className="team__social-four">
                                <ul className="list-wrap">
                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                        <img src="/assets/img/team/h4_team_img02.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                        <h2 className="title"><Link href="/team-details">Ralph Edwards</Link></h2>
                                        <span>Finance Advisor</span>
                                        <div className="team__social-four">
                                        <ul className="list-wrap">
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img03.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Eleanor Pena</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                            <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                            <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img04.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Jone Cooper</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                            </section> */}
                    {/* team-area-end */}
                    {/* call-back-area */}
                    {/* <section1 className="call-back-area">
                        <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Request A Call Back</h2>
                                        </div>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                        <div className="shape">
                                        <img src="/assets/img/images/call_back_shape.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="call-back-form">
                                        <form action="#">
                                        <div className="row">
                                        <div className="col-md-6">
                                        <div className="form-grp ">
                                        <input type="text" placeholder="Name *" />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-grp ">
                                        <input type="email" placeholder="E-mail *" />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-grp ">
                                        <input type="number" placeholder="Phone *" />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <button type="submit" className="btn">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </section1> */}
                </div>
                    
            </Layout>
        </>
    )
}