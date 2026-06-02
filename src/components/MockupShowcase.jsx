import homeImg from "../assets/mockups/home.png"
import programasImg from "../assets/mockups/programas.png"
import detalleImg from "../assets/mockups/detalle.png"
import asistenteImg from "../assets/mockups/asistente.png"
import saludImg from "../assets/mockups/salud.png"
import puebloMayaImg from "../assets/mockups/pueblo-maya.png"
import casaNinoImg from "../assets/mockups/casa-nino.png"
import mujerPoderImg from "../assets/mockups/mujer-poder.png"

import {
  Bot,
  HeartPulse,
  FileText,
  LayoutDashboard,
  ClipboardCheck,
  Landmark,
  Users
} from "lucide-react"

function MockupShowcase() {

  const mockups = [
    {
      title: "Pantalla Principal",
      image: homeImg,
      icon: <LayoutDashboard size={20} />,
      description:
        "Vista inicial del asistente comunitario con acceso rápido a módulos principales."
    },

    {
      title: "Programas Sociales",
      image: programasImg,
      icon: <FileText size={20} />,
      description:
        "Listado de apoyos gubernamentales y programas disponibles."
    },

    {
      title: "Detalle de Programa",
      image: detalleImg,
      icon: <ClipboardCheck size={20} />,
      description:
        "Visualización detallada de requisitos, tutoriales y orientación."
    },

    {
      title: "Asistente IA",
      image: asistenteImg,
      icon: <Bot size={20} />,
      description:
        "Sistema conversacional inteligente enfocado en orientación comunitaria."
    },

    {
      title: "Salud Preventiva",
      image: saludImg,
      icon: <HeartPulse size={20} />,
      description:
        "Información básica de salud preventiva y consejos comunitarios."
    },

    {
      title: "Apoyo Pueblo Maya",
      image: puebloMayaImg,
      icon: <Users size={20} />,
      description:
        "Programa orientado a comunidades indígenas y apoyos municipales."
    },

    {
      title: "Casa del Niño Indígena",
      image: casaNinoImg,
      icon: <Landmark size={20} />,
      description:
        "Información sobre apoyo alimentario y alojamiento infantil."
    },

    {
      title: "Mujer es Poder",
      image: mujerPoderImg,
      icon: <Users size={20} />,
      description:
        "Programa estatal enfocado en apoyo económico para mujeres."
    }
  ]

  return (

    <section className="mockup-section">

      <div className="mockup-header">

        <span>
          INTERFAZ DEL SISTEMA
        </span>

        <h2>
          Experiencia visual de Noj IA
        </h2>

        <p>
          Visualización de las principales pantallas
          y módulos interactivos del prototipo.
        </p>

      </div>

      <div className="mockup-grid">

        {
          mockups.map((item, index) => (

            <div
              className="mockup-card"
              key={index}
            >

              <div className="mockup-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="mockup-content">

                <div className="mockup-title">

                  {item.icon}

                  <h3>
                    {item.title}
                  </h3>

                </div>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  )
}

export default MockupShowcase