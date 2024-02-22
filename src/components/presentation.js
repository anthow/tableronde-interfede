import * as React from "react"

const Presentation = ({ }) => (
    <div id="animatrice" className="">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bordeaux m-20  text-center">Table ronde animée par </h2>
        <article className="flex mt-10 flex-col md:grid grid-cols-3">
        <img className="col-span-1 order-1 md:order-2" alt="Photo de Charlotte Baut, animatrice lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                        src="https://res.cloudinary.com/docshhbla/image/upload/v1708588832/table%20ronde/CB_-_PORTRAIT2024_rx4moq.jpg"/>
            <section className="bg-bordeaux flex flex-col items-center order-2 py-5 md:order-1 col-span-2 pt-10 text-white">
                <h3 className=" text-3xl font-bold">Charlotte Baut</h3>
                <div className="flex w-10/12 m-auto flex-col gap-5">
                <p className="">
                    A Paris, Jean-Luc Delarue intègre Charlotte Baut dans l'équipe de Reservoir Prod, elle découvre le journalisme et les belles histoires humaines au début de sa carrière de 1998 à 2001.</p>
                    <p> A Bruxelles, le groupe RTL lui confie une mission de production audiovisuelle de 2001 à 2018.</p> <p>Ensuite, Charlotte Baut crée The Louise Company pour accompagner les entreprises dans leurs défis de communication en Belgique et en France.</p> 
                    <p>Campagnes digitales partout en Europe, création de fondation, consultance,... Après 20 ans dans les médias, Charlotte Baut accompagne les décideurs et leurs équipes dans la diffusion de leurs messages auprès du grand public.</p> <p>
                        Plus qu'un métier, c'est une passion qui anime toute l'équipe d'indépendants chez The Louise Company.
                </p>
                </div>
            </section>
        </article>

    </div>
)

export default Presentation 
