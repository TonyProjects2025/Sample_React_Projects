import React from 'react'

const ServiceBox = ({backgroundImage1, title}) => {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <figure className="atropos my-atropos">
    <a href="sustainability.html">
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="jumbotron atropos-inner image-animate" data-paroller-factor="0.2" data-paroller-type="foreground" data-paroller-direction="vertical" data-paroller-transition="transform .1s linear" style={bannerStyle}>
            <div className="desicription" data-atropos-offset={2}>
              <h3 className="heading" dangerouslySetInnerHTML={{ __html: title }}></h3>
            </div>
          </div>
        </div>
      </div>
    </a>
  </figure>
  )
}

export default ServiceBox
