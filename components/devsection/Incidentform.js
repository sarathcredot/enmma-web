
"use-client"
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { message } from "antd";
import axios from "axios";


export default function IncidentForm() {
    // const { t, i18n } = useTranslation('common');



    // const [formData, setFormData] = useState({
    //     description: '',
    //     contactNumber: '',
    //     civilId: '',
    //     firstName: '',
    //     lastName: '',
    //     phoneNumber: '',
    //     emailAddress: '',
    //     option: ''
    // });
    // const [errMsg, seterrMsg] = useState("*please enter required filed")
    // const [valiDateCheck, setvaliDateCheck] = useState(false)

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const requiredFields = ['description', 'civilId', 'firstName', 'lastName', 'emailAddress', 'option'];
    //     const isValid = requiredFields.every(field => formData[field]);

    //     if (!isValid) {
    //         setvaliDateCheck(true)
    //         return;
    //     } else if (formData.option.length !== 10 && formData.contactNumber.length !== 10) {

    //         seterrMsg("Enter valid phone number ");
    //         setvaliDateCheck(true)
    //         return;
    //     }


    //     try {

    //         setvaliDateCheck(false)
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/complaints-suggestions`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {

    //             toast.success("Your complaint has been successfully registered.", {
    //                 position: "top-center",
    //                 hideProgressBar: true

    //             });
    //             setFormData({
    //                 description: '',
    //                 contactNumber: '',
    //                 civilId: '',
    //                 firstName: '',
    //                 lastName: '',
    //                 phoneNumber: '',
    //                 emailAddress: '',
    //                 option: ""
    //             });

    //         } else {
    //             const errorData = await response.text();
    //             console.error('Failed to submit form', response.statusText, errorData);

    //             toast.error("Something went wrong. Please try again.", {
    //                 position: "top-center",
    //                 hideProgressBar: true

    //             });
    //             setFormData({
    //                 description: '',
    //                 contactNumber: '',
    //                 civilId: '',
    //                 firstName: '',
    //                 lastName: '',
    //                 phoneNumber: '',
    //                 emailAddress: '',
    //                 option: ""
    //             });


    //         }
    //     } catch (error) {
    //         console.error('An error occurred:', error);

    //         toast.error("Something went wrong. Please try again.", {
    //             position: "top-center",
    //             hideProgressBar: true

    //         });
    //         setFormData({
    //             description: '',
    //             contactNumber: '',
    //             civilId: '',
    //             firstName: '',
    //             lastName: '',
    //             phoneNumber: '',
    //             emailAddress: '',
    //             option: ""
    //         });


    //     }




    // };


    const { t, i18n } = useTranslation('common');
    const [footerData, setfooterData] = useState(null);

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        message: ""
    });
    const [valiDateCheck, setvaliDateCheck] = useState(false)
    const [validationMsg, setvalidationMsg] = useState("*please enter required filed")
    const [conformBox, setconformBox] = useState(false)
    const form = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        const requiredFields = ["fullname", "email", "mobile", "message"];
        const isValid = requiredFields.every(field => formData[field]);

        if (!isValid) {
            // alert("Please fill in all required fields");
            setvaliDateCheck(true)
            return;
        }

        if (formData.mobile.length !== 10) {

            setvaliDateCheck(true)
            setvalidationMsg("Enter valid phone number")
            return;
        }

        if (!conformBox) {

            setvaliDateCheck(true)
            setvalidationMsg("Please enable your confirmation.")
            return;
        }

        setvaliDateCheck(false)

        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/incident/create_incident`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // form submiting ok time show popup
            console.log(response)
            if (response.ok) {

                toast.success("Submit", {
                    position: "top-center",
                    hideProgressBar: true

                });

                // emailjs


                emailjs.sendForm("service_g43yul4", "template_zg6cd5v", form.current, {

                    publicKey: "ajnXquWIKiIPWA87n"
                }).then(() => {

                    console.log("email sent")
                }).catch(err => {

                    console.log("email sent failed")
                })







                setFormData({
                    fullname: "",
                    email: "",
                    mobile: "",
                    message: ""
                });

            } else {

                // form submiting time error show popup
                const errorData = await response.text();
                console.error("Failed to submit form", response.statusText, errorData);

                toast.error("Failed to submit form", {
                    position: "top-center",
                    hideProgressBar: true

                });


            }
        } catch (error) {

            // network error time show popup
            console.error("An error occurred:", error);
            toast.error("An error occurred while submitting the form", {
                position: "top-center",
                hideProgressBar: true

            });




        }



    };


    useEffect(() => {



        const fetchFooterData = async () => {
            try {
                const result = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/footer`);
                console.log("footer data", result.data);
                setfooterData(result.data);
            } catch (error) {
                console.error('Error fetching footer data:', error);
            }
        };


        fetchFooterData();
    }, [i18n.language]);



    const localizedData = {
        ...footerData,
        QuickLinks: footerData?.QuickLinks?.map(link => ({
            ...link,
            title: link[`title_${i18n.language}`] || link.title_en,
        })),
        InformationLinks: footerData?.InformationLinks?.map(link => ({
            ...link,
            title: link[`title_${i18n.language}`] || link.title_en,
        })),
        socialMediaLinks: footerData?.socialMediaLinks?.map(link => ({
            ...link,
            platform: link.platform,
            url: link.url,
        })),
        address: footerData?.[`address_${i18n.language}`] || footerData?.address_en,
        phoneNumber: footerData?.phoneNumber,
        emailAddress: footerData?.emailAddress,
        copyrightText: footerData?.copyrightText,
        poweredByText: footerData?.poweredByText,
        logourl: footerData?.logourl,
        logoUrl: footerData?.logoUrl,
    };










    return (
        <>
            <section className="contact__area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row ">
                            <div dir="rtr" className="col-lg-8 ">
                                <div className="contact__form-wrap complaint-form">
                                    <h2 className="title">{t('Complaint-title')}</h2>
                                    <p>{t('Complaint-subtitle')}</p>
                                    <form ref={form} id="contact-form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-grp">


                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        placeholder={"*" + t('Full-Name')}
                                                        value={formData.fullname}
                                                        onChange={handleChange}
                                                    />



                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-grp">

                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder={"*" + t('Email')}
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-grp">

                                                    <input
                                                        type="number"
                                                        name="mobile"
                                                        placeholder={"*" + t("phone")}
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-grp">

                                            <textarea
                                                name="message"
                                                placeholder={"*" + t('message')}
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-grp checkbox-grp">

                                            <input onClick={() => { setconformBox(!conformBox) }} type="checkbox" name="checkbox" id="checkbox" />
                                            <label htmlFor="checkbox">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>





                                        {
                                            valiDateCheck && <> <span style={{ color: "red", marginLeft: "5px" }} > {validationMsg} </span><br /> </>
                                        }          <button style={{ marginTop: "10px" }} type="submit" className="btn">{t('submit')}</button>
                                    </form>
                                    <p className="ajax-response mb-0" />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="contact__content">
                                    <div className="section-title mb-35">
                                        <h2 className="title">{t('complaint-contact-tittle')}</h2>
                                        {/* <p>Lorem ipsum dolor sit amet consectetur. Pellentesque ornare ipsum ultrices lacus. Quisque tortor accumsan ut pellentesque</p> */}
                                    </div>
                                    <div className="contact__info">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-pin" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">{t('Address')}</h4>
                                                    <a href={`https://www.google.com/maps?q=${encodeURIComponent(localizedData?.address)}`} target="_blank" rel="noopener noreferrer" >

                                                        <p>{localizedData?.address}</p>

                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">{t('phone')}</h4>
                                                    <Link dir="ltr" href={`tel:${localizedData?.phoneNumber}`}>{localizedData?.phoneNumber}</Link>
                                                    </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-mail" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">{t('email')}  </h4>
                                                    <Link href={`mailto:${localizedData?.emailAddress}`}>{localizedData?.emailAddress}</Link>
                                                    </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
