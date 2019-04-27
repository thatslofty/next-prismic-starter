import React from 'react'
import Hero from 'components/hero'
import AboutHistory from 'components/about-history'
import AboutTeam from 'components/about-team'
import AboutCopyBlock from 'components/about-copy-block'
import AboutEnvironment from 'components/about-environment'

import { history, team } from /* preval */ 'context/data'

const AboutPage = () => (
  <div className="AboutPage">
    <Hero title="About Us" orientLeft />
    <AboutHistory history={history} />
    <AboutTeam people={team} />
    <AboutCopyBlock />
    <AboutEnvironment />
  </div>
)

export default AboutPage
