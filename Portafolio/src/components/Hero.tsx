import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
    return (
        <section className="bg-gradient-hero grid grid-cols-1 lg:grid-cols-4 w-full min-h-screen items-center p-8 box-border">
            <div className="col-span-3 flex flex-col justify-center">
                <h1 className="text-hero text-heroTitle font-bold text-left p-4">Hola, soy</h1>
                <h1 className="text-hero text-heroName font-bold text-left p-4">Kenneth Teller</h1>
                <p className="text-subtitle text-heroDesc font-light text-left p-4">Product Manager & Software Developer</p>
                <p className="text-body-responsive font-normal text-left p-4 text-heroGray">
                    Apasionado por crear experiencias web excepcionales y soluciones innovadoras.
                    <br />
                    Especializado en desarrollo frontend y backend con tecnologías modernas.
                </p>
                {/* Botones */}
                <div className="flex gap-4 p-4">
                    <button className="text-body-responsive bg-white text-primary px-6 py-2 rounded-lg font-semibold shadow-soft hover:shadow-blue transition-all">
                        My Projects
                    </button>
                    <button className="text-body-responsive bg-transparent border-2 border-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                        Contact me
                    </button>
                </div>
                {/* Iconos */}
                <div className="flex gap-4 p-4">
                    <a href="" className=""></a>
                    <a href="" className=""></a>
                    <a href="" className=""></a>
                </div>
            </div>
            <div className="col-span-1">
                <img src={profileImage} alt="profile" className="w-[80%] h-[80%] rounded-full object-cover border-4 border-blue-500" />
            </div>
        </section>
    );
};

export default Hero;
