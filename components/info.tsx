import React from "react";

const Info: React.FC = () => {
    return (
        <div className="flex flex-col space-y-2 justify-center items-center pt-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Acerca de mi</h1>
            <div className="flex flex-row space-x-4 justify-center items-start w-3/4">
                <img
                    src="linkedln.jpeg"
                    alt="Rossman Cabrera"
                    className="rounded-full w-72"
                />
                <div className="flex flex-col space-y-8">
                    <p className="text-justify text-2xl">
                        Hola, soy Desarrollador multiplataforma, enfocado en páginas web
                        funcionales y aplicaciones móviles.
                    </p>
                    <div className="flex flex-row space-x-8">
                        <div className="border rounded-lg shadow-lg p-6 w-1/2">
                            <h2 className="text-xl font-semibold mb-4 text-center">Frontend</h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["TypeScript", "React", "Flutter", "Angular"].map((skill) => (
                                    <span key={skill} className="bg-code-navy px-4 py-2 rounded-full text-code-green">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border rounded-lg shadow-lg p-6 w-1/2">
                            <h2 className="text-xl font-semibold mb-4 text-center">Backend</h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Node.js", "NoSQL", "SQL", "java"].map((skill) => (
                                    <span key={skill} className="bg-code-navy px-4 py-2 rounded-full text-code-green">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;