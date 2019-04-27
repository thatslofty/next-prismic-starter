import React from 'react'
import Hero from 'components/hero'
import ContactInfo from 'components/contact-info'

import { Contact } from /* preval */ 'context/data'

const ContactPage = () => (
  <div className="ContactPage">
    <Hero title="Contact Us" orientLeft />
    <ContactInfo contact={Contact} />
  </div>
)

export default ContactPage
