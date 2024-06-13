import './App.css'
import videoDrRafu  from './assets/videos/Dr-Rafu-Jr-fdown.net.mp4'

export default function App() {

  const telefone = '(11) 9 9696-5481'
  const email = 'rafu.jr@hotmail.com'
  const naturalidade = 'Suzano - São Paulo'

  return (
    <div>
      
      <button id="sidebarToggle" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 md:w-64 lg:w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-100" aria-label="Sidebar">
        <div className="h-full pt-20 pb-20 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col items-center justify-between">
            
            <div className='flex flex-col items-center'>
              <img className="w-28 h-28 rounded-full ring-2 ring-violet-400 dark:ring-gray-500" src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/05/18185728/1-1-scaled.jpg" alt="Bordered avatar" />
              
              <div class="name mt-0">
                <h3>
                  <span className='text-gray-100 font-inter'>Rafu Jr.
                    <span class="back w-64 md:w-96 text-gray-900 text-center font-bold">Dr. Rafu Jr.</span>
                  </span>
                </h3>
              </div>
            </div>
            
            <ul className="space-y-2 font-medium">
              <li>
                  <a href="#" className="font-karla first-line:flex items-center p-2 text-md text-gray-500 rounded-lg dark:text-white hover:text-violet-400 dark:hover:bg-gray-700 group">
                    <span className="ms-3">Home</span>
                  </a>
              </li>
              <li>
                  <a href="#sobre" className="font-karla flex items-center p-2 text-md text-gray-500 rounded-lg dark:text-white hover:text-violet-400 dark:hover:bg-gray-700 group">
                    <span className="font-karla flex-1 ms-3 whitespace-nowrap">Sobre</span>
                  </a>
              </li>
              <li>
                  <a href="#projeto" className="font-karla flex items-center p-2 text-md text-gray-500 rounded-lg dark:text-white hover:text-violet-400 dark:hover:bg-gray-700 group">
                    <span className="font-karla flex-1 ms-3 whitespace-nowrap">Projetos</span>
                  </a>
              </li>
              <li>
                  <a href="#blog" className="font-karla flex items-center p-2 text-md text-gray-500 rounded-lg dark:text-white hover:text-violet-400 dark:hover:bg-gray-700 group">
                    <span className="font-karla flex-1 ms-3 whitespace-nowrap">Blog</span>
                  </a>
              </li>
              <li>
                  <a href="#contato" className="font-karla flex items-center p-2 text-md text-gray-500 rounded-lg dark:text-white hover:text-violet-400 dark:hover:bg-gray-700 group">
                    <span className="font-karla flex-1 ms-3 whitespace-nowrap">Contato</span>
                  </a>
              </li>
            </ul>

            <div className="text-gray-500">
              <div className='flex gap-5 justify-center'>
                <a href="https://www.facebook.com/drrafujr/" target='_blank'>
                  <button type="button" class="bg-gray-100 text-gray-700 border hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <i class="fa-brands fa-facebook"></i>
                  </button>
                </a>

                <a href="https://www.instagram.com/drrafujr/" target='_blank'>
                  <button type="button" class="bg-gray-100 text-gray-700 border hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <i class="fa-brands fa-instagram"></i>
                  </button>
                </a>

                <a href="https://www.instagram.com/drrafujr/">
                  <button type="button" class="bg-gray-100 text-gray-700 border hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <i class="fa-brands fa-twitter"></i>
                  </button>
                </a>
              </div>
              <div className="font-karla mt-5 flex flex-col gap-1">
                <p>Copyright © 2024 Octech S.T.</p>
                <p>Todos os direitos reservado.</p>
              </div>
            </div>
        </div>
      </aside>

      <div className="md:ml-64 lg:ml-96">
        <div className="pl-4 pr-4 lg:pl-8 lg:pr-8 min-h-screen bg-green-50 dark:border-green-50 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className='col-span-2'>
              <h1 className='text-gray-800 text-3xl md:text-3xl lg:text-6xl font-inter font-bold'>Olá, sou o <span className='text-violet-400'>Dr. Rafú JR !</span> Que bom ter você aqui conhecendo minha história e meus projetos</h1>
              <p className='mt-5 text-gray-500 font-karla'>Joseph Raffoul Junior, nascido em 20 de março de 1986 em São Paulo, se formou em medicina.</p>
              
              <a href="#projeto" className='mt-3' >
                <button type="button" class="mt-5 font-karla text-white hover:text-gray-900 border bg-gray-900 hover:border-gray-800 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Ver projetos</button>
              </a>

              <blockquote className="p-4 mt-10 border-s-4 border-orange-400  dark:border-orange-400">
                <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white font-karla">{telefone} <br/> {email} <br/>{naturalidade} </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-8 pt-16 lg:pt-30 bg-white" id="sobre">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <p className='text-xl text-gray-500 font-karla'> - PRAZER EM CONHECER</p>
              <h1 className='text-3xl md:text-3xl font-inter'>DR. Rafu JR</h1>
              <p className='text-xl text-gray-500 font-karla'>Médico - Clinico Geral</p>

              <a href="#projeto">
                <button type="button" class="mt-5 font-karla text-white hover:text-gray-900 border bg-gray-900 hover:border-gray-800 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Ver projetos</button>
              </a>
            </div>

            <div className='lg:col-span-1'>
              <p className='text-gray-500 font-karla'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto officiis laudantium qui quam odio quisquam sint nulla, eaque vel aperiam rerum id sed ut omnis fugit ratione placeat perferendis cumque?</p>
              <p className='mt-5 text-gray-500 font-karla'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique incidunt nulla dolor dolorem accusamus sapiente dicta molestias facere consequatur vitae odio quia aspernatur enim deleniti eveniet officia, provident blanditiis. Veniam?
              At consequuntur ex quidem blanditiis, deserunt labore nesciunt esse eum, aliquid rerum quos ea animi vero doloremque perspiciatis impedit beatae. Dicta error pariatur dolorem libero officiis deleniti aperiam possimus ut.</p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h6 className='underline text-md text-gray-600 uppercase font-karla'>Idade</h6>
                  <p className='text-gray-900 font-karla'>38</p>
                </div>
                <div>
                  <h6 className='underline text-md text-gray-600 uppercase font-karla'>Naturalidade</h6>
                  <p className='text-gray-900 font-karla'>{naturalidade}</p>
                </div>
                <div>
                  <h6 className='underline text-md text-gray-600 uppercase font-karla'>E-mail</h6>
                  <p className='text-gray-900 font-karla'>{email}</p>
                </div>
                <div>
                  <h6 className='underline text-md text-gray-600 uppercase font-karla'>Telefone</h6>
                  <p className='text-gray-900 font-karla'>{telefone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
            <div class="p-6 pt-16 pb-16 bg-green-100 rounded-md dark:bg-gray-800 dark:border-gray-700 text-center"> 
              <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-karla">10+</h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 uppercase font-karla">Experiência</p>
            </div>

            <div class="p-6 pt-16 pb-16 bg-orange-100 rounded-md dark:bg-gray-800 dark:border-gray-700 text-center">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-karla">300+</h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 uppercase font-karla">Paciêntes atendido</p>
            </div>

            <div class="p-6 pt-16 pb-16 bg-blue-100 rounded-md dark:bg-gray-800 dark:border-gray-700 text-center">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-karla">50+</h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 uppercase font-karla">Assitência domiciliar</p>
            </div>
          </div>
        </div>

        <div className='p-4 lg:p-8 pt-16 lg:pt-30 bg-blue-50' id="projeto">
          <h1 className='text-3xl lg:text-4xl text-gray-700 font-inter font-semibold'>Meus Projetos</h1>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
            <div class="p-6 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-white font-inter uppercase">Multirão da saúde</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-karla">Levando atendimento médico para pessoas de vários bairros da cidade de Ferraz de Vasconcelos</p>
                <a href="javascript:void(0)" class="inline-flex font-medium items-center text-gray-600 hover:underline font-karla">
                    Leia mais
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>

            <div class="p-6 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-white font-inter uppercase">Atendimento</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-karla">Atendendo pessoas como clinico e pediatria para as crianças.</p>
                <a href="javascript:void(0)" class="inline-flex font-medium items-center text-gray-600 hover:underline font-karla">
                    Leia mais
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>

            <div class="p-6 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-white font-inter uppercase">Exames</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-karla">Oferecendo para os bairros de Ferraz de Vasconcelos exames como ultrassonografia, teste de visão, diabetes e pressão.</p>
                <a href="javascript:void(0)" class="inline-flex font-medium items-center text-gray-600 hover:underline font-karla">
                    Leia mais
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>
          </div>
        </div>

        <div className='p-4 lg:p-8 pt-16 lg:pt-30 bg-white'>
          <video class="w-full rounded-md" controls>
            <source src={videoDrRafu} type="video/mp4" />
            Seu navegador não suporta esse vídeo.
          </video>
        </div>

        <div className='p-4 lg:p-8 pt-16 lg:pt-30 bg-green-50' id='contato'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
              <div>
                <div className='flex flex-col gap-2'>
                  <p className='text-gray-600 text-2xl font-karla'>- Vamos nos conectar</p>
                  <h1 className='text-3xl lg:text-4xl text-gray-900 font-inter font-semibold'>Entrar em contato</h1>
                  <p className='text-gray-500 font-karla'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore distinctio, ullam vitae excepturi doloribus ad. Adipisci omnis reiciendis odio ratione dolores numquam, blanditiis et perferendis sit provident temporibus, perspiciatis beatae.</p>
                </div>

                <div className='mt-10 font-karla'>
                  <p className='text-gray-900 underline text-lg'>{telefone}</p>
                  <p className='text-gray-900 underline text-lg'>{email}</p>
                  <p className='text-gray-900 underline text-lg'>{naturalidade}</p>
                </div>
              </div>
              <div>
                <form class="">

                  <div class="mb-5 font-karla">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
                    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>

                  <div class="mb-5 font-karla">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>

                  <div class="font-karla">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assunto</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descreva sua dúvida"></textarea>
                  </div>

                  <div className='mb-5'>
                    <button type="button" class="mt-5 font-karla text-white hover:text-gray-900 border bg-gray-900 hover:border-gray-800 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
