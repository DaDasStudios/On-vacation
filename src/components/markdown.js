import * as React from "react"
import Mardown from "react-markdown"
import remarkGfm from "remark-gfm"
import { reactMarkdown } from "../styles/markdown.module.css"

const Markdown = ({ markdown }) => {
  return (
    <Mardown
      className={reactMarkdown}
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </Mardown>
  )
}
export default Markdown