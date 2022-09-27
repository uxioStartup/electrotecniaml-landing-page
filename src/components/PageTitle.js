import * as React from "react"

const PageTitle = ({ bradcrumb, title }) => (
  <>
    {/* <!-- Page Title --> */}
    <section
      className="page-title"
      style={{ backgroundImage: "url(../wp-content/uploads/2022/05/7.jpg)" }}
    >
      <div className="auto-container">
        <ul className="page-breadcrumb">
          <li>
            <a href="../index.html">Inicio</a>
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
