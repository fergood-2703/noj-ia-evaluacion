import { Star } from "lucide-react"

function InteractiveEvaluationCard({
  title,
  description,
  icon,
  color,
  bgColor,
  rating,
  onRate
}) {

  return (

    <div className="evaluation-card">

      <div
        className="evaluation-icon"
        style={{
          background: bgColor,
          color: color
        }}
      >
        {icon}
      </div>

      <div className="evaluation-content">

        <div className="evaluation-top">

          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <div className="evaluation-number">
            {rating.toFixed(1)}
          </div>

        </div>

        <div className="interactive-stars">

          {
            [...Array(5)].map((_, index) => {

              const current = index + 1

              return (

                <button
                  key={current}
                  className="interactive-star-btn"
                  onClick={() => onRate(current)}
                >

                  <Star
                    size={22}
                    fill={
                      current <= rating
                        ? color
                        : "transparent"
                    }
                    color={
                      current <= rating
                        ? color
                        : "#D1D1CC"
                    }
                  />

                </button>

              )
            })
          }

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${rating * 20}%`,
              background: color
            }}
          />

        </div>

      </div>

    </div>

  )
}

export default InteractiveEvaluationCard