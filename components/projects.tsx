import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
    const projects = [
        { title: "ATSAS", description: "Description for project 1", img: "atsas.png", URL: "https://atsas.net/"},
        { title: "Auditech", description: "Description for project 2", img: "auditech.png", URL: "https://auditechnicaragua.net/"},
        { title: "El Binario", description: "Description for project 2", img: "ElBinario.png", URL: "https://tubular-tanuki-f2166d.netlify.app/"},
    ];

    return(
    <div className='flex flex-col space-y-4 justify-center items-center pt-10'>
        <h1 className="text-3xl font-bold mb-8 text-center"> 
            Proyectos
        </h1>
        <div className="flex flex-row space-x-4 justify-center items-center w-1/2">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col items-center">
                    <Image src={project.img} alt={project.title} width={400} height={200} className="mb-4 rounded" />
                    <h3 className="text-xl font-semibold mb-2">Proyecto {project.title}</h3>
                    <p className="text-code-slate mb-4">{project.description}</p>
                    <a href={project.URL} className="text-code-green hover:underline">
                        Ver más
                    </a>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Projects;