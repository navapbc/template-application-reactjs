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
          <div className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
