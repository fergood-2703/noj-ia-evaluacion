import { Star } from "lucide-react"

function Hero({ average }) {

  return (

    <section
      className="hero"
      id="dashboard"
    >

      <div className="hero-badge">
        Plataforma de Evaluación
      </div>

      <h1>
        NOJ IA
      </h1>

      <p className="hero-subtitle">
        Asistente comunitario híbrido enfocado en zonas rurales
        con acceso limitado a internet.
      </p>

      <div className="hero-card">

        <div className="hero-score">

          <Star
            size={30}
            strokeWidth={2.5}
          />

          <h2>
            {average.toFixed(1)}
          </h2>

        </div>

        <div className="hero-info">

          <h3>
            Evaluación General
          </h3>

          <p>
            Plataforma evaluada mediante módulos interactivos.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Hero