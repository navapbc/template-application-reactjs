import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Footer from './components/Footer'
import Header from './components/Header'
import Seo from './components/Seo'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="ds-base">
          <Seo />
          <Header />
          <main id="main" className='ds-l-container ds-u-padding--0 ds-u-padding-bottom--4 minh-viewport'>
              <div className='ds-l-row'></div>
              <h2 className='ds-text-heading--3xl'>
               Welcome to your&nbsp;
               <a className='ds-c-link' href="https://github.com/navapbc/template-application-reactjs">Reactjs & Typescript Template!</a>
              </h2>
              <ul className='ds-c-list--bare'>
                <li>
                  <a
                    className="ds-c-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </li>
                <li>
                  <a
                    className="ds-c-link"
                    href="https://www.typescriptlang.org/docs/handbook/intro.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn Typescript
                  </a>
                </li>
                <li>
                  <a
                    className="ds-c-link"
                    href="https://design.cms.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn CMS Design System
                  </a>
                </li>
              </ul>

          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
