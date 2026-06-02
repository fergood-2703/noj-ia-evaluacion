import { useState } from "react"

import {
  Star,
  Send
} from "lucide-react"

function FeedbackForm() {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (

    <section className="feedback-section">

      <div className="feedback-header">

        <h2>
          Evaluar Plataforma
        </h2>

        <p>
          Comparte tu experiencia utilizando Noj IA.
        </p>

      </div>

      <form
        className="feedback-form"
        onSubmit={handleSubmit}
      >

        <div className="stars-container">

          {
            [...Array(5)].map((_, index) => {

              const current = index + 1

              return (
                <button
                  type="button"
                  key={current}
                  className="star-button"
                  onClick={() => setRating(current)}
                  onMouseEnter={() => setHover(current)}
                  onMouseLeave={() => setHover(0)}
                >

                  <Star
                    size={34}
                    fill={
                      current <= (hover || rating)
                        ? "#1D9E75"
                        : "transparent"
                    }
                    color={
                      current <= (hover || rating)
                        ? "#1D9E75"
                        : "#CFCFCB"
                    }
                  />

                </button>
              )
            })
          }

        </div>

        <textarea
          placeholder="Escribe tus observaciones sobre la plataforma..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="submit-btn"
          type="submit"
        >

          <Send size={18} />

          Enviar evaluación

        </button>

        {
          submitted && (
            <div className="success-message">
              Evaluación enviada correctamente.
            </div>
          )
        }

      </form>

    </section>

  )
}

export default FeedbackForm