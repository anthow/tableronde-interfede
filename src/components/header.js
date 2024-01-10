import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className=" " alt="Logo Interfédé" src="https://res.cloudinary.com/docshhbla/image/upload/c_scale,w_100/v1704353321/table%20ronde/logo_interfede_lv2j40.webp" />

    
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Accueil</a>
      <a class="mr-5 hover:text-gray-900">Programme</a>
      <a class="mr-5 hover:text-gray-900">Intervants</a>
    
    </nav>
    <button class="inline-flex items-center bg-bordeaux text-white border-0 py-1 px-3 focus:outline-none hover:opacity-90 rounded text-xl mt-4 md:mt-0">Inscription
  
    </button>
  </div>
    
  </header>
)

export default Header
