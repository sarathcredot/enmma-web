"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";

import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocalized } from "@/util/localization-helper";
import { getImageUrl } from "@/util/image-url-helper";


export default function corporate({ initialData }) {
  const { t } = useTranslation('common');
  const { i18n } = useTranslation("common");
  const [localizedData, setLocalizedData] = useState(initialData);

  console.log("crop intionl",initialData)

  useEffect(() => {
    localize();
  }, []);

  useEffect(() => {
    localize();
  }, [i18n.language]);

  const localize = () => {
    const localizedData = getLocalized(initialData, i18n.language);
    setLocalizedData(localizedData);
  };

  const getBannerDataFromMetaData = (meta) => {
    return meta.map((item) => {
      return {
        title: item["pageTitle"],
        description: item["pageDescription"],
      };
    });
  };

  const getDataBySection = (section) => localizedData.cmsData.filter(item => item.section === section && item.status);
  const corporateHeadings = getDataBySection("corporate-heading");
  const corporateContact = getDataBySection("corporate-contact");

  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout headerStyle={6} footerStyle={3}>
        <Banner1
          data={getBannerDataFromMetaData(localizedData.meta)}
          bgColor={"#110B79"}
          fontColor={"#FFFFFF"}
          fontColor2={"#FFFFFF"}
        />
        <div>
          <div className=" " style={{ backgroundColor: "#110B79" }}>
            <div className=" container project__area-three project__area-three-new    ">
              {corporateHeadings.length > 0 && <CorporateSubheading corporateHeading={corporateHeadings[0]} />}
              <CorporatePoints corporatePoints={localizedData.corporatePoints} />
            </div>
            <div className="container dev-bottom ">
              <Sectionfoot data={[{}]} />
            </div>
          </div>
          {corporateContact.length > 0 && <Bannerfooter data={corporateContact} />}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const pageMeta = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pageMetadata`);
  const pageMetadata = await pageMeta.json();
  const corporatePageMetadata = pageMetadata.filter(
    (item) => item.page === "corporate"
  );

  const cmsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
  const cmsData = await cmsResponse.json();
  const corporateCMSData = cmsData.filter((item) => item.page === "corporate");

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/corporate`);
  const corporatePoints = await response.json();

  return {
    props: {
      initialData: {
        meta: corporatePageMetadata,
        corporatePoints: corporatePoints,
        cmsData: corporateCMSData,
      },
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export function CorporateSubheading({ corporateHeading }) {

  console.log("cor",corporateHeading)
  return (
    <div className="row container">
      <div className="col-xl-7 space-betweeni col-lg-8 mb-5">
        <div className="  dev_gover   ">
          <span className="">{corporateHeading.title}</span>
          <h2 className=" mt-4 text-wrap devtextwrapo">{corporateHeading.subtitle}</h2>
        </div>
        <div className="dev_customsize  mt-0 mt-md-4">
          {corporateHeading.description}
        </div>
      </div>
    </div>
  );
}


export function CorporatePoints({ corporatePoints }) {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  console.log("corparate data", corporatePoints)

  const handleDownload = async (url) => {


    const fileUrl = `${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${url}`
    console.log(fileUrl)

    const response = await fetch(fileUrl, {
      method: 'GET',
      mode: 'cors', // Adjust CORS settings if necessary
      headers: {
        'Content-Type': 'application/pdf', // Change this based on your file type
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const blob = await response.blob(); // Get the file as a Blob
    const filename = fileUrl.split("/").pop(); // Extract the filename from the URL

    const aTag = document.createElement("a");
    const urlObject = window.URL.createObjectURL(blob); // Create a URL for the Blob
    aTag.href = urlObject;
    aTag.setAttribute("download", filename); // Set the download attribute

    // Append to the body and trigger the download
    document.body.appendChild(aTag);
    aTag.click(); // Trigger the download
    aTag.remove(); // Clean up
    window.URL.revokeObjectURL(urlObject); // Clean up the Blob URL



  };


  return (
    <div className="row flex-wrap-reverse">
      <div className="col-md-6 my-5">
        <div className="services__tab-wrap">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {corporatePoints.map((corporatePoint, index) => {
              return (
                <li
                  className="nav-item"
                  onClick={() => handleOnClick(index)}
                  key={corporatePoint._id}
                >
                  {/* <Link href="#" smooth> */}
                  <button
                    style={{ display: "flex", alignItems: "center" }}

                    className={
                      activeIndex == index ? "nav-link active" : "nav-link"
                    }
                    id="health-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#health-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="health-tab-pane"
                    aria-selected="true"
                  >
                   
                   {
                      corporatePoint.icon ?  <img style={{width:"30px",height:"30px" ,borderRadius:"100%", marginRight:"10px" }}  src={getImageUrl(corporatePoint.icon)} alt="" /> : <i style={{marginRight:"5px"}} className=" flaticon-pin" />
                   }
                    



                    {corporatePoint.title}


                  </button>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-md-6" id="focus">
        <div className="tab-content" id="myTabContent">
          {corporatePoints.map((corporatePoint, index) => {
            return (
              <div
                className={
                  activeIndex == index
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="health-tab-pane"
                role="tabpanel"
                aria-labelledby="health-tab"
                tabIndex={0}
              >
                <div1 className="services__item-four shine-animate-item services__item-four-newchange  ">
                  <div style={{ borderRadius: "0px" }} className="services__thumb-four shine-animate">
                    <img src={getImageUrl(corporatePoint.imageUrl)} alt="" />
                  </div>
                  <div className="services__content-four">
                    <h2 className="title">
                      {corporatePoint.title}
                    </h2>
                    <p>
                      {corporatePoint.description}
                    </p>
                    {/* {
                      corporatePoint.document && <a style={{ marginTop: "10px" }} href={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${corporatePoint.document}`} target="_blank" rel="noopener noreferrer" className="btn btn-two">
                        {t('download')}

                      </a>
                    } */}


                    {
                      corporatePoint.document && <button style={{ marginTop: "10px" }} onClick={() => { handleDownload(corporatePoint.document) }} className="btn btn-two">
                        {t('download')}

                      </button>
                    }


                  </div>



                </div1>




              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}
