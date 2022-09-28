import * as React from "react"

const PageTitle = ({ bradcrumb, title }) => (
  <>
    {/* <!-- Page Title --> */}
    <section className="page-title">
      <div className="auto-container">
        <ul className="page-breadcrumb">
          <li>
            <a href="/">Inicio</a>
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
