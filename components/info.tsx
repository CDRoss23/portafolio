import React from "react";

const Info: React.FC = () => {

    return(
    <div className='flex flex-col space-y-2 justify-center items-center pt-10'>
        <h1 className="text-3xl font-bold mb-8 text-center"> 
            Acerca de mi
        </h1>
        <div className="flex flex-row space-x-4 justify-center items-center w-1/2">
            <img src="linkedln.jpeg" alt="Rossman Cabrera" className="rounded-full w-72" />
            <p className="text-justify text-2xl">
                Hola, soy Desarrollador muntiplataforma, enfocado en páginas web funcionales y aplicaciones moviles.
            </p>
        </div>
    </div>
    );

}

export default Info;