import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
const Skills = () => {
  return (
    <section>
        <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Frontend Developer</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Virtualización</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Bases de datos</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Administración de servidores</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Liderazgo</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Motivación</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <CheckIcon className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'/>
                <span>Autoconfianza</span>
            </li>
        </ul>

    </section>
  );
};

export default Skills;