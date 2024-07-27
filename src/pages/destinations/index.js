import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link, graphql } from "gatsby"
import Breadcrumb from "../../components/breadcrumb"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Markdown from "../../components/markdown"
import "../../styles/scroll.css"


const DestinationCard = ({ destination }) => {
  
  return (
    <article className="rounded hover:-translate-y-2 transition-transform shadow-lg overflow-hidden flex flex-col text-brown max-h-[550px]">
      <Link
        title="Ver destino"
        className="contents"
        to={`/destinations/${destination.slug}`}
      >
        <GatsbyImage
          className="max-h-max object-cover"
          image={getImage(destination.image.gatsbyImageData)}
          alt={destination.image.title}
        />
      </Link>

      <div className="p-5 bg-white overflow-y-auto flex-grow basis-[50%] card-scroll">
        <h4 className="text-2xl mb-1 font-medium font-elegant">{destination.place}</h4>
        <Markdown markdown={destination.description.description} />
        <Link
          to={`/destinations/${destination.slug}`}
          className="bg-secondary hover:bg-secondary-light transition-colors cursor-pointer px-6 py-4 text-xl font-elegant text-white rounded mt-4 inline-block"
        >
          Saber más
        </Link>
      </div>
    </article>
  )
}

const DestinationsGrid = ({ destinations }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map(destination => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  )
}

const DestinationsIndex = ({ data }) => {
  const destinations = data.allContentfulDestination.nodes

  return (
    <Layout>
      <div className="bg-bone w-full h-full py-32">
        <div className="container mx-auto max-md:px-6">
          <Breadcrumb paths={[{ name: "Destinos", url: "/destinations" }]} />
          <div className="text-brown flex flex-col gap-4 mt-6">
            <h3 className="text-3xl tracking-wide font-elegant">Conoce todos los destinos que tenemos para ti</h3>
            <p className="leading-6">
              Viaja más por menos! Explora destinos increíbles con nuestros los paquetes turísticos de On Vacation.
              Disfruta de experiencias inolvidables sin comprometer tu presupuesto. Descubre la aventura sin límites a
              precios accesibles. ¡Tu próxima escapada está a solo un clic de distancia!
            </p>
            <h3 className="text-3xl tracking-wide font-elegant mt-4">Destinos nacionales</h3>
            <DestinationsGrid destinations={destinations.filter(d => d.national)} />
            <h3 className="text-3xl tracking-wide font-elegant mt-4">Destinos internacionales</h3>
            <DestinationsGrid destinations={destinations.filter(d => !d.national)} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulDestination(sort: { updatedAt: DESC }) {
      nodes {
        id
        slug
        national
        place
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 400, width: 600)
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Destinos" />

export default DestinationsIndex
