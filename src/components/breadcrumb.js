import { Link } from "gatsby"
import { ChevronRight } from "lucide-react"
import * as React from "react"

const BreadcrumbLink = ({ url, content }) => {
  return (
    <Link
      className="hover:underline"
      to={url}
    >
      {content}
    </Link>
  )
}

const Breadcrumb = ({ paths }) => {
  return (
    <div className="text-2xl font-elegant text-brown">
      <ul
        aria-roledescription="breadcrumb"
        className="flex flex-wrap items-center gap-2"
      >
        <li>
          <BreadcrumbLink
            url="/"
            content="Inicio"
          />
        </li>
        {paths.map((path, index) => {
          return (
            <li
              className={`${index === paths.length - 1 && "italic"} contents`}
              key={index}
            >
              <ChevronRight />
              <BreadcrumbLink
                url={path.url}
                content={path.name}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
