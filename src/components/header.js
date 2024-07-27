import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { navBtn, navBtnOverlay } from "../styles/header.module.css"
import Carousel from "./carousel"
import { X, ArrowRight } from "lucide-react"

const NavButton = ({useOverlay, url, content}) => {
  return (
    <Link
      className={useOverlay ? navBtnOverlay : navBtn}
      to={url}
    >
      {content}
    </Link>
  )
}

const Header = ({ useOverlay }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOffer {
        nodes {
          id
          name
          image {
            url
            publicUrl
            gatsbyImageData
          }
        }
        totalCount
      }
      site {
        siteMetadata {
          adviserUrl
        }
      }
    }
  `)
  const [showModal, setShowModal] = React.useState(false)
  const offers = data.allContentfulOffer.nodes

  return (
    <>
      {/* Modal de las ofertas */}
      <div
        className={`${
          showModal ? "left-0" : "-left-full"
        } inset-0 bg-brown/50 block transition-all duration-1000 fixed z-20 w-full`}
      >
        <button
          onClick={() => setShowModal(false)}
          className="text-black cursor-pointer transition-transform shadow-lg duration-500 hover:scale-110 right-4 top-4 absolute bg-bone rounded-full p-2 z-20 max-sm:p-1"
        >
          <X />
        </button>
        <Carousel
          nodes={offers}
          imageAlt="name"
          imageAlias="image"
        />
      </div>

      {/* Header */}
      <header
        className={`${
          useOverlay
            ? "bg-black/50 relative after:absolute after:bg-gradient-to-b after:from-black/50 after:to-50% after:h-[70px] after:z-10 after:bottom-[-70px] after:w-full"
            : "bg-bone"
        }`}
      >
        <div className="px-4 max-sm:py-6 md:px-12 lg:px-36 xl:px-56 mx-auto flex justify-center max-sm:flex-wrap items-center gap-10">
          <Link className="max-sm:hidden" to="/">
            <StaticImage
              src="../images/on-vacation-logo.png"
              alt="On vacation logo"
              width={120}
              layout="fixed"
              placeholder="none"
            ></StaticImage>
          </Link>
          <nav
            className={`mx-auto contents sm:flex flex-wrap items-center justify-center gap-16 text-3xl font-hand ${
              useOverlay ? "text-white" : "text-brown"
            }`}
          >
            <NavButton
              useOverlay={useOverlay}
              url="/destinations"
              content="Destinos"
            />
            <button
              onClick={() => setShowModal(true)}
              className={useOverlay ? navBtnOverlay : navBtn}
              id="offers-btn"
            >
              Ofertas
            </button>
          </nav>
          <a
            rel="noreferrer"
            target="_blank"
            className={`${
              useOverlay ? "bg-primary/70 hover:bg-primary-light/70" : "bg-primary hover:bg-primary-light"
            }  text-white font-medium text-xl tracking-wide px-8 py-2 rounded inline-flex items-center justify-center font-elegant transition-colors cursor-pointer`}
            href={data.site.siteMetadata.adviserUrl}
          >
            Contactar <ArrowRight />
          </a>
        </div>
      </header>
    </>
  )
}
export default Header
