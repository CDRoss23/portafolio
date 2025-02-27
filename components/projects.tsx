import React from "react";

const Projects: React.FC = () => {
    const projects = [
        { title: "Project 1", description: "Description for project 1", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 2", description: "Description for project 2", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 3", description: "Description for project 3", imageUrl: "https://via.placeholder.com/150" },
    ];

    return(
    <div className='flex flex-col space-y-4 justify-center items-center pt-10'>
        <h1 className="text-3xl font-bold mb-8 text-center"> 
            Proyectos
        </h1>
        <div className="flex flex-row space-x-4 justify-center items-center w-1/2">
            {projects.map((project, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-lg">
                <img src="/placeholder.svg" alt={`Proyecto ${project}`} width={400} height={200} className="mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Proyecto {project.title}</h3>
                <p className="text-code-slate mb-4">Descripción breve del proyecto y las tecnologías utilizadas.</p>
                <a href="#" className="text-code-green hover:underline">
                    Ver más
                </a>
            </div>
            ))}
        </div>
    </div>
    );
}

export default Projects;