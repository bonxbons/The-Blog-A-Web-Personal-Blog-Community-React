import React from 'react'

import { Helmet } from 'react-helmet'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="footer-footer">
        <div className="footer-container1">
          <span className="footer-text">
            <span>© 2024</span>
          </span>
          <div className="footer-menu">
            <span className="footer-text2">
              <span>
                Twitter
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="footer-text4">
              <span>Discord</span>
            </span>
            <span className="footer-text6">
              <span>Email</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
