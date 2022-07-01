import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@cmsgov/design-system'
import { ReactComponent as Logo } from '../images/logo.svg'

function Header() {
  return (
    <header className="ds-u-fill--primary-darkest ds-u-padding--3 ds-u-sm-padding--6 ds-u-md-display--flex ds-u-justify-content--between ds-u-align-items--center">
      <h1 className="ds-u-margin--0 ds-u-font-size--display ds-u-text-align--left">
        <Link className="ds-u-text-decoration--none ds-u-color--white" to="/">
          Template App
        </Link>
      </h1>
      <div className="ds-u-text-align--right">
        <Badge variation="info">
          <Logo className="c-usa-banner__header-flag" title="logo" />
          &nbsp;React & Typescript
        </Badge>
      </div>
    </header>
  )
}

export default Header
