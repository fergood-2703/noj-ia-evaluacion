import {
  LayoutDashboard,
  BarChart3,
  ClipboardList,
  Info
} from "lucide-react"

function Navbar() {

  return (

    <header className="navbar">

      <div className="navbar-logo">

        <div className="logo-box">
          N
        </div>

        <div>
          <h2>NOJ IA</h2>
          <span>
            Plataforma de evaluación
          </span>
        </div>

      </div>

      <nav className="navbar-links">

        <a href="#dashboard">
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        <a href="#evaluations">
          <BarChart3 size={18} />
          Evaluaciones
        </a>

        <a href="#history">
          <ClipboardList size={18} />
          Historial
        </a>

        <a href="#about">
          <Info size={18} />
          Proyecto
        </a>

      </nav>

    </header>

  )
}

export default Navbar