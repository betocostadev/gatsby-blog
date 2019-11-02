import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Scroll from "../images/icons/icons8-scroll.svg";
// <Scroll width="100" height="100" />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#b3e5fc`,
      marginBottom: `1.45rem`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Scroll style={{ verticalAlign: `middle`}} />
          {
            window.outerWidth >= 500
            ? <span style={{ margin: `0 0 0 1rem`}}>{siteTitle}</span>
            : ''
          }
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
