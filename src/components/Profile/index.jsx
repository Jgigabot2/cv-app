import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  return (
    <section>
      <div class="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl">
          <div class="flex flex-col p-8">
              <div class="text-2xl font-bold  text-center text-[#374151] pb-6"><CodeBracketIcon className='w-7 h-7 text-green-400'/> Perfil</div>
              <div class=" text-lg  text-center text-[#374151]">Desarrollador frontend con
                          experiencia en desarrollo e
                          implementación de soluciones
                          tecnológicas innovadoras,
                          cumpliendo con objetivos
                          estratégicos, aumentando la
                          eficiencia operativa y mejorando
                          la experiencia del usuario. Con
                          amplio conocimiento en HTML5,
                          CMS, Azure, AWS, TypeScript, Git,
                          GitHub, SQL Server, CSS3,
                          JavaScript, React.js, Node.js y
                          Metodología ágil Kanban.
                          Logrando liderar proyectos y
                          coordinar equipos de trabajo de
                          manera efectiva con orientación al
                          logro, mejoramiento continuo,
                          adaptabilidad y planeación.
                </div>
          </div>
      </div>
    </section>
  );
};

export default Profile;