import * as React from "react"

const Intervants = ({ }) => (
    <div id="intervenants" className="">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bordeaux mb-20 text-center">Les intervenants</h2>

        <article className="flex flex-col md:grid grid-cols-3">

            <section className=" flex flex-col text-white items-center bg-ps">

                <div>
                    <img alt="Photo de Christie Morreale du PS, intervenante lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur" src="https://res.cloudinary.com/docshhbla/image/upload/v1704814091/table%20ronde/Christie_morreale_ykhdwt.jpg" className=""></img>
                </div>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Christie Morreale - PS</h3>
                        <h4 className="text-lg italic"> Vice-présidente du gouvernement wallon et ministre de l'Emploi, de l'action sociale, de la Santé et de l'égalité des Chances </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>

            <section className=" bg-mr flex flex-col text-white">
                <div>
                    <img alt="Photo de Rachel Sobry du MR, intervenante lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                        src="https://res.cloudinary.com/docshhbla/image/upload/v1704873550/table%20ronde/Rachel_Sobry_hkzyeh.jpg
" className="w-full"></img>
                </div>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-xl">Rachel Sobry - MR</h3>
                        <h4 className="text-lg italic"> Députée wallonne, députée au Parlement de la fédération Wallonie-Bruxelles - membre de la Commission emploi du Parlement wallon </h4>

                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>
            <section className="bg-ecolo flex flex-col text-white">
                <div>
                    <img alt="Photo de Manu Disabato d'Ecolo, intervenant lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                        src="https://res.cloudinary.com/docshhbla/image/upload/v1704860160/table%20ronde/0038_Region-Manu-DISABATO-HD_f9m9ws.jpg" className="w-full"></img>
                </div>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Manu Disabato - Ecolo</h3>
                        <h4 className="text-lg italic"> Député wallon, député au Parlement de la fédération Wallonie-Bruxelles - vice-président de la Commission emploi du Parlement wallon </h4>

                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>

            <section className=" flex flex-col text-white items-center bg-ptb">


                <img alt="Photo d' Alice Bernard du MR, intervenante lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                    src="https://res.cloudinary.com/docshhbla/image/upload/v1705052628/ptb_mohv70.webp" className="w-full"></img>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Alice Bernard - PTB</h3>
                        <h4 className="text-lg italic"> Députée wallonne, députée au Parlement de la fédération Wallonie-Bruxelles </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>
            <section className=" flex flex-col text-white items-center bg-engage">


                <img alt="Logo du parti politique 'Les Engagés', participant à la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur" src="https://res.cloudinary.com/docshhbla/image/upload/v1705067783/les-engages-logo_qqno6i.jpg" className=""></img>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Les Engagés</h3>
                        <h4 className="text-lg italic"> intervenant(e) encore à confirmer </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>

            <section className=" flex flex-col text-white items-center bg-defi">

                <div>
                    <img alt="Photo de Julien Lemoine de Défie, intervenant lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur" 
                    src="https://res.cloudinary.com/docshhbla/image/upload/v1706108694/table%20ronde/julien_Lemoine_2_rgvrqc.jpg" className=""></img>
                </div>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Julien Lemoine  - Défi</h3>
                        <h4 className="text-lg italic"> Conseiller communal et chef de groupe Défi au conseil communal de la Ville de Namur.<br /> tête de liste pour les élections fédérales dans la circonscription de Namur </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>
        </article>
    </div>
)

export default Intervants 
