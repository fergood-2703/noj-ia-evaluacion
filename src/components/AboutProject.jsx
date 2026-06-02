import {
  WifiOff,
  Languages,
  Bot,
  HeartPulse,
  Users
} from "lucide-react"

function AboutProject() {

  const features = [
    {
      icon: <WifiOff size={28} />,
      title: "Funcionamiento Offline",
      description:
        "Noj IA permite acceder a información esencial sin conexión a internet."
    },

    {
      icon: <Languages size={28} />,
      title: "Español y Maya",
      description:
        "La plataforma considera accesibilidad lingüística para comunidades locales."
    },

    {
      icon: <Bot size={28} />,
      title: "Asistente Inteligente",
      description:
        "Sistema conversacional enfocado en orientación social y comunitaria."
    },

    {
      icon: <HeartPulse size={28} />,
      title: "Salud Preventiva",
      description:
        "Acceso rápido a información básica de salud comunitaria."
    },

    {
      icon: <Users size={28} />,
      title: "Impacto Social",
      description:
        "Diseñado para comunidades rurales con acceso limitado a servicios digitales."
    }
  ]

  return (

    <>
      <div
        id="about"
        className="section-anchor"
      />

      <section className="about-section">

        <div className="about-header">

          <span>
            SOBRE EL PROYECTO
          </span>

          <h2>
            Tecnología enfocada en inclusión comunitaria
          </h2>

          <p>
            Noj IA es un asistente comunitario híbrido diseñado
            para apoyar a comunidades rurales mediante acceso
            accesible a información sobre salud, programas
            sociales y orientación ciudadana.
          </p>

        </div>

        <div className="about-grid">

          {
            features.map((item, index) => (

              <div
                className="about-card"
                key={index}
              >

                <div className="about-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            ))
          }

        </div>

      </section>
    </>

  )
}

export default AboutProject