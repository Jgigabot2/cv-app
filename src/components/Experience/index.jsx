import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

const Experience = () => {
  return (
    <section className='justify-center mt-4'>
      <div className='grid grid-rows gap-4'>
      <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <BriefcaseIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA.</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Administración en Active Directory, Servidor
                                                                          DHCP, Servidor DNS, Virtualización en Hyper-V, Windows
                                                                          Server 2008, 2008 R2, 2012, 2012 R2 y 2016. Publicación y
                                                                          diseño de contenido en sitio web.
                                                                          </p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">18 enero 2011 – 15 de enero 2024</p>
     </div>

     <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <BriefcaseIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">SCALETECH S.A.S.</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Asesoría en soluciones Web, Asesoría en
                                                                          Virtualización de Infraestructura en nube privada, publica e
                                                                          hibrida, apoyo en desarrollo de sitios web Frontend en
                                                                          lenguajes PHP, HTML, CSS, JavaScript, React.js y plataformas
                                                                          CMS, Administración en servidores web IIS y Apache
                                                                          </p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">15 octubre 2015 – 30 junio 2023</p>
     </div>
    </div>

    </section>
  );
};

export default Experience;
