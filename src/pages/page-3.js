import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2/">Go to page 2</Link><br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
