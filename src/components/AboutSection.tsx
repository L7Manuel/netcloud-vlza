import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const team = [
    {
      name: "Michael Rengifo",
      role: "Fundador & CEO",
      image: "/ceo-profile-1.jpg",
      expertise: "Diseño Gráfico & UX/UI"
    },
    {
      name: "Lermit Sánchez",
      role: "Fundador & CEO", 
      image: "/ceo-profile-2.jpg",
      expertise: "Growth Marketing & Estrategia Digital"
    }
  ];

  return (
    <section id="nosotros" className="py-6 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        {/* Sección Principal */}
        <div className="max-w-5xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8">
            Conoce al equipo detrás de tu transformación digital
          </h2>
          <div className="max-w-4xl">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed">
              En NETCLOUD unimos el talento creativo y estratégico para ofrecer soluciones digitales completas. 
              Como empresa emergente, combinamos diseño gráfico profesional con marketing de crecimiento y 
              desarrollo web moderno. Nos enfocamos en crear experiencias visuales impactantes y estrategias 
              que generen resultados reales para tu negocio, con la agilidad y dedicación que solo una 
              startup comprometida puede ofrecer.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Transformar ideas en soluciones digitales impactantes mediante diseño excepcional y 
                estrategias de crecimiento inteligentes. Como equipo fundador, nos comprometemos con cada 
                proyecto como si fuera nuestro propio negocio, entregando resultados que superen expectativas. 
                Si buscas un socio tecnológico que entienda tu visión y trabaje con pasión por hacerla realidad,
                estamos listos para demostrarte lo que podemos lograr juntos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-secondary transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Nuestra Visión</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Convertirnos en el referente regional para empresas que buscan destacarse mediante 
                innovación digital y diseño excepcional. Nuestro objetivo es construir una cartera de 
                clientes exitosos que testimonien el poder de combinar creatividad con estrategia. 
                Si tu empresa busca diferenciarse en el mercado digital, te invitamos a ser parte de 
                nuestra historia de crecimiento mutuo.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Conoce Nuestro Equipo */}
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Conoce Nuestro Equipo
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;