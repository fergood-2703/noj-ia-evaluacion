import {
  CalendarDays,
  MessageSquare,
  Star
} from "lucide-react"

function EvaluationHistory({ history }) {

  return (

    <section
      className="history-section"
      id="history"
    >

      <div className="history-header">

        <h2>
          Historial de Evaluaciones
        </h2>

        <p>
          Registro de evaluaciones realizadas sobre la plataforma.
        </p>

      </div>

      <div className="history-table">

        <div className="history-table-head">

          <span>Fecha</span>
          <span>Promedio</span>
          <span>Comentario</span>
          <span>Estado</span>

        </div>

        {
          history.length === 0 ? (

            <div className="empty-history">

              No hay evaluaciones registradas.

            </div>

          ) : (

            history.map((item, index) => (

              <div
                className="history-row"
                key={index}
              >

                <div className="history-cell">

                  <CalendarDays size={16} />

                  <span>
                    {item.date}
                  </span>

                </div>

                <div className="history-cell">

                  <Star
                    size={16}
                    fill="#1D9E75"
                    color="#1D9E75"
                  />

                  <span>
                    {item.average.toFixed(1)}
                  </span>

                </div>

                <div className="history-cell comment">

                  <MessageSquare size={16} />

                  <span>
                    {item.comment}
                  </span>

                </div>

                <div className="history-status">

                  Excelente

                </div>

              </div>

            ))

          )
        }

      </div>

    </section>
    

  )
}

export default EvaluationHistory