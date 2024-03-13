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
                    <img alt="Photo de Richard Fournaux du MR, intervenant lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                        src="https://res.cloudinary.com/docshhbla/image/upload/v1710335094/table%20ronde/RichardFournaux_2_dhribt.jpg" className="w-full"></img>
                </div>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-xl">Richard Fournaux - MR</h3>
                        <h4 className="text-lg italic"> Député provincial à Namur </h4>

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

            <section className=" flex flex-col text-white items-center bg-engage">


                <img alt="Logo du parti politique 'Les Engagés', participant à la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                    src="https://res.cloudinary.com/docshhbla/image/upload/v1707387649/2e94f2aa8e40479ca0ac1fd98a70aa7e_1_j9n2n4.jpg" className=""></img>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Benoit Dispa - Les Engagés</h3>
                        <h4 className="text-lg italic"> Député wallon, député au Parlement de la fédération Wallonie-Bruxelles  </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>


            <section className=" flex flex-col text-white items-center bg-ptb">


                <img alt="Photo d' Alice Bernard du MR, intervenante lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                    src="https://res.cloudinary.com/docshhbla/image/upload/v1709623951/table%20ronde/alice_bernard_k3opjd.png" className="w-full"></img>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Alice Bernard - PTB</h3>
                        <h4 className="text-lg italic"> Députée wallonne, députée au Parlement de la fédération Wallonie-Bruxelles </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>


            <section className=" flex flex-col text-white items-center bg-defi">

                <div>
                    <img alt="Photo de Julien Lemoine de Défie, intervenant lors de la table ronde politique de l'Interfédération des CISP, le 14 mars 2024 à Namur"
                        src="https://res.cloudinary.com/docshhbla/image/upload/v1707317174/table%20ronde/291121-actu-cop26-alexandre_1_qkbecz.jpg" className=""></img>
                </div>
                <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">Amaury Alexandre - Défi</h3>
                        <h4 className="text-lg italic"> Député provincial à Namur<br /> </h4>
                    </div>
                    <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                        Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
                </div>
            </section>
        </article>
    </div>
)

export default Intervants 
