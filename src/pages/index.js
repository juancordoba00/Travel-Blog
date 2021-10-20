import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Seo from "../components/seo"

import Featured from "../components/featured"
import Home from "../components/home"
import Footer from "../components/footer"

import './index.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className="viewmore">View More</Link>
    <Footer />
  </Layout>
)

export default IndexPage
