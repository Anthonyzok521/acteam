import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Smartphone, Gamepad2, Github, ArrowRight, Zap, Users, Rocket, Terminal, GitBranch, Box, ChevronRight } from "lucide-react";
import logoLight from "@/assets/logo-light.svg";
import { useRef } from "react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
  >
    <div className="container mx-auto flex items-center justify-between py-3 px-6">
      <a href="#" className="flex items-center gap-3">
        <img src={logoLight} alt="AC Team" className="h-6" />
        <span className="font-semibold text-foreground text-base">
          Advanced Community
        </span>
      </a>
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="https://github.com/Advanced-Community"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-all text-sm"
      >
        <Github className="w-4 h-4" />
        GitHub
      </a>
    </div>
  </motion.nav>
);

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full bg-accent/[0.05] blur-[100px]" />
      </div>

      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
            Software · Apps Móviles · Videojuegos
            <ChevronRight className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] tracking-tight mb-6 text-gradient-hero"
        >
          Creamos el futuro,
          <br />
          <span className="text-gradient-primary">línea por línea.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Somos un equipo de desarrolladores que transforman ideas en software,
          aplicaciones y videojuegos de clase mundial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all"
          >
            Explorar servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all"
          >
            <Terminal className="w-4 h-4" />
            Ver proyectos
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description: "Aplicaciones web y sistemas empresariales a medida con arquitecturas modernas, APIs robustas y despliegue en la nube.",
    color: "primary" as const,
    features: ["React & Next.js", "APIs REST & NoSQL", "Cloud & DevOps"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android con experiencias fluidas y rendimiento excepcional.",
    color: "accent" as const,
    features: ["React Native", "Flutter", "iOS & Android"],
  },
  {
    icon: Gamepad2,
    title: "Videojuegos",
    description: "Creación de videojuegos inmersivos con mecánicas innovadoras, gráficos de alta calidad y multijugador online.",
    color: "primary" as const,
    features: ["Godot", "3D & 2D", "Multiplayer"],
  },
];

const colorMap = {
  primary: {
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/30",
    dot: "bg-primary",
  },
  accent: {
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    borderHover: "hover:border-accent/30",
    dot: "bg-accent",
  },
};

const ServicesSection = () => (
  <section id="servicios" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="text-primary font-mono text-xs tracking-wider uppercase mb-3 block">
          // Servicios
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Lo que hacemos
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl text-lg">
          Tres pilares de desarrollo que cubren todas tus necesidades digitales.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const colors = colorMap[service.color];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group rounded-lg border border-border bg-card/50 p-6 ${colors.borderHover} transition-all duration-300 hover:bg-card`}
            >
              <div className={`w-10 h-10 rounded-md ${colors.iconBg} flex items-center justify-center mb-5`}>
                <service.icon className={`w-5 h-5 ${colors.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const projects = [
  {
    title: "Translate in Terminal",
    category: "Software",
    description: "Herramienta de línea de comandos escrita en C++ que permite traducir texto y archivos utilizando la API de Gemini.",
    icon: Box,
    tech: ["CLI", "C++", "IA"],
    link: "https://github.com/Advanced-Community/translator_in_terminal"
  },
  {
    title: "Slide Figure",
    category: "Videojuego",
    description: "Un juego con figuras simples que puedes usar para pasar niveles y desbloquear otros modos de juego.",
    icon: Gamepad2,
    tech: ["Godot", "GDScript", "3D"],
    link: "https://acgames-developer.itch.io/slide-figure"
  },
  {
    title: "CDollar",
    category: "App Móvil",
    description: "Aplicación de conversión de moneda (Bs - USD) con integración de API en tiempo real.",
    icon: Smartphone,
    tech: ["Kotlin", "Android", "API"],
    link: "https://github.com/Advanced-Community/cdollar"
  },
];

const ProjectsSection = () => (
  <section id="proyectos" className="py-24 relative">
    <div className="absolute top-0 left-0 right-0 glow-line" />
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="text-accent font-mono text-xs tracking-wider uppercase mb-3 block">
          // Proyectos
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Nuestro trabajo
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl text-lg">
          Proyectos que demuestran nuestra capacidad de crear soluciones excepcionales.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-lg border border-border bg-card/50 overflow-hidden hover:border-muted-foreground/30 transition-all duration-300 hover:bg-card"
          >
            <a href={project.link} target="_blank" >
            <div className="h-40 bg-gradient-to-br from-secondary via-card to-secondary/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />
              <project.icon className="w-10 h-10 text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">{project.category}</span>
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-secondary text-muted-foreground rounded px-2 py-0.5 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: "5+", label: "Proyectos entregados", icon: Box },
  { value: "3", label: "Desarrolladores", icon: Users },
  { value: "99%", label: "Clientes satisfechos", icon: Zap },
  { value: "5+", label: "Años de experiencia", icon: Rocket },
];

const StatsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="rounded-lg border border-border bg-card/30 p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <stat.icon className="w-5 h-5 text-muted-foreground mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const aboutFeatures = [
  { icon: Rocket, text: "Innovación constante" },
  { icon: Users, text: "Equipo colaborativo" },
  { icon: Code2, text: "Código limpio" },
  { icon: Zap, text: "Disciplina activa" },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24">
    <div className="absolute left-0 right-0 glow-line" />
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-xs tracking-wider uppercase mb-3 block">
            // Sobre nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Un equipo
            <br />
            <span className="text-gradient-primary">apasionado</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            En AC Team combinamos creatividad y tecnología para crear productos
            digitales que marcan la diferencia. Desde software empresarial hasta
            videojuegos, cada proyecto es una oportunidad para innovar.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trabajamos con las tecnologías más modernas y metodologías ágiles
            para entregar resultados excepcionales en cada proyecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          {aboutFeatures.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
              className="rounded-lg border border-border bg-card/50 p-5 text-center hover:border-muted-foreground/30 hover:bg-card transition-all duration-300"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoLight} alt="AC Team" className="h-5" />
          <span className="font-medium text-sm text-foreground">Advanced Community</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Advanced Community. Todos los derechos reservados.
        </p>
        <a href="https://github.com/Advanced-Community" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
