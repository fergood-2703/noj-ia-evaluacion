import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import FeedbackForm from "./components/FeedbackForm"

import InteractiveEvaluationCard
  from "./components/InteractiveEvaluationCard"

import StatisticsDashboard
  from "./components/StatisticsDashboard"

import EvaluationHistory
  from "./components/EvaluationHistory"

import Navbar from "./components/Navbar"

import AboutProject
  from "./components/AboutProject"

import MockupShowcase
  from "./components/MockupShowcase"

import {
  Bot,
  HeartPulse,
  WifiOff,
  FileText,
  ShieldCheck,
  BarChart3
} from "lucide-react"

const defaultEvaluations = [
  {
    title: "Asistente IA",
    description:
      "Evaluación del sistema conversacional inteligente.",
    rating: 4,
    color: "#1D9E75",
    bgColor: "#E1F5EE",
    iconKey: "bot"
  },

  {
    title: "Salud Preventiva",
    description:
      "Acceso a información básica de salud comunitaria.",
    rating: 4,
    color: "#BA7517",
    bgColor: "#FAEEDA",
    iconKey: "health"
  },

  {
    title: "Modo Offline",
    description:
      "Funcionamiento sin conexión a internet.",
    rating: 5,
    color: "#7F77DD",
    bgColor: "#EEEDFE",
    iconKey: "offline"
  },

  {
    title: "Programas Sociales",
    description:
      "Información y acceso a apoyos gubernamentales.",
    rating: 4,
    color: "#D85A30",
    bgColor: "#FAECE7",
    iconKey: "programs"
  },

  {
    title: "Accesibilidad",
    description:
      "Facilidad de uso para comunidades rurales.",
    rating: 5,
    color: "#0F6E56",
    bgColor: "#E1F5EE",
    iconKey: "accessibility"
  }
]

const getIcon = (key) => {

  switch (key) {

    case "bot":
      return <Bot size={24} />

    case "health":
      return <HeartPulse size={24} />

    case "offline":
      return <WifiOff size={24} />

    case "programs":
      return <FileText size={24} />

    case "accessibility":
      return <ShieldCheck size={24} />

    default:
      return null
  }
}

function App() {

  const [evaluations, setEvaluations] = useState(() => {

    const saved =
      localStorage.getItem("noj-evaluations")

    return saved
      ? JSON.parse(saved)
      : defaultEvaluations
  })

  const [history, setHistory] = useState(() => {

    const saved =
      localStorage.getItem("noj-history")

    return saved
      ? JSON.parse(saved)
      : []
  })

  useEffect(() => {

    localStorage.setItem(
      "noj-evaluations",
      JSON.stringify(evaluations)
    )

  }, [evaluations])

  useEffect(() => {

    localStorage.setItem(
      "noj-history",
      JSON.stringify(history)
    )

  }, [history])

  const handleRate = (index, value) => {

    const updated = [...evaluations]

    updated[index].rating = value

    setEvaluations(updated)
  }

  const handleSubmitEvaluation =
    (evaluation) => {

      setHistory(prev => [
        evaluation,
        ...prev
      ])
    }

  const average =
    evaluations.reduce(
      (acc, item) => acc + item.rating,
      0
    ) / evaluations.length

  return (

    <>
      <Navbar />

      <main className="app-container"></main>

      <main className="app-container">

        <Hero average={average} />
        <StatisticsDashboard
          evaluations={evaluations}
          average={average}
        />

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

        <>
          <div
            id="evaluations"
            className="section-anchor"
          />

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
                    icon={getIcon(item.iconKey)}
                    onRate={(value) =>
                      handleRate(index, value)
                    }
                  />

                ))
              }

            </div>

          </section>
        </>

        <FeedbackForm
          evaluations={evaluations}
          onSubmitEvaluation={
            handleSubmitEvaluation
          }
        />

        <EvaluationHistory
          history={history}
        />

        <AboutProject />
        <MockupShowcase />

      </main>
    </>

  )
}

export default App