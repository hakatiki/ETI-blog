import * as React from "react"
import { Link } from "gatsby"

const LayoutArticle = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading"
      style={{
        marginTop:"2.5rem"
      }}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header-article article-header-top-padding">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default LayoutArticle
