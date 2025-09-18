import IntegranteCard from '../componentes/IntegrantesCard';
import Foto1 from '../img/Ellipse 3.png';
import Foto2 from '../img/Ellipse 2.png';


function Integrantes() {
  return (
    <>
      <section className=" h-[53.5rem] flex flex-col justify-center items-center">
        <h2 className="text-3xl mt-100 mb-20 md:mt-0">Conheça Nossa Equipe</h2>
        <div className='flex flex-col md:flex-row gap-20'>

          <IntegranteCard
            foto={Foto2}
            nome="Isis Macedo"
            rm="561957"
            git="https://github.com/isismodd"
            linkedin="https://www.linkedin.com/in/isis-macedo-aa515920b/"
          />

          <IntegranteCard
            foto={Foto1}
            nome="Ana Clara Oliveira"
            rm="561957"
            git="https://github.com/nanabaa"
            linkedin="https://www.linkedin.com/in/anaclaraolinasc"
          />

        </div>
      </section>

    </>
  )

}

export default Integrantes