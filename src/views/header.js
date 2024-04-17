import React from 'react'

import { Helmet } from 'react-helmet'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="header-header">
        <div className="header-navbar">
          <span className="header-text">
            <span>Ivonne Lopez and Wolfgang Pendergrass</span>
          </span>
          <div className="header-menu">
            <div className="header-blog">
              <span className="header-text02">
                <span>Blog</span>
              </span>
            </div>
            <div className="header-about">
              <span className="header-text04">
                <span>About</span>
              </span>
            </div>
            <div className="header-newsletter">
              <span className="header-text06">
                <span>Newsletter</span>
              </span>
            </div>
            <div className="header-toggle-mode">
              <div className="header-iconoutlinesun">
                <div className="header-sun">
                  <img
                    alt="Vector5442"
                    src="/external/vector5442-dbrq.svg"
                    className="header-vector"
                  />
                  <img
                    alt="Vector5442"
                    src="/external/vector5442-no36.svg"
                    className="header-vector1"
                  />
                </div>
              </div>
              <div className="header-iconoutlinemoon">
                <div className="header-moon"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-container1">
          <span className="header-text08">
            <span> THE REAL TALK</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
