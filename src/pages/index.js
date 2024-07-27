import * as React from "react"
import { Link, graphql } from "gatsby"
import { Star } from "lucide-react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import landingPageVideo from "../assets/pexels-landing-page.mp4"
import { landingPageContainer } from '../styles/generics.module.css'

const IndexPage = ({ data }) => {
  return (
    <Layout useOverlay={true}>
      <video
        autoPlay
        muted
        loop
        className="pointer-events-none overflow-hidden absolute xl:min-w-full min-w-[1280px] -z-10 inset-0"
      >
        <source
          src={landingPageVideo}
          type="video/mp4"
        />
      </video>
      <section className="bg-bone mt-[300px] md:mt-[600px] py-32 text-brown">
        <div className={landingPageContainer}>
          <div className="flex max-md:flex-wrap items-center justify-center gap-12 ">
            <div className="flex flex-col gap-6 items-center md:items-start">
              <h2 className="font-elegant max-sm:text-5xl text-6xl font-bold text-center md:text-left">
                Viaja a la Guajira
              </h2>
              <p className="text-xl tracking-wide leading-9 max-md:text-center">
                Descubre la magia de este oasis desde <span className="font-bold">$160.000</span> por noche por persona
                con desayuno, almuerzo y cena incluidos.
              </p>
              <div className="text-xl font-semibold text-secondary">
                <div className="flex items-center max-md:justify-center">
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                </div>
                <p>Hoteles de alta calidad</p>
              </div>
              <Link
                to="/destinations/guajira"
                className="bg-primary text-xl px-10 py-4 rounded text-white font-semibold text-center font-elegant transition-colors hover:bg-primary-light"
              >
                Averiguar
              </Link>
            </div>
            <StaticImage
              src="../images/guajira1.jpg"
              alt="Guajira imagen"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="flex max-md:justify-center max-md:flex-wrap gap-12 mt-12">
            <StaticImage
              class="self-center"
              src="../images/guajira3.png"
              alt="Flamencos de la guajira"
              placeholder="blurred"
              layout="constrained"
            />
            <StaticImage
              src="../images/guajira2.jpg"
              alt="Playa de arena roja"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <StaticImage
            class="mt-12"
            src="../images/guajira4.png"
            alt="Amacas frenet a la playa"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </section>
      <section className="bg-secondary text-white py-32">
        <div className={landingPageContainer}>
          <div className="flex flex-col text-center">
            <h2 className="font-semibold font-elegant max-sm:text-5xl text-6xl mb-8">Conoce el Amazonas</h2>
            <p className="text-xl tracking-wide leading-9">
              Prepárate para una aventura llena de emociones en la selva más grande de América Latina
            </p>
            <StaticImage
              class="mt-12"
              src="../images/amazonas1.png"
              alt="Río Amazonas"
              placeholder="blurred"
            />
          </div>
          <div className="flex max-md:flex-wrap justify-center gap-12">
            <StaticImage
              class="mt-12"
              src="../images/amazonas3.png"
              alt="Indigenas en canoa"
              placeholder="blurred"
            />
            <div className="flex flex-col gap-5 justify-center">
              <h2 className="font-elegant max-md:text-center text-right text-5xl mb-4">El pulmón del mundo</h2>
              <h3 className="font-hand text-4xl max-md:text-center text-left text-secondary-light ">
                ¡Desde $170.000!
              </h3>
              <p className="leading-9 max-md:text-center text-xl tracking-wide">
                Por noche por persona con desayuno, almuerzo y cena incluidos.
              </p>
              <Link
                to="/destinations/amazonas"
                className="bg-secondary-light/50 text-white font-medium font-elegant text-center px-8 py-4 rounded hover:bg-secondary-light transition-colors text-xl max-md:w-fit max-md:self-center"
              >
                Me interesa
              </Link>
            </div>
          </div>
          <div className="flex max-md:flex-wrap gap-12 justify-center items-center mt-10">
            <StaticImage
              src="../images/amazonas5.jpg"
              alt="Chozas de una tribu"
              placeholder="blurred"
            />
            <StaticImage
              src="../images/amazonas4.jpg"
              alt="Cascada en el Amazonas"
              placeholder="blurred"
            />
          </div>
        </div>
      </section>
      <section className="bg-bone py-32 text-brown">
        <div className={landingPageContainer}>
          <div className="flex max-md:flex-wrap items-center justify-center gap-12 ">
            <div className="flex flex-col gap-6 max-md:items-center items-start">
              <h2 className="font-elegant max-md:text-center max-md:text-5xl text-6xl font-bold">
                Descubre San Andrés
              </h2>
              <p className="text-xl max-md:text-center tracking-wide leading-9">
                Ida y vuelta y hospedaje en el hotel <span className=" font-bold">Caribeean</span> desde{" "}
                <span className="font-bold">$188.000</span> con desayuno, almuerzo y cena incluidos.
              </p>
              <div className="text-xl font-semibold text-secondary">
                <div className="max-md:justify-center flex items-center">
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="mr-1"
                    fill="currentColor"
                  />
                </div>
                <p>Hoteles de alta calidad</p>
              </div>
              <Link
                to="/destinations/san-andres"
                className="bg-primary text-xl px-10 py-4 rounded text-white font-semibold text-center font-elegant transition-colors hover:bg-primary-light relative group"
              >
                Saber más
                <div className="absolute top-0 right-0 rounded-md px-2 py-1 font-normal translate-x-7 -translate-y-4 group-hover:animate-gradient bg-gradient-size bg-hot">
                  ¡Hot!
                </div>
              </Link>
            </div>
            <StaticImage
              src="../images/san-andres1.png"
              alt="Playa de San Andrés"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="flex justify-center">
            <StaticImage
              class="mt-12"
              src="../images/san-andres2.webp"
              alt="Vista aerea de la isla de San Andrés"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="font-elegant my-[100px] text-center flex flex-col gap-12">
            <h3 className="font-bold text-4xl sm:text-5xl text-brown">El mar de los siete colores</h3>
            <blockquote className="leading-10 sm:leading-[50px] tracking-wider text-2xl sm:text-3xl md:text-4xl font-medium px-[5%] text-brown/85">
              <span className="text-secondary">"</span>En San Andrés, las aguas turquesas, arenas blancas y la cálida
              brisa caribeña crean un paraíso perfecto para perderse y encontrar la verdadera esencia de la tranquilidad
              tropical<span className="text-secondary">"</span>
            </blockquote>
          </div>
          <div className="flex max-md:flex-wrap gap-12 justify-center items-center mt-10">
            <StaticImage
              src="../images/san-andres3.jpg"
              alt="Chozas de una tribu"
              placeholder="blurred"
            />
            <StaticImage
              src="../images/san-andres4.jpg"
              alt="Cascada en el Amazonas"
              placeholder="blurred"
            />
          </div>
          <div className="gap-12 mt-16 flex flex-col items-center">
            <h2 className="text-brown font-bold max-sm:text-4xl text-5xl text-center">¿Buscas otro sitio?</h2>
            <p className="text-brown text-xl text-center tracking-wide">
              Encuentra planes personalizados para la cantidad de personas que requieras, en el hotel que quieras, en el
              lugar que quieras, a la hora que quieras.
            </p>
            <Link
              className="px-8 py-4 rounded text-white bg-primary hover:bg-primary-light transition-colors text-2xl font-medium font-elegant"
              to="/destinations"
            >
              Destinos
            </Link>
            <p className="text-brown font-semibold text-2xl text-center tracking-wide">Ó mejor</p>
            <a
              className="px-8 py-4 rounded text-white bg-secondary hover:bg-secondary-light transition-colors text-2xl font-medium font-elegant"
              href={data.site.siteMetadata.adviserUrl}
            >
              Hablar con asesor
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        adviserUrl
      }
    }
  }
`

export const Head = () => <Seo title="Inicio" />
