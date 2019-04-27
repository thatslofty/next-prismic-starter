import React from 'react'
import Hero from 'components/hero'
import ServicesTraining from 'components/services-training'
import ServicesCopy from 'components/services-copy'
import ServicesImages from 'components/services-images'

const ServicesPage = () => (
  <div className="ServicesPage">
    <Hero title="Services" />
    <ServicesTraining />
    <ServicesCopy />
    <ServicesImages />
  </div>
)

export default ServicesPage
