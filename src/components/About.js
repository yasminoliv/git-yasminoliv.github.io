function About () {
    return (
        <section className="container mx-auto my-4 max-w-5x1 p-4">
        <div className="relative p-4 text-center">
        <h2 className="relative text-purple-800 font-bold z-11">
            <span className="mr-2 font-headline text-3xl">Sobre</span>
            <span className="font-handwriting text-4xl">Mim</span>   
        </h2>
            <p className="relative text-sm text-gray-600 ">
            Tenho alguns projetos executados, desde que comecei minha jornada como Desenvolvedora Web.
            E gostaria que o próximo fosse o seu.
            </p>
        <div className="absolute left-1/2 top-3 z-0  rounded-lg bg-blue-100/40"/> 
        </div>

        <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-purple-300 p-4 ps-20 md:h-64 md:ps-48">
            <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                <p className="font-handwriting text-lg font-bold">Olá,</p>
                <p>
              <span className="mr-1">Meu nome é: </span>
              <span className="font-headline font-bold uppercase text-purple-800">Yasmin Oliveira</span>
                </p>
                <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-purple-800">
                    Idade:
                  </td>
                  <td>21</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-purple-800">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+551299999999"
                      className="underline hover:text-purple-800"
                    >
                      +55 62 98281-8469
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-purple-800">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:oliveirayasmin2709@ggmail.com"
                      className="underline hover:text-purple-800"
                    >
                      oliveirayasmin2709@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-purple-800">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/AqDbzpesNwc29bm96"
                      target="#to-do"
                      className="underline hover:text-purple-800"
                    >
                      Goiânia-GO
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
                <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600
                bg-[url(./img/yas.jpg)]
                bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div> 
        </div>
        </div>
    </section>
  )
}

export default About;