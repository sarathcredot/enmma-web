'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Banner3 = ({ title, paragraph, bgColor, fontColor, fontColor2 }) => {
    const [value, setValue] = useState(25000);

    const handleResize = () => {
        // Handle resize logic
    };

    useEffect(() => {
        // Initial setup
        handleResize();

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = e => {
        setValue(Math.ceil(e.target.value / 5) * 5);
    };


    return (
        <>
            <section className="banner__area-one banner__bg-four" style={{ backgroundColor: bgColor }} >
                <div className="container" style={{ color: fontColor }} >
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content-two">
                                <h2 className="title " style={{ color: fontColor }} data-aos="fade-up" data-aos-delay={100}>{title}</h2>
                                <p data-aos="fade-up" style={{ color: fontColor2 }} data-aos-delay={300}>{paragraph}</p>
                                {/* <Link href="/contact" className="btn border-btn" data-aos="fade-up" data-aos-delay={600}>Get Started</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div> */}
                <div className="banner__shape-two">

                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="heartbeat" />
                </div>
                <div className="breadcrumb__shape">
                    <img src="/assets/img/images/bannerlogo.png" alt="" className='img-fluid' />

                    {/* <img src="/assets/img/images/breadcrumb_shape04.png" alt="" /> */}
                    {/* <img src="/assets/img/images/breadcrumb_shape05.png" alt="" className="alltuchtopdown" /> */}
                </div>
                <div className="box-search-small container dev-bottom" >
                    <div className=" search__form-wrap" >

                        <form id="contact-form" action="assets/mail.php" method="POST">

                            
                            <input  className='form-grp'type="text" name="name" placeholder="Property ID / Name" />

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Property Type</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>
                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Governorate</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>
                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Area (sqft)</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Bedrooms & Bathrooms</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Area Range </option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Price Range</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>
                                
                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Price Range</option>
                                    <div className="range-slider-wrap">
                                    <div className="range-top">
                                        <p>Limits of balance:</p>
                                        <span>$<strong id="rangeValue">{value}</strong></span>
                                    </div>
                                    <input className="range" type="range"
                                        min="1"
                                        max="50000"
                                        value={value}
                                        onChange={e => handleChange(e)} />
                                </div>
                                </select>
                            <button type="submit" className=" btn " style={{width:'350px', height:'50px'}}>Search property </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

Banner3.defaultProps = {
    bgColor: '#FFFFFF',
    fontColor: '#110B79',
    fontColor2: '#282739',
};

export default Banner3;
