import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { StepBack, StepForward } from "lucide-react"

const Carousel = ({ nodes, imageAlias, imageAlt }) => {
  const [slide, setSlide] = React.useState(0)
  const totalCount = nodes.length

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
    <div className="max-w-[1440px] h-full w-full m-auto py-16 px-5 flex items-center justify-center relative">
      {nodes.map((node, index) => {
        return (
          <div
            key={node.id}
            className={`${index === slide ? "block" : "hidden"} `}
          >
            <GatsbyImage
              placeholder="blurred"
              layout="constrained"
              alt={node[imageAlt]}
              className="object-cover rounded shadow-lg"
              image={getImage(node[imageAlias]["gatsbyImageData"])}
            />
          </div>
        )
      })}
      <button
        className="absolute left-4 rounded-full p-2 max-sm:p-1 bg-bone text-brown hover:text-primary shadow-lg transition-transform hover:scale-110 duration-500"
        onClick={prevSlide}
        aria-label="imagen anterior"
      >
        <StepBack />
      </button>
      <button
        className="absolute right-4 rounded-full p-2 max-sm:p-1 bg-bone text-brown hover:text-primary shadow-lg transition-transform hover:scale-110 duration-500"
        onClick={nextSlide}
        aria-label="siguiente imagen"
      >
        <StepForward />
      </button>
      <div className="absolute bottom-4 flex gap-1.5">
        {nodes.map((node, index) => (
          <button
            aria-label={`ir a la imagen ${index + 1}`}
            onClick={() => gotoSlide(index)}
            type="button"
            key={node.id}
            className={`${
              index === slide ? "bg-bone" : "bg-bone/50"
            } block cursor-pointer rounded-full drop-shadow-md w-2 h-2`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
