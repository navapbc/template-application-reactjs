import React from 'react'
import { Badge } from '@cmsgov/design-system';
import { ReactComponent as Logo } from '../images/logo.svg'

function Header() {
  return (
      <header className="ds-u-padding--3 ds-u-sm-padding--6 ds-u-display--flex ds-u-justify-content--between ds-u-fill--primary-darkest">
        <h1 className="ds-u-margin--0 ds-u-color--white ds-u-font-size--display ds-u-text-align--left">
          Template App
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