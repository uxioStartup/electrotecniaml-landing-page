import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const WhatsappBtn = ({ bradcrumb, title }) => (
  <>
    {/* <!-- Whatsapp Button --> */}
    <div
      className="llamada"
      style={{ position: "fixed", bottom: "10.5%", right: "1.5%", zIndex: 3 }}
    >
      <a
        className="call-boton boton-block boton-lg"
        id="whatsapp-flotante"
        style={{ float: "right" }}
        href="https://api.whatsapp.com/send?phone=5491167341752&text=Hola!%20vi%20el%20sitio%20web%20y%20quisiera%20m&aacute;s%20informaci&oacute;n%20sobre%20ML%20Electricidad"
        target="_blank"
        rel="norefferrer"
        role="button"
      >
        <StaticImage
          src="../images/icons/whatsapp.png"
          width={80}
          height={80}
          alt=""
        />
      </a>
    </div>
  </>
)

export default WhatsappBtn
