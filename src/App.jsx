import { useState } from "react"

import Hero from "./components/Hero"
import FeedbackForm from "./components/FeedbackForm"

import InteractiveEvaluationCard
from "./components/InteractiveEvaluationCard"

import {
  Bot,
  HeartPulse,
  WifiOff,
  FileText,
  ShieldCheck,
  BarChart3
} from "lucide-react"

function App() {

  const [evaluations, setEvaluations] = useState([
    {
      title: "Asistente IA",
      description:
        "Evaluación del sistema conversacional inteligente.",
      rating: 4,
      color: "#1D9E75",
      bgColor: "#E1F5EE",
      icon: <Bot size={24} />
    },

    {
      title: "Salud Preventiva",
      description:
        "Acceso a información básica de salud comunitaria.",
      rating: 4,
      color: "#BA7517",
      bgColor: "#FAEEDA",
      icon: <HeartPulse size={24} />
    },

    {
      title: "Modo Offline",
      description:
        "Funcionamiento sin conexión a internet.",
      rating: 5,
      color: "#7F77DD",
      bgColor: "#EEEDFE",
      icon: <WifiOff size={24} />
    },

    {
      title: "Programas Sociales",
      description:
        "Información y acceso a apoyos gubernamentales.",
      rating: 4,
      color: "#D85A30",
      bgColor: "#FAECE7",
      icon: <FileText size={24} />
    },

    {
      title: "Accesibilidad",
      description:
        "Facilidad de uso para comunidades rurales.",
      rating: 5,
      color: "#0F6E56",
      bgColor: "#E1F5EE",
      icon: <ShieldCheck size={24} />
    }
  ])

  const handleRate = (index, value) => {

    const updated = [...evaluations]

    updated[index].rating = value

    setEvaluations(updated)
  }

  const average =
    evaluations.reduce(
      (acc, item) => acc + item.rating,
      0
    ) / evaluations.length

  return (

    <main className="app-container">

      <Hero average={average} />

      <section className="stats-section">

        <div className="stats-card">

          <div className="stats-icon">
            <BarChart3 size={34} />
          </div>

          <div>

            <h3>
              {average.toFixed(1)}
            </h3>

            <p>
              Promedio General del Sistema
            </p>

          </div>

        </div>

      </section>

      <section className="evaluations-section">

        <div className="section-title">

          <h2>
            Evaluación Modular
          </h2>

          <p>
            Califica individualmente cada componente de Noj IA.
          </p>

        </div>

        <div className="evaluations-grid">

          {
            evaluations.map((item, index) => (

              <InteractiveEvaluationCard
                key={index}
                {...item}
                onRate={(value) =>
                  handleRate(index, value)
                }
              />

            ))
          }

        </div>

      </section>

      <FeedbackForm />

    </main>

  )
}

export default App