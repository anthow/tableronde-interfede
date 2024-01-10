import * as React from "react"
import { Link } from "gatsby"

const Intervants = ({ }) => (
    <div className="">
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bordeaux mb-20 text-center">Les intervenants</h2>

    <article className="flex flex-col md:grid grid-cols-3">

        <section className=" flex flex-col text-white items-center bg-ps">

            <div>
                <img src="https://res.cloudinary.com/docshhbla/image/upload/v1704814091/table%20ronde/Christie_morreale_ykhdwt.jpg" className=""></img>
            </div>
            <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <h3 className="text font-bold">Christie Morreale - PS</h3>
                    <h4> Vice-présidente du gouvernement wallon et ministre de l'Emploi, de l'Action sociale, de la Santé et de l'Égalité des Chances </h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                    Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
            </div>
        </section>
        <section className="bg-ecolo flex flex-col text-white">
        <div>
                <img src="https://res.cloudinary.com/docshhbla/image/upload/v1704860160/table%20ronde/0038_Region-Manu-DISABATO-HD_f9m9ws.jpg" className="w-full"></img>
            </div>
            <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold">Manu Disabato - Ecolo</h3>
                    <h4> Député wallon, Député au Parlement de la fédération Wallonie-Bruxelles </h4><br/>
                    
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                    Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
            </div>
        </section>
        <section className=" bg-mr flex flex-col text-white">
        <div>
                <img src="https://res.cloudinary.com/docshhbla/image/upload/v1704873550/table%20ronde/Rachel_Sobry_hkzyeh.jpg
" className="w-full"></img>
            </div>
            <div className="gap-10 my-5 flex flex-col w-10/12 m-auto gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold">Rachel Sobry - MR</h3>
                    <h4> Députée wallonne, Députée au Parlement de la fédération Wallonie-Bruxelles </h4><br/>
                    
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium, sed congue eros facilisis.

                    Maecenas sit amet neque auctor lorem scelerisque finibus aliquam ut metus. Proin quis egestas purus. Proin sagittis quam non maximus congue </p>
            </div>
        </section>
    </article>
    </div>
)

export default Intervants 
