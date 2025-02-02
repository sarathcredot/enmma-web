'use client'
import Link from "next/link";
import { useState ,useEffect} from "react";
import { useTranslation } from 'next-i18next';
import { toast } from "react-toastify";
import axios from "axios";





export default function ComplaintSection() {


  const { t, i18n } = useTranslation('common');
  const [footerData, setfooterData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [valiDateCheck, setvaliDateCheck] = useState(false)
  const [validationMsg, setvalidationMsg] = useState("*please enter required filed")
  const [conformBox, setconformBox] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "message"];
    const isValid = requiredFields.every(field => formData[field]);

    if (!isValid) {
      // alert("Please fill in all required fields");
      setvaliDateCheck(true)
      return;
    }

    if (formData.phone.length !== 10) {

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

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // form submiting ok time show popup
      if (response.ok) {

        toast.success("Submit", {
          position: "top-center",
          hideProgressBar: true

        });


        setFormData({
          name: "",
          email: "",
          phone: "",
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
    <section className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="contact__content">
              <div className="section-title mb-30">
                <h2 className="title">{t('contact-title')}</h2>
                <p>{t("contact-subtitle")}</p>
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
                      <h4 className="title">{t('email')}</h4>
                      <Link href={`mailto:${localizedData?.emailAddress}`}>{localizedData?.emailAddress}</Link>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div dir="rtr" className="col-lg-7">
            <div className="contact__form-wrap">
              <h2 className="title">{t('form-title1')}</h2>
              <p>{t('form-subtitle')}</p>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-grp">


                      <input
                        type="text"
                        name="name"
                        placeholder={"*" + t('Full-Name')}
                        value={formData.name}
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
                        name="phone"
                        placeholder={"*" + t("phone")}
                        value={formData.phone}
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
                }

                <button style={{ marginTop: "5px" }} type="submit" className="btn">{t('submit')}</button>

              </form>
              <p className="ajax-response mb-0" />
            </div>
          </div>
        </div>
        <div className="col-lg-12 ">

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.974574165315!2d47.97528657531801!3d29.371033675269594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf859c6fe72ded%3A0x6cab84399af0eabf!2sAl%20Enmaa%20Tower!5e0!3m2!1sen!2sin!4v1715233152422!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>


        </div>
      </div>
    </section>
  );
}
