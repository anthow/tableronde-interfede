import * as React from "react"
import { Link } from "gatsby"

const Hero = ({ }) => (
  <section className="text-gray-600  body-font">
    <div className="container mx-auto flex md:grid grid-cols-2 w-12/12  md:flex-row flex-col items-center">
      <img className=" object-cover object-center h-full"
        alt="Photo illustrative pour la table ronde l'Interfédé des CISP le 14 mars 2024 à Namur" src="https://res.cloudinary.com/docshhbla/image/upload/v1704304643/table%20ronde/Group_2_lolev6.png"
      />
      <div className=" bg-bordeaux h-full flex px-10 flex-col pt-20  gap-5 p-10  md:mb-0">
        <h1 className="  title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Table ronde politique sur le paysage de l’insertion socioprofessionnelle en Wallonie
        </h1>
        <h2 className="title-font sm:text-3xl text-2xl mb-4 text-white font-medium ">Namur - 14 Mars 2024
        </h2>
        <div className="text-black hidden">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium,
            sed congue eros facilisis.</p><p> Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue            </p>
        </div>
        <div className="flex justify-center mt-5">
          <a href="#formulaire">

            <button className="inline-flex text-bordeaux bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-90 font-bold rounded text-lg">Inscription</button>
          </a>
        </div>
      </div>

    </div>
  </section>)

export default Hero 
