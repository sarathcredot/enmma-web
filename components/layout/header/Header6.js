import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import SVG from "../../elements/Allsvg"
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from "react";
import axios from "axios"

export default function Header6({ scroll, isMobileMenu, handleMobileMenu, transparent, isSearch, isOffcanvus, handleOffcanvus, handleSearch }) {
    const { t } = useTranslation('common');
    const [navdata, setnavdata] = useState([])

    useEffect(() => {


        axios(`${process.env.NEXT_PUBLIC_BASE_URL}/header/get_all_navsection`).then((result) => {

            setnavdata(result.data)
        })

    }, [])





    return (
        <>
            <header className="tg-header__style-five">
                {/* <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tg-header__top-info left-side list-wrap">
                                    <li><i className="flaticon-phone-call" /><Link href="tel:0123456789">+123 9898 500</Link></li>
                                    <li><i className="flaticon-pin" />256 Avenue, Mark Street, NewYork City</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="tg-header__top-right list-wrap">
                                    <li><i className="flaticon-envelope" /><Link href="mailto:info@apexa.com">info@apexa.com</Link></li>
                                    <li><i className="flaticon-time" />Mon-Fri: 10:00am - 09:00pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div id="sticky-header" className={`tg-header__area tg-header__area-five ${scroll ? "sticky-menu" : ""}`}>
                    <div className="navbar-padding">
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" width={59} height={80} alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                            <Menu />
                                        </div>
                                        <div className="tgmenu__action tgmenu__action-five d-none d-md-block">
                                            <ul className="list-wrap">


                                                {
                                                    navdata.map((obj, index) => (

                                                        obj.section === "Search-property" && obj.status ? (


                                                            <li className="header-btn" >
                                                                <Link href="/search-property" className="btn ">
                                                                    <SVG caseValue='case1' />&nbsp; {t("search_properties")}</Link>

                                                            </li>

                                                        ) : null
                                                    ))
                                                }


{
                                                    navdata.map((obj, index) => (

                                                        obj.section === "Pay Rent" && obj.status ? (


                                                            <li className="header-btn">
                                                            <Link href="https://onpayment.enmaa.com/ONPAY/login.jsp" className="btn btn-two"> 
                                                            <SVG caseValue='case2' />&nbsp; {t("pay_rent")}</Link>
                                                            </li>

                                                        ) : null
                                                    ))
                                                }








                                                





                                            </ul>
                                        </div>
                                        <div className="mobile-nav-toggler mobile-nav-toggler-two" onClick={handleMobileMenu}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                                <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z" fill="currentcolor" />
                                                <path d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z" fill="currentcolor" />
                                                <path d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z" fill="currentcolor" />
                                                <path d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z" fill="currentcolor" />
                                                <path d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z" fill="currentcolor" />
                                                <path d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z" fill="currentcolor" />
                                                <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z" fill="currentcolor" />
                                                <path d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z" fill="currentcolor" />
                                                <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z" fill="currentcolor" />
                                            </svg>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="my-4 mx-4">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" width={60} height={80} /></Link>
                                        </div>
                                        {/* <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search" /></button>
                                            </form>
                                        </div> */}
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="tgmobile__menu-bottom">
                                            <div className="contact-info">
                                                <ul className="list-wrap">
                                                    <li><Link href="mailto:info@apexa.com">info@enmaa.com</Link></li>
                                                    <li><Link href="tel:0123456789">+123 888 9999</Link></li>
                                                </ul>
                                            </div>
                                            <div className="social-links">
                                                <ul className="list-wrap">

                                                    <li><Link href="#"></Link> <SVG caseValue='case6' /></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
