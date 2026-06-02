import { Star } from "lucide-react"

function EvaluationCard({
  title,
  description,
  icon,
  color,
  bgColor,
  rating
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

          <div className="evaluation-rating">

            <Star
              size={18}
              fill={color}
              color={color}
            />

            <span>{rating}</span>

          </div>

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

export default EvaluationCard