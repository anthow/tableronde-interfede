import * as React from "react"
import { Link } from "gatsby"

const Hero = ({ }) => (
    <section className="text-gray-600  body-font">
      <div className="container mx-auto flex md:grid grid-cols-2   md:flex-row flex-col items-center">
        <div className="">
          <img className=" object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/docshhbla/image/upload/v1704304643/table%20ronde/Group_2_lolev6.png" />
        </div>
        <div className=" bg-bordeaux h-full flex px-10 flex-col  gap-5 p-10  md:mb-0">
          <h1 className="  title-font sm:text-4xl text-3xl mb-4 font-medium text-white">table ronde politique sur le paysage de l’insertion socioprofessionnelle en Wallonie
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 text-white font-medium ">Namur - 14 Mars 2024
          </h2>
          <div className="text-black">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium,
              sed congue eros facilisis.</p><p> Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue            </p>
          </div>
          <div className="flex justify-center mt-5">
            <button className="inline-flex text-bordeaux bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-90 font-bold rounded text-lg">Inscription</button>
          </div>
        </div>

      </div>
    </section>)

export default Hero 
