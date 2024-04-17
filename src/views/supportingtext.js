import React from 'react'

import { Helmet } from 'react-helmet'

import './supportingtext.css'

const Supportingtext = (props) => {
  return (
    <div className="supportingtext-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="supportingtext-dummy-container">
        <span className="supportingtext-text TextmdNormal">
          <span>
            Dive into the captivating world of Tiffany Pollard, affectionately
            known as &quot;New York,&quot; and explore her journey from reality
            TV contestant to pop culture icon...
          </span>
        </span>
      </div>
    </div>
  )
}

export default Supportingtext
