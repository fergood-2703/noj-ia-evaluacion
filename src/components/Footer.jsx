import {
  Github,
  Code2,
  Globe,
  GraduationCap
} from "lucide-react"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        {/* LEFT */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="footer-logo-box">
              N
            </div>

            <div>

              <h2>
                NOJ IA
              </h2>

              <span>
                Plataforma de evaluación
              </span>

            </div>

          </div>

          <p>
            Plataforma enfocada en evaluación
            de experiencia y análisis funcional
            del asistente comunitario híbrido
            Noj IA.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links">

          <h3>
            Tecnologías
          </h3>

          <ul>

            <li>
              <Code2 size={16} />
              React + Vite
            </li>

            <li>
              <Globe size={16} />
              Responsive Design
            </li>

            <li>
              <Github size={16} />
              GitHub
            </li>

          </ul>

        </div>

        {/* RIGHT */}

        <div className="footer-academic">

          <h3>
            Información Académica
          </h3>

          <div className="academic-item">

            <GraduationCap size={18} />

            <span>
              Instituto Tecnológico Superior
              de Felipe Carrillo Puerto
            </span>

          </div>

          <p>
            Proyecto académico — 2026
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 NOJ IA — Todos los derechos reservados
        </span>

      </div>

    </footer>

  )
}

export default Footer