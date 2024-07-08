import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const Education = () => {
  return (
    <section className='justify-center mt-4'>
      <div className='flex flex-row space-x-4'>
      <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <AcademicCapIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Master Universitario en Dirección e Ingeniería en Sitios
        Web (Maestría)</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Universidad Internacional de la Rioja</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">2021 - 2024</p>
     </div>

     <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <AcademicCapIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Ingeniero de Sistemas</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Corporación Unificada Nacional de Educación Superior –
        CUN</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">2008 - 2015</p>
     </div>
    </div>

    <div className='grid grid-cols-2 gap-4 mt-4 text-xs items-center'>
      <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <AcademicCapIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 text-xm font-semibold tracking-tight text-gray-900 dark:text-white">Certificación Internacional JavaScript</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Information Technology Specialist</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">2024 - 2024</p>
     </div>

     <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <AcademicCapIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Certificación Azure Data Fundamentals</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Microsoft</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">2022 - 2022</p>
     </div>

     <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <AcademicCapIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Diplomado en Liderazgo</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Universidad Internacional de la Rioja</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">2021 - 2021</p>
     </div>

     <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <AcademicCapIcon className ="w-7 h-7 text-green-400 dark:text-gray-400 mb-3" />
        <h5 class="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Curso Certificación Database Oracle 12C OCA</h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Exacom IT</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">2019 - 2020</p>
     </div>

    </div>
    </section>
  );
};

export default Education;
