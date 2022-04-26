import React from "react"
import { withTrans } from '../i18n/withTrans'

const Layout = ({ children, t }) => {

  return (
      <div className="layout">
          {children}
        <div className="test">{t(`site.footer`)}</div>
      </div>
  )
}

export default withTrans(Layout)