
function Hero () {
    return (
        <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-purple-800 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Yasmin
              </span>
              <span className="font-headline text-5xl font-light text-blue-700">
                Oliveira
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-purple-800" />
              Desenvolvedora React.js Front-end
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
            Estudante de Desenvolvimento Front-End, e estou sempre tentando desbravar essa imensidão de Tecnologias!
            Nascida e criada em Goiânia, apaixonada por uma boa pamonha e pequi.
            Sou fascinada pela diversidade que existe ao redor do mundo. Acredito que cada cultura possui uma riqueza única, expressa em suas tradições, costumes, línguas e artes.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="#contact"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700">
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a
                href="https://www.linkedin.com/in/yasmin-oliveira-tech-desenvolvimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="button flex items-center gap-2 text-blue-900 hover:text-gray-800">
                Conheça meu Linkeedin
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-purple-800 to-purple-600 md:w-1/3" />
    </>
    )
}

export default Hero;
