import { graphql, useStaticQuery } from "gatsby"
import favicon from "../assets/favicon.ico"
import * as React from "react"

const Seo = ({ title, description, image }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      file ( name: { eq: "on-vacation-logo"} ) {
        relativePath
        publicURL
        id
        name
      }
    }  
  `)


  return (
    <>
      {/** ESENTIAL */}
      <title>On vacation - {title || data.site.siteMetadata.title}</title>
      <link
        rel="shortcut icon"
        href={favicon}
        type="image/x-icon"
      />

      {/** OPEN GRAPH */}
      <meta
        property="og:title"
        content={`On Vacation - ${title}` || data.site.siteMetadata.title}
      />
      <meta
        property="og:locale"
        content="es_ES"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="On Vacation by Sandra"
      />
      <meta
        property="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta
        property="og:url"
        content={data.site.siteMetadata.siteUrl}
      />
      <meta
        property="og:image"
        content={image || data.file.publicURL}
      />
      <meta
        property="og:image:type"
        content="image/png"
      />

      {/** TWITTER */}
      <meta
        property="twitter:title"
        content={`On Vacation - ${title}` || data.site.siteMetadata.title}
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:image"
        content={image || data.file.publicURL}
      />
      <meta
        property="twitter:description"
        content={description || data.site.siteMetadata.description}
      />
    </>
  )
}
export default Seo