import React from "react";

interface Experience {
    title: string;
    company: string;
    description: string;
    duration: string;
}

const experiences: Experience[] = [
    {
        title: "AGILE DIGITAL PRODUCT MANAGER",
        company: "Fundación Emprende Ya",
        description: "Desarrollo aplicación multiplataforma de facturacion elétronica en Flutter",
        duration: "Enero 2025 - Actualidad",
    },
    {
        title: "DESARROLLADOR WEB FREELANCER",
        company: "Auditech",
        description: "Desarrollé páginas web para una misma empresa de distribucion de software especializados en auditoría y herramientas de Microsoft",
        duration: "Agosto 2024 - Octubre 2024",
    },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiencias</h2>
            <div className="flex flex-col mx-40">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="bg-black shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow my-8"
                    >
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-code-green">{experience.company}</p>
                        <p className="text-gray-400 mt-2">{experience.description}</p>
                        <p className="text-gray-500 mt-4 text-sm">{experience.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;