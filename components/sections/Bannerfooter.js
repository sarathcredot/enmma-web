import Link from 'next/link'

export default function Bannerfooter({data}) {

     console.log("banner data new",data)
    return (
        <>
        {data?.map((item) => (

            <section  key={item._id} className="request-area request-bg" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage})`,backgroundSize: 'cover',backgroundPosition: 'center',}}  data-background={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`}    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="request-content text-center">
                                        <h2 className="title">{item.title}</h2>
                                        <div className="content-bottom">
                                        <Link dir="ltr" href={item.buttonLink} className="btn">{item.buttonTitle}</Link>

                                            <div className="content-right">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    {/* <span>Toll Free Call</span> */}
                                                    {item.buttonLink ? (
                                                    <Link dir="ltr" href={`tel:${item.buttonLink}`}>{item.phone_number}</Link>) : (<></>)} 
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
                    ))}
        </>
    )
}
