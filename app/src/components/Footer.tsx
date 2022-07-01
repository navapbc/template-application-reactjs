import React from 'react'

function Footer() {
  return (
    <footer className="ds-u-padding--1 ds-u-sm-padding--4 ds-u-fill--primary-darkest">
      <div className='ds-l-col--8 ds-u-margin-left--auto ds-u-margin-right--auto'>
        <div className="ds-l-row ds-u-align-items--center ds-u-justify-content--between">
            <p className="ds-u-color--white ds-u-font-size--2xl">
              Sample Footer
            </p>
          <p>
              <a
                className="ds-c-link--inverse ds-u-font-size--medium"
                href="mailto:hello@navapbc.com?subject=Mail from template app reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
              <span className="ds-u-color--white ds-u-font-size--medium ds-u-margin--0">
                &nbsp;&middot;&nbsp;
              </span>
              <a
                className="ds-c-link--inverse ds-u-font-size--medium"
                href="https://www.navapbc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Base
              </a>
          </p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
