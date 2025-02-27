import Name from "@/components/name";
import Info from "@/components/info";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <><div className="flex flex-col space-y-10">
      <Header />
      <Name />
      <Info />
      <Projects />
      <Skills />
      <Contact />
    </div><div className="py-6 text-center text-code-slate">
        <p>&copy; 2025 Antonio Cabrera Dev. Todos los derechos reservados.</p>
      </div></>
  );
}
