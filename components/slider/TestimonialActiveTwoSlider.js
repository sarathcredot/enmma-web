'use client'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';


export default function TestimonialActiveTwoSlider({ data }) {

    console.log("test data", data)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false, // No arrows
        dots: false // Enable dots for focusing

    };
    const slider = useRef(null);

    // const getalltestimonial = async () => {

    //     try {

    //         const result = (await axios(`${process.env.NEXT_PUBLIC_BASE_URL}${"/cms/service/alltestimonial"}`)).data

    //         settestimonial(result.data.testimonial)


    //     } catch (error) {

    //     }
    // }


    // useEffect(() => {

    //     getalltestimonial();
    // }, [])


    return (
        <>

            <div className="testimonial__item-three">



                {/* <Slider ref={slider} {...settings}>

                    {
                        data?.map((item, index) => (


                          


                            <div>

                                <p key={index} > "{item.description} </p>

                                <div style={{ textAlign: "end", paddingRight: "15px" }} >

                                    <span style={{ display: "block" }}>{item.person}</span>
                                    <span style={{ display: "block" }}>{item.designation}</span>

                                </div>



                            </div>


                        ))
                    }


                </Slider> */}


                {/* <p>
                    “ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor
                    sit amet, consecteture.Borem ipsum dolor sit amet, consectetur
                    adipiscing elita Moremsit amet.</p>
 */}

                <Slider ref={slider} {...settings}  >

                    {
                        data?.map((item, index) => (

                            <div>

                                <p key={index} > "{item.description} </p>

                                <div style={{ textAlign: "end", paddingRight: "15px" }} >

                                    <span style={{ display: "block" }}>{item.person}</span>
                                    <span style={{ display: "block" }}>{item.designation}</span>

                                </div>



                            </div>
                        ))
                    }

                </Slider>






                <div className="testimonial__bottom">

                    <div className="testimonial__icon">
                        <img src="/assets/img/icon/quote02.svg" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
