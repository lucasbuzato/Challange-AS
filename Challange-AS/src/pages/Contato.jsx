function Contato() {
  return (
    <>
      <section className=" h-[53.5rem] flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-20 md:mt-0">Contate-nos</h2>
        
            <form className="flex flex-col items-center gap-5" name="forms" id="forms" method="get" action="">
                <div>
                    <input className="w-lg md:w-3xl h-[50px] border-00 outline-0 rounded-b-md border-b-5 border-bg focus:border-blue-light" type="text" name="nome" id="nome" placeholder="Nome" required />
                </div>
                <div>
                    <input className="w-lg md:w-3xl h-[50px] border-00 outline-0 rounded-b-md border-b-5 border-bg focus:border-blue-light" type="email" name="email" id="email" placeholder="E-mail" required /> 
                </div>
                <div >
                    <input className="w-lg md:w-3xl h-[50px] border-00 outline-0 rounded-b-md border-b-5  border-bg focus:border-blue-light" type="tel" name="telefone" id="telefone" placeholder="Telefone"  required />
                </div>
                <div >
                    <input className="w-lg md:w-3xl h-[50px] border-00 outline-0 rounded-b-md border-b-5  border-bg focus:border-blue-light" type="text" name="mensagem" id="mensagem" placeholder="Insira sua mensagem" required />
                </div>
                <div >
                    <button className="bg-bg w-50 h-10 rounded-3xl mt-20 text-text-white" onclick="checkInputs()" type="submit" name="submit" id="submit">Enviar</button>
                </div>

            </form>
   
      </section>

    </>
  )
}

export default Contato
