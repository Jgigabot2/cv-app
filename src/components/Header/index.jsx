import React from 'react';
import Foto from '../../img/Perfil.jpg';

const Header = () => {
  return (
    <header>
      <h1 className='text-center text-4xl font-sans font-bold'>John Fredy Cespedes Beltran</h1>
      <p className='text-center text-xl font-medium'>Desarrollador Front-End</p>
      <div>
      <img className='rounded-lg w-76 h-96 mt-4 max-w-lg mx-auto' src={ Foto } alt="Foto perfil"></img>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
      <a rel="noopener" target="_blank" href="https://github.com/Jgigabot2" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
            <span>Visita mi Github</span>
        </a>
        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/mgjohncespedes/" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
            <span>Sigueme en Linkedin</span>
        </a>
      </div>
    </header>
  );
};

export default Header;