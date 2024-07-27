import * as React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ( { children, useOverlay }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header useOverlay={useOverlay} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
