import * as React from "react"
import { Link } from "gatsby"
import Tally from "./tallys"
const Form = ({ }) => (
    
    <section id="" className="text-gray-600 body-font text-white relative">
      <div className="container px-5 bg-grey py-24 mx-auto">
        <div className="flex flex-col bg text-center w-full mb-12">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bordeaux">Inscription à la table ronde</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <Tally/>
        </div>
      </div>
    </section>
)

export default Form 
