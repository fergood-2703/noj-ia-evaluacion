import {
  Code2,
  Globe,
  GraduationCap,
  Terminal,
  BookOpen,
  Cpu,
  Layers3,
  UserRound,
  MonitorSmartphone
} from "lucide-react"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

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
              <MonitorSmartphone size={16} />
              Responsive Design
            </li>

            <li>
              <Terminal size={16} />
              GitHub
            </li>

          </ul>

        </div>

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

          <div className="academic-line">
            <BookOpen size={16} />

            <p>
              Materia: SCC - 1012 Inteligencia Artificial
            </p>
          </div>

          <div className="academic-line">
            <Cpu size={16} />

            <p>
              Carrera: Ingeniería en Sistemas Computacionales
            </p>
          </div>

          <div className="academic-line">
            <Layers3 size={16} />

            <p>
              Semestre y Grupo: 8° A
            </p>
          </div>

          <div className="academic-line">
            <UserRound size={16} />

            <p>
              Profesor: Ing. Plácido Balam Can
            </p>
          </div>

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