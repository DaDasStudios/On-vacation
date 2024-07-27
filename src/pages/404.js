import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="bg-bone w-full px-5">
      <div className="min-h-[100vh] flex flex-col justify-center items-center gap-12">
        <h1 className="text-brown font-bold font-elegant text-4xl sm:text-5xl md:text-6xl text-center">
          Página no encontrada :(
        </h1>
        <p className="text-center text-xl">Lo sentimos, no pudimos encontrar la página que estás buscando</p>
        <Link
          className="text-primary hover:underline text-xl font-medium text"
          to="/"
        >
          Volver a inicio
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404 Not Found</title>
