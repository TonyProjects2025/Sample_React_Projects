import React, { Fragment } from 'react'

const ServiceDescription = ({subtitle, title}) => {
  return (
    <Fragment>
          <h6 className="sub-head">{subtitle}</h6>
          <h2 className="head" dangerouslySetInnerHTML={{ __html: title }}></h2>
    </Fragment>
  )
}

export default ServiceDescription
