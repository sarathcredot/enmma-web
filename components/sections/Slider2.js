'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.testimonial-two-button-next',
        prevEl: '.testimonial-two-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Slider2() {
    return (
        <>
            <section className="slider__area">
                <div className="swiper-container slider_baner__active slider_baner_home6">
                    {/* <Swiper {...swiperOptions} className="swiper-wrapper"> */}
                        <SwiperSlide className="swiper-slide ">
                            <div className="slider__bg" data-background="/assets/img/home6/banner.jpg" />
                            <div className="container">
                                <div className="row">
                                    <div className=" col-lg-8 mt-30">
                                        <div className="banner__content-three ">
                                            <div className="text-25-years">
                                                <span className="text-stroke">30+</span>
                                                <h4 className="text-experience">YEARS EXPERIENCES<br /> IN THIS FIELD</h4>
                                            </div>
                                            <span className="sub-title aos-init aos-animate">Al Enma’a Real Estate Company K.S.C.P</span>
                                            <h2 className="title">Property Management &amp; Security Services</h2>
                                            <p>With a commitment to excellence and a focus on innovation, we strive to provide top-notch solutions tailored to meet your needs. Experience peace of mind knowing that your property is in safe hands with us.</p>
                                            <Link href="/#" className="btn">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide className="swiper-slide slider__single">
                            <div className="slider__bg" data-background="/assets/img/home6/banner.png" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="banner__content-three">
                                            <div className="text-25-years">
                                                <span className="text-stroke">30</span>
                                                <h4 className="text-experience">YEARS EXPERIENCES<br /> IN THIS FIELD</h4>
                                            </div>
                                            <span className="sub-title aos-init aos-animate">Al Enma’a Real Estate Company K.S.C.P</span>
                                            <h2 className="title">Trusted Partner in Property Management and Security Services</h2>
                                            <p>With a commitment to excellence and a focus on innovation, we strive to provide top-notch solutions tailored to meet your needs. Experience peace of mind knowing that your property is in safe hands with us.</p>
                                            <Link href="/contact" className="btn">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slider__single">
                            <div className="slider__bg" data-background="/assets/img/home6/banner.png" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="banner__content-three">
                                            <div className="text-25-years">
                                                <span className="text-stroke">30</span>
                                                <h4 className="text-experience">YEARS EXPERIENCES<br /> IN THIS FIELD</h4>
                                            </div>
                                            <span className="sub-title aos-init aos-animate">Al Enma’a Real Estate Company K.S.C.P</span>
                                            <h2 className="title">Trusted Partner in Property Management and Security Services</h2>
                                            <p>With a commitment to excellence and a focus on innovation, we strive to provide top-notch solutions tailored to meet your needs. Experience peace of mind knowing that your property is in safe hands with us.</p>
                                            <Link href="/contact" className="btn">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    {/* </Swiper> */}
                </div>
                <div className="box-button-slider-bottom">
                    <div className="container">
                        {/* <div className="testimonial__nav-four">
                            <div className="testimonial-two-button-prev button-swiper-prev"><i className="flaticon-right-arrow" /></div>
                            <div className="testimonial-two-button-next button-swiper-next"><i className="flaticon-right-arrow" /></div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>

    )
}
