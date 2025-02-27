import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
    <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/CDRoss23" className="text-code-green hover:text-white transition-colors">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rossman-cabrera/" className="text-code-green hover:text-white transition-colors">
                    <FaLinkedin size={24} />
                </a>
                <a href="mailto:rossmancd23@gmail.com" className="text-code-green hover:text-white transition-colors">
                    <FaEnvelope size={24} />
                </a>
            </div>
    </section>
    );
}

export default Contact;