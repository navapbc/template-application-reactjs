import React from 'react'

function Footer() {
  return (
    <footer className="ds-u-padding--3 ds-u-sm-padding--6 ds-u-fill--primary-darkest">
      <div className="ds-l-container">
        <div className="ds-l-row ds-u-align-items--center ds-u-justify-content--between">
          <div className="ds-l-col ds-l-col--12 ds-l-sm-col--6">
            <p className="ds-text--lead ds-u-color--white ds-text-heading--lg">
              Sample Footer
            </p>
          </div>
          <div className="ds-l-col ds-l-col--12 ds-l-sm-col--6">
            <p className="ds-text--lead">
              <a
                className="ds-u-color--white ds-u-font-size--small"
                href="mailto:hello@navapbc.com?subject=Mail from template app reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
              <span className="ds-u-color--white ds-u-font-size--small ds-u-margin--0">
                &nbsp;&middot;&nbsp;
              </span>
              <a
                className="ds-u-color--white ds-u-font-size--small"
                href="https://www.navapbc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Base
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
