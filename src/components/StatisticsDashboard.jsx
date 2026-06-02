import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts"

import {
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Star
} from "lucide-react"

function StatisticsDashboard({
  evaluations,
  average
}) {

  const chartData = evaluations.map(item => ({
    name: item.title,
    value: item.rating
  }))

  const bestModule =
    [...evaluations].sort(
      (a, b) => b.rating - a.rating
    )[0]

  const satisfaction =
    Math.round((average / 5) * 100)

  const COLORS =
    evaluations.map(item => item.color)

  return (

    <section className="dashboard-section">

      <div className="dashboard-header">

        <h2>
          Resumen Estadístico
        </h2>

        <p>
          Métricas generales del sistema de evaluación.
        </p>

      </div>

      <div className="dashboard-grid">

        {/* LEFT */}

        <div className="chart-card">

          <div className="card-header">

            <BarChart3 size={20} />

            <span>
              Distribución de Evaluaciones
            </span>

          </div>

          <div className="chart-wrapper">

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={4}
                >

                  {
                    chartData.map((_, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    ))
                  }

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* RIGHT */}

        <div className="metrics-grid">

          <div className="metric-card">

            <div className="metric-icon green">
              <Star size={22} />
            </div>

            <h3>
              {average.toFixed(1)}
            </h3>

            <p>
              Promedio General
            </p>

          </div>

          <div className="metric-card">

            <div className="metric-icon purple">
              <TrendingUp size={22} />
            </div>

            <h3>
              {satisfaction}%
            </h3>

            <p>
              Satisfacción
            </p>

          </div>

          <div className="metric-card">

            <div className="metric-icon amber">
              <ShieldCheck size={22} />
            </div>

            <h3>
              {bestModule.title}
            </h3>

            <p>
              Mejor Evaluado
            </p>

          </div>

          <div className="metric-card">

            <div className="metric-icon coral">
              <BarChart3 size={22} />
            </div>

            <h3>
              {evaluations.length}
            </h3>

            <p>
              Módulos Evaluados
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default StatisticsDashboard