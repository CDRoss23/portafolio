import React from "react";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "SQL", "Git"].map((skill) => (
                    <span key={skill} className="bg-code-navy px-4 py-2 rounded-full text-code-green">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;