import * as React from "react"

const Infos = ({ }) => (
    <article id="info" className=" text-gray-600 py-20 w-10/12 m-auto flex flex-col gap-10  body-font">
  <h2 className="sm:text-3xl text-2xl text-center m-auto  font-medium title-font mb-4 text-bordeaux mb-20 text-center">Informations pratiques</h2>
<section className="flex flex-col gap-10 md:grid grid-cols-3 items-start ">
    <div className="flex flex-col gap-5 items-center">
       <h3 className="text-xl text-bleu font-semibold">🕒 Horaire: </h3>
       <p>Jeudi 14 mars 2024
à 15h30</p><br/>
<h4 className="text-xl text-bleu font-semibold">📍Adresse:</h4>
<p>La Bourse de Namur<br/>
Place d'Armes 1,<br/>
5000 Namur</p>

    </div>
    <div className="flex flex-col gap-5 items-center">
        <h3 className="text-xl text-bleu font-semibold">🚗 Parking</h3>
      <p> 2min. à pied du parking Beffroi<br/>4min. à pied du parking Confluence</p>
    </div>
    <div className="flex flex-col gap-5 items-center">
        <h3 className="text-xl text-bleu font-semibold">🚆 Transport en commun</h3>
        <p>à 20min. à pied de la gare de Namur</p>
    </div>
</section>
    </article>)

export default Infos 
