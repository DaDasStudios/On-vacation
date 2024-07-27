import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { MapPin, PlaneTakeoff, Play } from "lucide-react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Markdown from "../../components/markdown"
import { markdownDescription } from "../../styles/destination.module.css"
import Breadcrumb from "../../components/breadcrumb"

const HotelsCarousel = ({ hotels }) => {
  const [slide, setSlide] = React.useState(0)
  const totalCount = hotels.length

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
      {hotels.map((hotel, index) => (
        <div
          key={hotel.coverImage.id}
          className={`${index === slide ? "block" : "hidden"} relative group`}
        >
          <h3 className="font-hand text-3xl sm:text-4xl md:text-6xl font-semibold w-full text-center absolute -bottom-[90px] sm:top-10 text-brown sm:text-white drop-shadow-lg z-20 h-fit">
            {hotel.name}
          </h3>

          <div className="absolute inset-0 bg-black/30 group-hover:opacity-100 opacity-0 transition-opacity z-10 flex justify-between items-center sm:px-10 px-4">
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

            <Link
              className="bg-white shadow-lg font-elegant text-xl sm:text-2xl md:text-3xl font-semibold px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded transition-transform hover:scale-105"
              to={`/destinations/hotels/${hotel.slug}`}
            >
              Ver hotel
            </Link>

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
            alt={hotel.coverImage.title}
            className="rounded shadow-lg max-h-[700px]"
            image={getImage(hotel.coverImage.gatsbyImageData)}
          />
        </div>
      ))}

      <ul className="flex justify-center gap-x-2 mt-6">
        {hotels.map((hotel, index) => (
          <li key={hotel.id}>
            <button
              aria-label={`ir a la imagen ${index + 1}`}
              onClick={() => gotoSlide(index)}
              type="button"
              key={hotel.id}
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

const DestinationPage = ({ data }) => {
  const { contentfulDestination: destination } = data

  return (
    <Layout>
      <div className="bg-bone w-full h-full py-32 text-brown max-md:px-4">
        <div className="container mx-auto flex flex-col gap-10">
          <Breadcrumb
            paths={[
              { name: "Destinos", url: "/destinations" },
              { name: destination.place, url: `/destinations/${destination.slug}` },
            ]}
          />
          <h1 className="flex max-sm:flex-wrap items-center justify-start font-bold max-md:text-5xl text-6xl font-elegant text-left gap-y-2 gap-x-4">
            {destination.place}
            <div className="bg-hot p-2 text-white text-center rounded text-xl font-medium">
              {destination.national ? <MapPin className="inline mr-1" /> : <PlaneTakeoff className="inline mr-1" />}
              {destination.national ? "Nacional" : "Internacional"}
            </div>
          </h1>
          <GatsbyImage
            class="rounded shadow-lg"
            alt={destination.image.title}
            image={getImage(destination.image.gatsbyImageData)}
          />
          <div className={markdownDescription + " leading-8"}>
            <Markdown markdown={destination.description.description} />
          </div>
          <h2 className="font-bold text-5xl font-elegant text-left">Hoteles</h2>
          <div className="flex flex-wrap gap-4">
            <HotelsCarousel hotels={destination.hotels} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  return (
    <Seo
      title={data.contentfulDestination.place}
      image={data.contentfulDestination.image.publicUrl}
    />
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    contentfulDestination(id: { eq: $id }) {
      id
      place
      national
      slug
      description {
        description
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        title
        publicUrl
      }
      hotels {
        name
        slug
        id
        coverImage {
          id
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          title
          publicUrl
        }
      }
    }
  }
`

export default DestinationPage
