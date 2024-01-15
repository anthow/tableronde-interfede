import * as React from "react"
import Tally from "./tallys"
const Form = ({ }) => (
    
    <section id="formulaire" className="text-gray-600 body-font text-white relative">
      <div className="container px-5 bg-grey py-12 md:py-24  mx-auto">
        <div className="flex flex-col bg text-center w-full ">
          <h2 className="sm:text-3xl text-2xl font-medium title-font md:mb-4 text-bordeaux">Inscription à la table ronde</h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <Tally/>
        </div>
      </div>
    </section>
)

export default Form 
