import * as React from "react"

const Programme = ({ }) => (
    <section id="programme" className="py-24 flex flex-col gap-20 ">
      <h2 className="title-font sm:text-4xl text-bleu text-3xl mb-4  text-center font-medium text-bordeaux">Le programme
      </h2>

      <ul className="timeline w-10/12 md:6/12 m-auto timeline-vertical">
        <li>
          <div className="timeline-start items-center   bg-bordeaux p-4 text-white timeline-box">
            <span className=" bg-white text-bordeaux text-xl">15h30</span>
            <p>Accueil des invités et des intervenants</p></div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end bg-bleu md:w-1/2 p-4  timeline-box">
            <span className=" bg-white text-bleu text-xl">16h</span>
            <p className="text-white">Allocution d’ouverture par Anne-Hélène Lulling, Secrétaire générale de l’Interfédération des CISP</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start bg-bordeaux  md:w-1/2 p-4 text-white timeline-box">
            <span className=" bg-white text-bordeaux text-xl">16h15 - 18h</span>
            <p>Table ronde politique avec des représentants des différents partis politiques</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end bg-bleu md:w-1/2 p-4 text-white  timeline-box">   
          <span className=" bg-white text-bleu text-xl mb-10">18h - 20h</span>
            <p> Apéritif dinatoire pour poursuivre les débats</p></div>
          <hr />
        </li>
      </ul>
    </section>
)

export default Programme 
