
import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Link from "next/link"
import IncidentForm from "@/components/devsection/Incidentform"
import { useTranslation } from 'next-i18next';
import { useEffect, useState , useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head"
import emailjs from '@emailjs/browser';


export const metadata = {
    title: 'Annual report',
}

export default function About({ initialData, pageTitle, pageDescription, }) {
    const { t, i18n } = useTranslation('common');
    const [data, setData] = useState(initialData);
    

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
                const data = await response.json();
                const fetchedData = data.filter(item => item.page === 'incident');
                setData(fetchedData);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        }

        loadData();
    }, [i18n.language]);

    const localizedData = data?.map(item => {
        const localizedIcondata = {};
        Object.keys(item).forEach(key => {
            if (key.startsWith('icondata')) {
                localizedIcondata[key] = {
                    ...item[key],
                    title: item[key][`title_${i18n.language}`] || item[key].title_en,
                    number: item[key][`number_${i18n.language}`] || item[key].number_en,
                };
            }
        });
        const localizedPointsEn = {};
        const localizedPointsAr = {};
        if (item.points_en) {
            Object.keys(item.points_en).forEach(pointKey => {
                localizedPointsEn[pointKey] = item.points_en[pointKey];
            });
        }
        if (item.points_ar) {
            Object.keys(item.points_ar).forEach(pointKey => {
                localizedPointsAr[pointKey] = item.points_ar[pointKey];
            });
        }
        return {
            ...item,
            title: item[`title_${i18n.language}`] || item.title_en,
            subtitle: item[`subtitle_${i18n.language}`] || item.subtitle_en,
            description: item[`description_${i18n.language}`] || item.description_en,
            sidebarSubtitle: item[`sidebarSubtitle_${i18n.language}`] || item.sidebarSubtitle_en,
            sidebarNumber: item[`sidebarNumber_${i18n.language}`] || item.sidebarNumber_en,
            buttonTitle: item[`buttonTitle_${i18n.language}`] || item.buttonTitle_en,
            localizedIcondata,
            points: i18n.language === 'ar' ? localizedPointsAr : localizedPointsEn,
            buttonLink: item.buttonLink || "#"
        };
    });

    const getDataBySection = (section) => localizedData.filter(item => item.section === section && item.status);

    return (

        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>

            <Layout headerStyle={6} footerStyle={3} >
                <Banner1 data={getDataBySection('incident-banner')} />



                <div className="container project__area-three ">
                    <div className="row container ">
                        {getDataBySection('incident-heading')?.map((item) => (
                            <div className="col-xl-7 space-betweeni col-lg-8 ">

                                <div className="  dev_gover   " >
                                    <span className="">{item.subtitle}</span>
                                    <h2 className=" mt-4 text-wrap devtextwrapo" style={{ color: '#110B79' }}>{item.title}</h2>
                                </div>
                                <div className="dev_customsize  mt-0 mt-md-4" style={{ color: '#282739' }}>{item.description}</div>
                            </div>
                        ))}
                      <IncidentForm />
                     

                    </div>
                    </div>
                <Bannerfooter data={getDataBySection('incident-contact')} />
            </Layout>
        </>
    )
}
export async function getServerSideProps({ locale }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
    const data = await response.json();
    const fetchedData = data.filter(item => item.page === 'incident');
    const metadataResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pageMetadata/`);

    if (!response.ok || !metadataResponse.ok) {
        throw new Error('Failed to fetch data');
    }

    const metadata = await metadataResponse.json();

    const pageMetadata = metadata.find(page => page.page === 'incident') || {};

    const pageTitle = pageMetadata[`pageTitle_${locale}`] || pageMetadata.pageTitle_en || 'Default Title';
    const pageDescription = pageMetadata[`pageDescription_${locale}`] || pageMetadata.pageDescription_en || 'Default description';

    return {
        props: {
            initialData: fetchedData,
            pageTitle,
            pageDescription,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}