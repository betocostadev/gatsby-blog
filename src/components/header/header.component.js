import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from '../navbar/navbar.component'
import Scroll from "../../images/icons/icons8-scroll.svg";
import { Head, HeadContainer } from './header.styles'

const Header = ({ siteTitle }) => (
  <Head>
    <HeadContainer>
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
            window.outerWidth >= 560
            ? <span style={{ margin: `0 0 0 1rem`}}>{siteTitle}</span>
            : ''
          }
        </Link>
      </h1>
      <Navbar />
    </HeadContainer>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
