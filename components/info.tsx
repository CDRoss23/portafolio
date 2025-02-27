import React from "react";

const Info: React.FC = () => {

    return(
    <div className='flex flex-col space-y-2 justify-center items-center pt-10'>
        <h1 className="text-3xl font-bold mb-8 text-center"> 
            Acerca de mi
        </h1>
        <div className="flex flex-row space-x-4 justify-center items-center w-1/2">
            <img src="favicon.ico" alt="PERFIL" />
            <p className="text-justify text-xs">
                Soy un desarrollador móvil con más de 5 años de experiencia en el desarrollo de aplicaciones móviles nativas para Android e iOS.
            </p>
        </div>
    </div>
    );

}

export default Info;