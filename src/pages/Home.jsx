import React from 'react'
import ExpertConsult from '../assets/images/expert-consultation.jpg'
import Retrofit from '../assets/images/retrofit-solutions.jpg'
import Solar from '../assets/images/solar-applications.png'
import StateArt from '../assets/images/state-art-facility.jpg'



import Banner from '../components/Banner'
import ServiceDescription from '../components/ServiceDescription'
import ThemeButton from '../components/ThemeButton'
import ServiceBox from '../components/ServiceBox'


const Home = () => {
  return (
    <div>
      <Banner/>
      <section className="container-fluid mainContent service">
  <div className="row">
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 service-box">
      <div className="reverse-list">
      <div className="theme-style wow fadeInUp image-animate" data-paroller-factor="0.2"
          data-paroller-type="foreground" data-paroller-direction="vertical" data-paroller-transition="transform .1s linear" data-wow-duration="500ms" data-wow-delay="500ms">
       <ServiceDescription subtitle='Our Services' title='Bringing <span>Light</span> to Your Spaces'/>
       <ThemeButton/>
       </div>


        <div className="service-list  wow fadeInUp">
          <ServiceBox backgroundImage1 ={ExpertConsult} title='Expert <span>Consultation</span>'/>
        </div>
      </div>
      <div className="service-list  wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
        <ServiceBox backgroundImage1 ={Retrofit} title='Retrofit <span>Solutions</span>'/>
      </div>

    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 service-box right">
      <div className="service-list wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
        <ServiceBox backgroundImage1 ={StateArt} title='State-of-the-Art <span>Facility</span>'/>
      </div>
      <div className="service-list last wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
       <ServiceBox backgroundImage1 ={Solar} title='Solar <span>Applications</span>'/>
      </div>
    </div>
    <div className="theme-btn mobile">
      <a href="sustainability.html" className="button gradient-border">
        <span>View All Services</span>
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home
