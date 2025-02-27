import React from 'react';

const Name: React.FC = () => {
  return (

  <div className='flex flex-col space-y-3 justify-center items-center pt-10'>
    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-pink-500 text-transparent bg-clip-text"> 
      Antonio Cabrera
    </h1>
    <h2 className="text-l">
      Desarrollador Móvil
    </h2>
    <div className="" id='container'>
  <button className="button">Contactame</button>
    </div>
  </div>

  );
};

export default Name;