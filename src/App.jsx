import { useState } from 'react'
import './App.css'

const angles = [
  { id: 'full-rep', label: 'Full rep' },
  { id: 'waistband', label: 'Waistband' },
  { id: 'fabric', label: 'Fabric' },
]

export default function App() {
  const [activeAngle, setActiveAngle] = useState(angles[0])

  return (
    <div className="rebound">
      <header className="masthead">
        <span className="wordmark">REBOUND</span>
        <span className="collection-label">First Lift Collection</span>
      </header>

      <main>
        <section className="campaign" aria-labelledby="campaign-title">
          <div className="hero">
            <div className="hero-copy">
              <h1 id="campaign-title">
                Built<br />
                to lift.
              </h1>
            </div>

            <figure className="hero-media">
              <div className="media-placeholder" aria-hidden="true" />
              <figcaption className="angle-caption" aria-live="polite">
                {activeAngle.label}
              </figcaption>
            </figure>
          </div>

          <div className="angle-controls" role="group" aria-label="Squat angle">
            {angles.map((angle) => (
              <button
                key={angle.id}
                type="button"
                aria-pressed={activeAngle.id === angle.id}
                onClick={() => setActiveAngle(angle)}
              >
                {angle.label}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}