import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const FooterColumn = ({ header, rows }) => {
  const styles = "font-light hover:underline"

  return (
    <div className="flex flex-col items-start font-elegant">
      <h4 className="text-xl">{header}</h4>
      {rows.map(row => {
        const [title, url, isExternalLink, callback] = row

        if (typeof callback === "function") {
          return (
            <button
              key={title}
              className={styles}
              onClick={callback}
            >
              {title}
            </button>
          )
        }

        if (url === undefined) {
          return (
            <p
              key={title}
              className={styles}
            >
              {title}
            </p>
          )
        }
          

        if (isExternalLink) {
          return (
            <a
              key={title}
              className={styles}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          )
        }

        return (
          <Link
            key={title}
            className={styles}
            to={url}
          >
            {title}
          </Link>
        )
      })}
    </div>
  )
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          adviserPhone
          adviserUrl
        }
      }
    }
  `)

  return (
    <footer className="bg-primary text-white w-full flex flex-col py-12 px-5 lg:px-40 shadow-[8px_0_35px_rgba(0,0,0,0.5)]">
      <div className="leading-10 flex max-md:flex-wrap gap-10 justify-stretch sm:justify-around">
        <FooterColumn
          header={"Información"}
          rows={[
            ["Sitio oficial", "https://www.onvacation.com/", true],
            ["Términos y condiciones", "https://www.onvacation.com/terminos-y-condiciones", true],
            ["Quiénes somos", "https://www.onvacation.com/mas/sobre-nosotros", true],
          ]}
        />
        <FooterColumn
          header={"Viajes"}
          rows={[
            [
              "Promociones y ofertas",
              undefined,
              false,
              () => {
                document.getElementById("offers-btn").click()
              },
            ],
            ["Destinos", "/destinations", true],
            [
              "Mis reservas",
              "https://mireserva.onvacation.com/?&_ga=2.145977456.533117929.1721233783-880232582.1720800926#/login",
              true
            ],
          ]}
        />
        <FooterColumn
          header={"Contáctanos"}
          rows={[
            [`Teléfono de ventas: ${data.site.siteMetadata.adviserPhone}`, data.site.siteMetadata.adviserUrl, true],
            ["Email: atencionalcliente@onvacation.com"],
            ["Teléfono en Bogotá: (601) 384 8560)"],
          ]}
        />
      </div>
      <h3 className="text-center mt-6 font-hand text-xl">
        {new Date().getFullYear()} &copy; On Vacation & Sandra Piñeres
      </h3>
    </footer>
  )
}

export default Footer
