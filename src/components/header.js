import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="text-gray-600 body-font">
  <div class="container justify-between items-center mx-auto flex flex-wrap p-5 flex-row">
    <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
    <img className=" " alt="Logo Interfédé" src="https://res.cloudinary.com/docshhbla/image/upload/c_scale,w_100/v1704353321/table%20ronde/logo_interfede_lv2j40.webp" />

    
    </a>
    <nav class="md:ml-auto hidden md:flex md:mr-auto  flex-wrap items-center text-base  justify-center">
      <a href="#programme" class="mr-5 hover:text-gray-900">Programme</a>
      <a href="#intervenants" class="mr-5 hover:text-gray-900">Intervenants</a>
      <a href="#info" class="mr-5 hover:text-gray-900 hidden">Informations pratiques</a>

    
    </nav>
    <nav className="flex flex-row gap-5">
      <a href="#formulaire">
    <button class="inline-flex items-center bg-bordeaux text-white border-0 py-1 px-3 focus:outline-none hover:opacity-90 rounded font-bold mt-4 md:mt-0">Inscription
    </button></a>
    <a href="http://interfede.be" className="hidden md:block" target="__blank">
    <button class="inline-flex items-center bg-bleu text-white border-0 py-1 px-3 focus:outline-none hover:opacity-90 rounded font-bold mt-4 md:mt-0">Interfede.be
    </button>
    </a>
    </nav>

  </div>
    
  </header>
)

export default Header
