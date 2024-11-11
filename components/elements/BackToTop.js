import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState("false")

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    return (
        <>

          

{/* 
            {hasScrolled && (
                <a className="scroll__top scroll-to-target open" href="#top" style={{ position: 'fixed', zIndex: 2147483647 }}>
                    <i className="fas fa-angle-up"></i>
                </a>
            )}
        */}
         <a href="https://api.whatsapp.com/send?phone=7592831937&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" style={{ textDecoration: 'none', color: 'inherit' }}  target="_blank">
                {/* <i class="fa fa-whatsapp my-float"></i> */}

                <i className="fab fa-whatsapp my-float "/>
            </a>
       
       
        </>
    )
}