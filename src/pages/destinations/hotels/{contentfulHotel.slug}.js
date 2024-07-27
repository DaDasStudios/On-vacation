import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Breadcrumb from "../../../components/breadcrumb"
import { graphql } from "gatsby"
import { Play, FileText, Pencil, CircleHelp } from "lucide-react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Markdown from "../../../components/markdown"
import { markdownDescription } from "../../../styles/destination.module.css"

const ImagesCarousel = ({ images }) => {
  const [slide, setSlide] = React.useState(0)
  const totalCount = images.length

  function nextSlide() {
    if (slide < totalCount - 1) {
      setSlide(slide + 1)
    }
  }

  function prevSlide() {
    if (slide > 0) {
      setSlide(slide - 1)
    }
  }

  function gotoSlide(index) {
    setSlide(index)
  }

  return (
    <div className="w-full">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`${index === slide ? "block" : "hidden"} relative group`}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:opacity-100 opacity-0 transition-opacity z-10 flex justify-between items-center px-4 sm:px-10">
            <button
              className="rounded-full p-3 text-white bg-transparent hover:bg-white hover:text-brown transition-colors"
              onClick={prevSlide}
              aria-label="imagen anterior"
            >
              <Play
                size={30}
                className="rotate-180"
                fill="currentColor"
              />
            </button>

            <button
              className="rounded-full p-3 text-white bg-transparent hover:bg-white hover:text-brown transition-colors"
              onClick={nextSlide}
              aria-label="siguiente imagen"
            >
              <Play
                size={30}
                fill="currentColor"
              />
            </button>
          </div>

          <GatsbyImage
            alt={image.title}
            className="rounded shadow-lg max-h-[700px]"
            image={getImage(image.gatsbyImageData)}
          />
        </div>
      ))}

      <ul className="flex justify-center gap-x-2 mt-6">
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              aria-label={`ir a la imagen ${index + 1}`}
              onClick={() => gotoSlide(index)}
              type="button"
              key={image.id}
              className={`${
                index === slide ? "bg-secondary" : "bg-secondary/50"
              } block cursor-pointer rounded-full drop-shadow-md w-3 h-3`}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const HotelPage = ({ data }) => {
  const hotel = data.contentfulHotel
  const ownerDestination = hotel.destination.find(dest => dest.hotels.some(h => h.id === hotel.id))

  return (
    <Layout>
      <div className="bg-bone w-full h-full py-32 text-brown max-md:px-4">
        <div className="container mx-auto flex flex-col gap-10">
          <Breadcrumb
            paths={[
              { name: "Destinos", url: "/destinations" },
              { name: ownerDestination.place, url: `/destinations/${ownerDestination.slug}` },
              { name: hotel.name, url: `/destinations/hotels/${hotel.slug}` },
            ]}
          />
          <h1 className="font-bold max-md:text-5xl text-6xl font-elegant text-left">{hotel.name}</h1>
          <ImagesCarousel images={[hotel.coverImage, hotel.hotelImage]} />
          <ul
            className="flex flex-wrap gap-8 justify-center"
            aria-label="serivicios"
          >
            {hotel.services.map((service, index) => (
              <li
                className="select-none font-elegant text-xl sm:text-2xl rounded-md bg-primary/75 text-white text-center px-8 py-4 md:px-12 md:py-6 shadow-lg"
                key={index}
              >
                {service}
              </li>
            ))}
          </ul>
          <div className={markdownDescription + " leading-8"}>
            <Markdown markdown={hotel.description.description} />
          </div>
          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center bg-gradient-size bg-hot animate-gradient hover:scale-105 transition-all text-white font-elegant text-xl sm:text-2xl rounded-md shadow-lg px-8 py-4 md:px-12 md:py-6"
              href={data.site.siteMetadata.adviserUrl}
            >
              <Pencil />
              ¡Reservar!
            </a>
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl font-elegant text-center md:text-left">Más información</h2>
          <div className="flex max-sm:flex-wrap gap-8 justify-center">
            {hotel.datasheet && (
              <a
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center bg-secondary hover:bg-secondary-light transition-colors text-white font-elegant text-xl sm:text-2xl rounded-md shadow-lg px-8 py-4 md:px-12 md:py-6"
                href={hotel.datasheet.publicUrl}
              >
                <FileText />
                Ficha técnica
              </a>
            )}
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center bg-secondary hover:bg-secondary-light transition-colors text-white font-elegant text-xl sm:text-2xl rounded-md shadow-lg px-8 py-4 md:px-12 md:py-6"
              href="https://www.onvacation.com/preguntas-frecuentes"
            >
              <CircleHelp />
              Tengo una duda
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query hotelQuery($id: String) {
    contentfulHotel(id: { eq: $id }) {
      id
      name
      slug
      services
      datasheet {
        publicUrl
        title
      }
      description {
        description
      }
      hotelImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        title
        id
      }
      coverImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        title
        publicUrl
        id
      }
      destination {
        slug
        place
        hotels {
          id
        }
      }
    }
    site {
      siteMetadata {
        adviserUrl
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.name} image={data.coverImage.publicUrl}/>

export default HotelPage
