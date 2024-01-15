import * as React from "react"

const Infos = ({ }) => (
    <article className="hidden text-gray-600 py-20 w-10/12 m-auto flex flex-col gap-10  body-font">
  <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bordeaux mb-20 text-center">Informations pratiques</h2>
<section className="flex flex-col gap-10 md:grid grid-cols-3 items-center">
    <div className="flex flex-col gap-5 items-center">
        <h3 className="text-xl text-bleu font-semibold">Informations générales</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium,
              sed congue eros facilisis.</p>
    </div>
    <div className="flex flex-col gap-5 items-center">
        <h3 className="text-xl text-bleu font-semibold">S'y rendre en voiture</h3>
      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium,
              sed congue eros facilisis.</p>
    </div>
    <div className="flex flex-col gap-5 items-center">
        <h3 className="text-xl text-bleu font-semibold">S'y rendre En transport en commun</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas tempor tempor urna eget vulputate. Maecenas consequat turpis sed nisi pretium,
              sed congue eros facilisis.</p>
    </div>
</section>
    </article>)

export default Infos 
