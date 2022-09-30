import * as React from "react"
import { Link } from "gatsby"

const PageTitle = ({ bradcrumb, title }) => (
  <>
    {/* <!-- Page Title --> */}
    <section className="page-title">
      <div className="auto-container">
        <ul className="page-breadcrumb">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>{title}</li>
        </ul>
        <h2> {title}</h2>
      </div>
    </section>
    {/* <!-- End Page Title --> */}
  </>
)

export default PageTitle
