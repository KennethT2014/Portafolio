import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/profile.jpeg";
import { preloadProjectsPage } from "../App";
import { preloadProjects } from "../pages/Projects";

const Hero = () => {
    const navigate = useNavigate();

    const handlePreload = () => {
        preloadProjectsPage();
        preloadProjects();
    };

    return (
        <section className="bg-gradient-hero grid grid-cols-1 lg:grid-cols-4 w-full min-h-screen items-center p-8 box-border">
            <div className="col-span-3 flex flex-col justify-center">
                <h1 className="text-hero text-heroTitle font-bold text-left p-4">Hola, soy</h1>
                <h1 className="text-hero text-heroName font-bold text-left p-4">Kenneth Teller</h1>
                <p className="text-subtitle text-heroDesc font-light text-left p-4">CEO <a href='https://www.sueltalo.me' className="text-blue-500 hover:text-blue-600 transition-colors">SUELTALO LLC</a></p>
                <p className="text-body-responsive font-normal text-left p-4 text-heroGray">
                    Dedicado a la solución de problematicas reales mediante el uso de tecnologías.
                    <br />
                    Especializado en soluciones innovadoras mediante tecnologías de vanguardia.
                    <br />
                    Lider de un equipo de desarrollo de software con experiencia en tecnologías web3, IA y desarrollo de software.
                </p>
                {/* Botones */}
                <div className="flex gap-4 p-4">
                    <button 
                        onClick={() => navigate("/projects")}
                        onMouseEnter={handlePreload}
                        className="text-body-responsive bg-white text-primary px-6 py-2 rounded-lg font-semibold shadow-soft hover:shadow-blue transition-all cursor-pointer"
                    >
                        My Projects
                    </button>
                    <button className="text-body-responsive bg-transparent border-2 border-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                        <a href="#contact">Contact me</a>
                    </button>
                </div>

                {/* Iconos */}
                <div className="flex gap-4 p-4">
                    <a href="https://github.com/KennethT2014/KennethT2014" className="">Github</a>
                    <a href="https://www.instagram.com/joan.teller2014/" className="">Instagram</a>
                    <a href="https://www.linkedin.com/in/kenneth-teller-01476b278/" className="">LinkedIn</a>
                </div>
            </div>
            <div className="col-span-1">
                <img src={profileImage} alt="profile" className="w-[80%] h-[80%] rounded-full object-cover border-4 border-blue-500" />
            </div>
        </section>
    );
};

export default Hero;
