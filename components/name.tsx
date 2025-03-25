import React from 'react';

const Name: React.FC = () => {
  return (

  <div className='flex flex-col justify-center items-center space-y-3 pt-10'>
    <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-900 to-pink-500 text-transparent bg-clip-text"> 
      Rossman Cabrera
    </h1>
    <h2 className="text-2xl py-24">
      Desarrollador Multiplataforma
    </h2>
    <div className="flex justify-evenly">
      <div className="mx-12" id='container'>
      <button className="button"> <a href="mailto:rossmancd23@gmail.com">Contáctame</a></button>
      </div>
      <div className="mx-12" id='container'>
      <button className="button"> <a href="#proyectos">Ver Proyectos</a></button>
      </div>
    </div>
  </div>

  );
};

export default Name;