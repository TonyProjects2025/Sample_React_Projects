import React from 'react'
import BannerVideio from "../assets/images/banner-video.mp4"
import BannerVideioLight from "../assets/images/banner-video-light.mp4"

const Banner = () => {
return (
<section className="container-fluid banner">
    <video src={BannerVideio} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto' }} />
    <video src={BannerVideioLight} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto' }} className="light-version" />
    <div className="content mainContent">
        <h1 className="title">
            Discover the Perfect <span>Lighting</span> Solutions
        </h1>
        <div className="desicription">
            <p>Emirates Lighting Factory is producing high quality LED, decorative and solar light fittings..</p>
            <div className="theme-btn">
                <a href="about.html" className="button gradient-border">
                    <span>Explore More</span>
                </a>
            </div>
        </div>
    </div>
</section>

)
}

export default Banner